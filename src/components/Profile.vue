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
                                <img class="avatar" src="https://firebasestorage.googleapis.com/v0/b/forum-2a982.appspot.com/o/images%2Favatars%2Fraynathan?alt=media&token=bd9a0f0e-60f2-4e60-b092-77d1ded50a7e" alt="">
                                <div class="last-thread-details">
                                    
                                    
                                    <p class="text-xsmall">By <a href="profile.html">Ray-Nathan James</a>, three weeks ago</p>
                                    <b-button @click="alertDisplay(post)">Send</b-button>
                                      <b-button @click="alertDisplay(post)">Show</b-button>
                                </div>
                            </div>
                        </div>
                    </div>


       </div>

       <div class="forum-stats desktop-only">
      <hr>
      <ul>
        <li><i class="fa fa-user-circle-o"></i>47 users online</li>
        <li><i class="fa fa-user-o"></i>497 users registered</li>
        <li><i class="fa fa-comments-o"></i>49 threads</li>
        <li><i class="fa fa-comment-o"></i>763 posts</li>
      </ul>
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
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            this.sendEmail(user);

            if(result.value) {
                this.$swal(
                    'Your file has been deleted.',
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
                }).then(() => {
                    axios.post(
                        'http://bloodappalt.herokuapp.com/public/send-email',
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
