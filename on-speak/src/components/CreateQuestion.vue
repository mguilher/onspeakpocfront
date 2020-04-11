<template>
  <v-card color="yellow lighten-5">
    <v-card-title primary-title>
      <div>
        <div class="headline">{{$t('text.question')}} {{QId}}</div>
      </div>
    </v-card-title>
    <v-card-text>
      <v-text-field
        v-model="questionText"
        :rules="questionTextRules"
        :label="$t('text.question_text')"
        required
      ></v-text-field>
      <v-layout>
        <v-flex xs9>
          <v-text-field
            v-model="alternative"
            :rules="alternativeRules"
            :label="$t('text.alternative')"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-checkbox v-model="isCorrect" :label="$t('text.is_correct')"></v-checkbox>
        </v-flex>
        <v-flex xs3>
          <v-btn
            color="light-green"
            class="white--text"
            :disabled="!validAlternative()"
            @click="addAlternative()"
          >
            <v-icon color="white">mdi-plus</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-list color="yellow lighten-5">
        <v-list-item v-for="at in alternatives" :key="at.id">
          <v-list-item-content>
            <v-layout>
              <v-flex xs1>{{at.Label}}) -</v-flex>
              <v-flex xs9>{{at.Text}}</v-flex>
              <v-flex xs1>
                <v-icon v-show="at.IsCorrect" color="light-green accent-3">mdi-check</v-icon>
              </v-flex>
              <v-flex xs1>
                <v-icon @click="removeAlternative(at.Id)" right color="warning">mdi-close</v-icon>
              </v-flex>
            </v-layout>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-btn color="orange" class="white--text" @click="closer()">{{$t('text.close')}}</v-btn>
      <v-btn
        color="blue darken-1"
        :disabled="!valid()"
        class="white--text"
        @click="setQuestion()"
      >{{$t('text.ok')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "CreateQuestion",
  props: {
    QId: Number,
    closer: Function,
    addQuestion: Function
  },
  data: () => ({
    questionTextRules: [v => !!v || "Text  is required"],
    alternativeRules: [v => !!v || "Text  is required"],
    alternativeLabel: "A",
    questionText: "",
    alternative: "",
    isCorrect: false,
    alternatives: [],
    isCompleteType: false,
    value: 0.0,
    multipleSelection: false,
    gaps: [],
    Id: 0
  }),
  methods: {
    removeAlternative(id) {
      this.alternativeLabel = "A";
      this.alternatives.pop(id - 1);
      for (let i = 0; i < this.alternatives.length; i++) {
        this.alternatives[i].Label = this.alternativeLabel;
        this.alternatives[i].Id = i + 1;
        this.alternativeLabel = String.fromCharCode(
          this.alternativeLabel.charCodeAt(0) + 1
        );
      }
    },
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
    addAlternative() {
      if (this.alternative == undefined || this.alternative == "") {
        return;
      }

      let id = this.alternatives.length + 1;

      let obj = {
        Text: this.alternative,
        Label: this.alternativeLabel,
        IsCorrect: this.isCorrect,
        Id: id
      };
      this.alternativeLabel = String.fromCharCode(
        this.alternativeLabel.charCodeAt(0) + 1
      );
      this.alternatives.push(obj);
      this.alternative = "";
      this.isCorrect = false;
    },
    valid() {
      if (this.questionText == undefined || this.questionText == "")
        return false;
      if (this.alternatives == undefined || this.alternatives.length < 2)
        return false;
      if (!this.alternatives.some(elem => elem.IsCorrect == true)) return false;

      return true;
    },
    validAlternative() {
      if (this.alternative == undefined || this.alternative == "") return false;
      return true;
    }
  }
};
</script>