<template>
  <div>
    Home <br />
    <div v-if="user != null">
      {{ user.name }}
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
