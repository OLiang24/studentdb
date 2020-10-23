<template>
  <div>
    <v-btn color="info" class="mr-4" @click="loginGoogle"> Google </v-btn>
  </div>
</template>
<script>
import firebase from 'firebase/app'
export default {
  methods: {
    loginGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = result.credential.accessToken
          // The signed-in user info.
          const user = result.user
          this.user = result.user
          // ...
          // eslint-disable-next-line no-console
          console.log('token : ' + token)
          // eslint-disable-next-line no-console
          console.log('user : ' + user)
          this.$router.replace('/')
        })
        .catch(function (error) {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          // The email of the user's account used.
          const email = error.email
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential
          // ...
          // eslint-disable-next-line no-console
          console.log('errorCode= ' + errorCode)
          // eslint-disable-next-line no-console
          console.log('errorMessage= ' + errorMessage)
          // eslint-disable-next-line no-console
          console.log('email= ' + email)
          // eslint-disable-next-line no-console
          console.log('credential' + credential)
        })
      if (this.user) {
        this.$router.replace('/user')
      }
    },
  },
}
</script>
<style></style>
