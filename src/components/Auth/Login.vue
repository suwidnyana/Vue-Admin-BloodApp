<template>
   <div class="container">

    <div class="flex-grid justify-center">
        <div class="col-6">

            <form action="" class="card card-form">
                <h1 class="text-center">Login</h1>


                <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" type="text" v-model="email" placeholder="Email" class="form-input">
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input id="password" type="password" v-model="password" placeholder="Password" class="form-input">
                </div>

                <p v-if="feedback" class="alert alert-error">{{ feedback }}</p>

                <div class="push-top">
                    <button @click.prevent="login" class="btn-blue btn-block">Masuk</button>
                </div>

               
            </form>

           
        </div>
    </div>
</div>

</template>

<script>
import {fire}  from '../../firebase';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            feedback: null
        }
    },
    methods : {
        login: function(e) {
        
        if( this.email && this.password ) {
            fire.auth().signInWithEmailAndPassword(this.email, this.password)
            .then( () => {
                alert(`You are logged in as ${this.email}`);
                this.$router.go({ path : this.$router.path })
          }).catch(err => {
              this.feedback = err.message
          })
          this.feedback = null

        //   (err) => {
        //     alert('Oops. ' + err.message)
        //   }

    
        } else {
            this.feedback = 'Please fill in both fields'
        }
        
        e.preventDefault();
        }
        
    }
}
</script>


