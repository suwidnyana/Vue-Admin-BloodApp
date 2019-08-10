<template>

 
<div>

  <b-navbar toggleable="lg" type="dark" variant="dark">
     <b-navbar-brand>
      <img src="../assets/logo.png" height="50" width="50">
     </b-navbar-brand>


    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
       

           <b-nav-item class="navbar-item" >
             <router-link :to="{ name: 'home'}" v-if="isLoggedIn">
             Home
            </router-link>
           </b-nav-item>


           <b-nav-item class="navbar-item">
             <router-link :to="{ name: 'donor'}" v-if="isLoggedIn">
             Donor
            </router-link>
           </b-nav-item>

            <b-nav-item class="navbar-item margin-right">
             <router-link :to="{ name: 'profile'}" v-if="isLoggedIn">
             Profile
            </router-link>
           </b-nav-item>

           <b-nav-item class="navbar-item margin-right">
             
             <router-link :to="{ name: 'about'}" v-if="isLoggedIn">
             About
            </router-link>
           </b-nav-item>



           <!-- <router-link :to="{ name: 'about'}" v-if="isLoggedIn">About</router-link> -->
       
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
        
         <b-button v-if="isLoggedIn" @click="logout" size="sm" class="my-2 my-sm-0" type="submit">
         Logout
      </b-button>
        </b-nav-form>

       

       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  
</div>


</template>

<script>
import {fire} from '../firebase'
export default {
    name: "Navbar",
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
  },
  methods: {
    logout () {
      fire.auth().
      signOut().
      then(() => {
        this.$router.go({ path: this.$router.path });
      })
    }
  }
}
</script>

<style scoped>
@import  '../assets/css/style.css';
.margin-right { 
 margin-right: 1px
}
</style>

