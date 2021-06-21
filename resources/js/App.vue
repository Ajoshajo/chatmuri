<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    user: function () {
      return this.$store.getters.getUser;
    },
  },
  mounted() {

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
            loading.close();
          }
        });

    }
  },
};
</script>

