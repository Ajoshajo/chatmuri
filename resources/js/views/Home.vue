<template>
  <div>
    Home <br />
    <div v-if="user != null">
      {{ user.name }}
<<<<<<< HEAD
      {{ user.email }}
=======
>>>>>>> 52858b74bfadfe9ea6e7cd0f9e694f42f2bfa9eb
      <div>
        <vs-button @click="logout">Logout</vs-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user: function () {
      return this.$store.getters.getUser;
    },
  },
  methods:{
      logout(){
          this.$store.dispatch('logout')
          window.token = null
          this.$router.replace({name:'login'})
      }
  }
};
</script>
