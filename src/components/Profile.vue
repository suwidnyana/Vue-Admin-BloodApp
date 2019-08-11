<template>
    <div class="container">
       <div class="col-full">


              <div class="forum-list">

                        <h2 class="list-title">
                            <a>Profile</a>
                        </h2>

                   
                            <div class="forum-listing" v-for="(post, key) in profiles" :key="key">
                                <div class="forum-details">
                                    <a class="text-xlarge">
                                        {{post.nama}}
                                    </a>
                              </div>


                            <div class="threads-count">
                                <p class="count">status</p>{{post.status}}
                            </div>

                            <div class="last-thread">
                              
                                <div class="last-thread-details">
                                    
                                    
                                   
                                    <b-button @click="alertDisplay(post)">Nonaktifkan</b-button>
                                     <b-button @click="sendEmailActive(post)">Aktifkan</b-button> 
                                </div>
                            </div>
                        </div>
                    </div>


       </div>

      

   </div>
   
</template>

<script>
import { profileRef,auth,functions, db } from '../firebase'
import axios from 'axios';
import admin from 'firebase-admin';

export default {
    name: 'PenerimaDonor',
    data() {
    return {
            profile : profileRef,
            profiles: [],
        }
    },
    mounted() {
         this.profile.on('value', (snapshot) => {
            this.profiles = snapshot.val();
        })
    },
methods: {


alertDisplay: function(user) {
        // $swal function calls SweetAlert into the application with the specified configuration.
        this.$swal({
            title: 'Ingin menonaktifkan akun ini?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if(result.value) {
                this.sendEmail(user);

                this.$swal(
                    'Email has been disabled.',
                    'success'
                )
            }
        })
      },
 
    sendEmail: function(user) {
        axios.get('http://bloodappalt.herokuapp.com/public/fetch-auth-user/' + user.id_user)
            .then(response => {
                const data = response.data;
                profileRef.child(data.uid).update({
                    status: 'tidak_aktif'
                }).then(async () => {
                    await axios.post('http://bloodappalt.herokuapp.com/public/disabled-user', { uid: user.id_user });

                    await axios.post(
                        'http://bloodappalt.herokuapp.com/public/send-email',
                        {
                            email: data.email,
                            nama: user.nama
                        }
                    );
                });
            });
    },
      sendEmailActive: function(user){
            axios.get('http://bloodappalt.herokuapp.com/public/fetch-auth-user/' + user.id_user)
            .then(response => {
                const data = response.data;
                profileRef.child(data.uid).update({
                    status: 'aktif'
                }).then(async () => {
                    await axios.post('http://bloodappalt.herokuapp.com/public/enable-user', { uid: user.id_user });
                    await axios.post(
                        'http://bloodappalt.herokuapp.com/public/send-email2',
                        {
                            email: data.email,
                            nama: user.nama
                        }
                    );
                });
            });
    },


  }
    }
 
</script>
