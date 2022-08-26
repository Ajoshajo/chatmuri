<template>
  <router-view />
</template>

<script>
export default {
  computed: {
    user: function () {
      return this.$store.getters.getUser;
    },
  },
  created() {
    const token = localStorage.getItem("token");
    if (token) {
      const loading = this.$vs.loading();
      axios
        .get("user")
        .then((res) => {
          this.$store.dispatch("setUser", res.data);
          loading.close();
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status == 401) {
            this.$store.dispatch("logout");
            window.token = null;
            this.$router.push({ name: "login" });
            loading.close();
          }
        });
    }
  },
};
</script>

