<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("user")
        .then((res) => {
          this.$store.dispatch("setUser", res.data);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status == 401) {
            this.$store.dispatch("logout");
          }
        });
    }
  },
};
</script>

