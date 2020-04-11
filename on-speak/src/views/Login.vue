<template>
  <v-card class="mx-auto mt-5" max-width="420">
    <v-card-title class="pb-0">
      <h2>{{$t('text.login')}}</h2>
    </v-card-title>
    <v-spacer></v-spacer>
    <v-card-text>
      <p>
          {{$t('text.login_redirected_msg')}}
      </p>
      <!--<div class="text--primary">
        <button @click="callApi">Call</button>
        <p>{{ apiMessage }}</p>
      </div>-->
    </v-card-text>
    <v-card-actions>
      <v-btn rounded x-large class="mr-4" v-if="!$auth.isAuthenticated()" @click="login">{{$t('text.login')}}</v-btn>
      <v-btn rounded x-large class="mr-4" v-if="$auth.isAuthenticated()" @click="logout">{{$t('text.logout')}}</v-btn>
      <v-btn rounded x-large class="mr-4" v-if="!$auth.isAuthenticated()" @click="signUp">{{$t('text.sign_up')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import userservice from "../services/userservice";

export default {
  name: "home",
  components: {},
  data() {
    return {
      apiMessage: ""
    };
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.login();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    },
    signUp() {
      this.$router.push("register")
    },

    async callApi() {
      const token = this.$auth.accessToken;
      await userservice.sendUser(this.$auth.user);
      this.apiMessage = token + "</br>" + data;
    }
  }
};
</script>