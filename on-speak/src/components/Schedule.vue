<template>
  <v-row>
    <v-col>
      <v-radio-group row wrap>
        <v-switch v-model="dayOfWeek" value="Sunday" :label="$t('text.sunday')" class="mx-4"></v-switch>
        <v-switch v-model="dayOfWeek" value="Monday" :label="$t('text.monday')" class="mx-4"></v-switch>
        <v-switch v-model="dayOfWeek" value="Tuesday" :label="$t('text.tuesday')" class="mx-4"></v-switch>
        <v-switch v-model="dayOfWeek" value="Wednesday" :label="$t('text.wednesday')" class="mx-4"></v-switch>
        <v-switch v-model="dayOfWeek" value="Thursday" :label="$t('text.thursday')" class="mx-4"></v-switch>
        <v-switch v-model="dayOfWeek" value="Friday" :label="$t('text.friday')" class="mx-4"></v-switch>
        <v-switch v-model="dayOfWeek" value="Saturday" :label="$t('text.saturday')" class="mx-4"></v-switch>
      </v-radio-group>
    </v-col>
    <v-col></v-col>
    <v-col></v-col>
    <v-col></v-col>
  </v-row>
</template>
<script>
export default {
  name: "CreateQuestion",
  props: {
    ScheduleData: Object
  },
  data: () => ({
    questionTextRules: [v => !!v || "Text  is required"],
    alternativeLabel: "A",
    dayOfWeek: ""
  }),
  methods: {
    setQuestion() {
      let obj = {
        Text: this.questionText,
        IsCompleteType: false,
        Alternatives: this.alternatives,
        Value: 0.0,
        MultipleSelection: false,
        Gaps: [],
        Id: this.QId
      };
      this.addQuestion(obj);
      this.alternatives = [];
      this.questionText = "";
    },
    valid() {
      if (this.questionText == undefined || this.questionText == "")
        return false;
      if (this.alternatives == undefined || this.alternatives.length < 2)
        return false;
      if (!this.alternatives.some(elem => elem.IsCorrect == true)) return false;

      return true;
    }
  }
};
</script>