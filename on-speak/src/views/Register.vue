<template>
  <v-card class="mx-auto mt-5" max-width="460">
    <v-card-title class="pb-0">
      <h2>{{$t('text.sign_up_as_title')}}</h2>
    </v-card-title>
    <v-spacer></v-spacer>
    <v-card-text>
     <p>{{$t('text.sign_redirected_msg')}}</p>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="justify-center">
          <v-btn rounded x-large color="primary" class="mr-4" @click="teacher">{{$t('text.teacher')}}</v-btn>

          <v-btn rounded x-large color="success" class="mr-4"  @click="student">{{$t('text.student')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    
  }),

  methods: {
    teacher() {
      this.$auth.login(true);
    },
    student() {
      this.$auth.login(false);
    }
  }
};
</script>