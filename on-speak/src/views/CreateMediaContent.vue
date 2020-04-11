<template>
  <v-card width="660" class="mx-auto mt-5">
    <v-card-title class="pb-0">
      <h2>{{$t('text.Content_title')}}</h2>
    </v-card-title>
    <v-spacer></v-spacer>
    <v-card-subtitle class="pb-0">{{$t('text.content_message')}}</v-card-subtitle>
    <v-spacer></v-spacer>
    <v-card-text>
      <v-row align="center" class="d-block pa-2">
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-text-field
            v-model="videoUrl"
            :rules="videoUrlRules"
            :label="$t('text.video_url')"
            required
          ></v-text-field>
          <v-checkbox v-model="isPublic" :label="$t('text.is_public_content')"></v-checkbox>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">{{$t('text.add_question')}}</v-btn>
            </template>
            <create-question :QId="this.questions.length + 1" :addQuestion="addQuestion" :closer="closeDialog"></create-question>
          </v-dialog>
          <v-list>
            <v-list-item v-for="q in questions" :key="q.id">
              <v-list-item-content>
                <question-item :question="q" :remove="remove"></question-item>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-form>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="warning" class="mr-4" @click="reset">{{$t('text.clear')}}</v-btn>
      <v-btn color="success" class="mr-4" @click="save" :disabled="!valid">{{$t('text.save')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import QuestionItem from "../components/QuestionItem";
import CreateQuestion from "../components/CreateQuestion";
export default {
  components: {
    QuestionItem,
    CreateQuestion
  },
  data: () => ({
    valid: true,
    lazy: false,
    checkbox: false,
    modal: null,
    questions: [],
    dialog: false,
  }),
  computed: {
    videoUrl: {
      get: function() {
        return this.$store.getters["content/videourl"];
      },
      set: function(d) {
        this.$store.commit("content/videourl", d);
      }
    },
    isPublic: {
      get: function() {
        return this.$store.getters["content/ispublic"];
      },
      set: function(d) {
        this.$store.commit("content/ispublic", d);
      }
    },
    videoUrlRules() {
      return [
        v => !!v || this.$t("text.video_url") + " " + this.$t("text.required")
      ];
    }
  },
  methods: {
    addQuestion(obj) {
      obj.Id = this.questions.length + 1;
      this.questions.push(obj);
      this.dialog=false;
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
     remove(id) {
      this.questions.pop(id);
      for (let i = 0; i < this.questions.length; i++) {
        this.questions[i].Id = i+1;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    closeDialog(){
      this.dialog=false;
    },
    save() {
      let callPog = localaddress => {
        console.log(localaddress);
        this.$store.commit("profile/setAddress", localaddress);
        this.$store.dispatch("profile/completeRegistration");
      };
      this.$store.dispatch("address/getAddress").then(function(data) {
        callPog(data);
      });
    }
  }
};
</script>