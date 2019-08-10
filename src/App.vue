<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div v-if="isLoggedIn">
    <Navbar/>
    </div>

    <router-view/>
  </div>
</template>
<script>
import {fire} from './firebase'
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data(){
        return {
            isLoggedIn : false,
            currentUser: false
        }
    },
   created(){
    if(fire.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = fire.auth().currentUser.email;
    }
  }
}
</script>

<style>
  @import './assets/css/style.css';
</style>
