<template>
<v-card max-width="960" height="100%" class="mx-auto mt-5">
<v-tabs >
      <v-tab>
        <v-icon left>mdi-account</v-icon>
        {{$t('text.search_teacher')}}
      </v-tab>
      <v-tab>
        <v-icon left>mdi-clock</v-icon>
        {{$t('text.search_schedule')}}
      </v-tab>
      <v-tab>
        <v-icon left>mdi-television</v-icon>
        {{$t('text.search_learning_content')}}
      </v-tab>

  <v-tab-item>
    <search-teacher></search-teacher>
    </v-tab-item>
   <v-tab-item>
    <search-schedule></search-schedule>
    </v-tab-item>
   <v-tab-item>
     <search-content></search-content>
   </v-tab-item>
</v-tabs>
</v-card>
</template>
<script>

import SearchTeacher from "../components/SearchTeacher";
import SearchSchedule from "../components/SearchSchedule";
import SearchContent from "../components/SearchContent";
export default {
  components: {
    SearchTeacher,
    SearchSchedule,
    SearchContent
    },
  data: () => ({
    valid: true,
    lazy: false,
    checkbox: false,
    modalStartDate: false,
    modalStartTime: false,
    modalEndDate: false,
    modalEndTime: false,
    questions: [],
    startDate: null,
    startTime: null,
    endDate: null,
    endTime: null,
    chips: [
      "Programming",
      "Playing video games",
      "Watching movies",
      "Sleeping"
    ],
    items: ["Streaming", "Eating"]
  }),
  computed: {
    name: {
      get: function() {
        return this.$store.getters["profile/name"];
      },
      set: function(d) {
        this.$store.commit("profile/setName", d);
      }
    },
    native: {
      get: function() {
        return this.$store.getters["profile/native"];
      },
      set: function(d) {
        this.$store.commit("profile/setNative", d);
      }
    },
    dateRangeText() {
      return this.dates.join(" ~ ");
    }
  },
  methods: {
    addQuestion(obj) {
      obj.Id = this.questions.length + 1;
      this.questions.push(obj);
      this.dialog = false;
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    closeDialog() {
      this.dialog = false;
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
    },
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    }
  }
};
</script>