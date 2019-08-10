<template>
 <div class="container">
    <div class="col-full push-top">
          <div class="forum-header">
              <div class="forum-details">
                  <h1>Selamat Datang Di Halaman Dashboard</h1>
                  <p class="text-lead"></p>
              </div>
          </div>
      </div>
       <div class="col-full">


            <!-- <div class="forum-list">

                        <h2 class="list-title">
                            <a>Home</a>
                        </h2>

                       

                            <div class="forum-listing">
                                <div class="forum-details">
                                    <a class="text-xlarge">
                                       <router-link :to="{ name: 'pendonor'}">
                                          Pendonor
                                      </router-link>
                                    </a>
                              </div>


                            <div class="threads-count">
                                <p class="count">463</p> threads
                            </div>

                            <div class="last-thread">
                                <img class="avatar" src="https://firebasestorage.googleapis.com/v0/b/forum-2a982.appspot.com/o/images%2Favatars%2Fraynathan?alt=media&token=bd9a0f0e-60f2-4e60-b092-77d1ded50a7e" alt="">
                                <div class="last-thread-details">
                                    <a href="thread.html">Do you know what FIAT stands f...</a>
                                    <p class="text-xsmall">By <a href="profile.html">Ray-Nathan James</a>, three weeks ago</p>
                                </div>
                            </div>

                        </div>

                        <div class="forum-listing">
                            <div class="forum-details">
                                <a class="text-xlarge">
                                       <router-link :to="{ name: 'penerimadonor'}">
                                          Penerima Donor
                                      </router-link>
                                    </a>
                        </div>


                            <div class="threads-count">
                                <p class="count">49</p> threads
                            </div>

                            <div class="last-thread">
                                <img class="avatar" src="https://firebasestorage.googleapis.com/v0/b/forum-2a982.appspot.com/o/images%2Favatars%2Fraynathan?alt=media&token=bd9a0f0e-60f2-4e60-b092-77d1ded50a7e" alt="">
                                <div class="last-thread-details">
                                    <a href="thread.html">What is the most exciting fish...</a>
                                    <p class="text-xsmall">By <a href="profile.html">Ray-Nathan James</a>, 3 hours ago</p>
                                </div>
                            </div>

                        </div>

                        <div class="forum-listing">

                            <div class="forum-details">
                                <a class="text-xlarge" href="forum.html">
                                 <router-link :to="{ name: 'permintaan'}">
                                          Permintaan Darah
                                      </router-link>

                                </a>
                            </div>


                            <div class="threads-count">
                                <p class="count">16</p> threads
                            </div>

                            <div class="last-thread">
                                <img class="avatar" src="http://i0.kym-cdn.com/photos/images/facebook/000/010/934/46623-batman_pikachu_super.png" alt="">
                                <div class="last-thread-details">
                                    <a href="thread.html">How can I chop onions without...</a>
                                    <p class="text-xsmall">By <a href="profile.html">Bruce Wayne</a>, last week</p>
                                </div>
                            </div>

                        </div>


                        

                    </div> -->


       </div>

       <div class="forum-stats desktop-only">
            <hr>
            <ul>
                <li><i class="fa fa-user-circle-o"></i>{{ profileCount }} users</li>
                <li><i class="fa fa-comment-o"></i>{{ donorsCount }} posts</li>
            </ul>
  </div>

   </div>
</template>

<script>
import { pendonorRef, DonorRef, profileRef } from '../firebase'
export default {
  name: 'Home',
  data() {
    return {
        pendonor : pendonorRef,
        pendonors: [],
        donorsCount: 0,
        profileCount: 0
    }
  },
    mounted() {
            // this.pendonor.on('value', (snapshot) => {
            //     this.pendonors = snapshot.val();
            // });

            DonorRef.on('value', (snapshot) => {
                this.donorsCount = Object.values(snapshot.val()).length;
            });

            profileRef.on('value', (snapshot) => {
                this.profileCount = Object.values(snapshot.val()).length;
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
