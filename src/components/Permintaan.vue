<template >
    
             <div class="container" >
               <div class="col-full">

                  
                        <div class="forum-list">

                            <h2 class="list-title" >
                                <a href="#">Permintaan</a>
                            </h2>
                               <b-table striped hover :items="items"></b-table>

                         <!--  <div class="forum-listing" v-for="(request, key) in permintaans" :key="key">

                            <div class="forum-details">
                                <a class="text-xlarge">{{request.id_user}}</a>
                            </div>


                            <div class="threads-count">
                                <p class="count">{{request.title}}</p> threads
                            </div>

                            <div class="last-thread">
                                <img class="avatar" src="https://i.imgur.com/WPSrfGm.jpg" alt="">
                                <div class="last-thread-details">
                                    <a href="thread.html">What is the best animal joke y...</a>
                                    <p class="text-xsmall">By <a href="profile.html">Blossom</a>, 16 hours ago</p>
                                </div>
                            </div>

                        </div> -->

                            

                    

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
import firebase from 'firebase'
import { permintaanRef } from '../firebase'

export default {
    name: 'Permintaan',
    data() {
        return {
            permintaan : permintaanRef,
            permintaans: [],
              items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
        }
    },
    mounted() {
        this.permintaan.on('value', (snapshot) => {
            this.permintaans = snapshot.val();
        })
    }
}
</script>
