<template>
  <div>Home {{ user.name }}</div>
</template>
<script>
export default {
  computed: {
    user: function () {
      return this.$store.getters.getUser;
    },
  },
};
</script>
