<template>
  <div>
    <h3>Loading....</h3>
  </div>
</template>
  <script>
export default {
  name: "callback",
  mounted() {
    this.$auth.handleAuthentication().then(data => {
      this.$store.dispatch("user/login", {
        user: this.$auth.user,
        token: this.$auth.accessToken
      });
      
      this.$router.push({ name: "home" });
    });
  }
};
</script>