<template>
  <v-card color="yellow lighten-5">
    <v-card-title primary-title>
      <div>
        <div class="headline">{{$t('text.question')}} {{question.Id}}</div>
        
      </div>
    </v-card-title>
    <v-card-text>
      <h3>{{question.Text}}</h3>
      <v-list color="yellow lighten-5">
            <v-list-item v-for="at in question.Alternatives" :key="at.id">
              <v-list-item-content>
                 <v-layout>
              <v-flex xs1>{{at.Label}}) - </v-flex>
              <v-flex xs8>{{at.Text}}</v-flex>
              <v-flex xs3>
                <v-icon v-show="at.IsCorrect" color="light-green accent-3">mdi-check</v-icon>
              </v-flex>
            </v-layout>
              </v-list-item-content>
            </v-list-item>
          </v-list>
    </v-card-text>
    <v-card-actions>
      <v-btn color="orange" @click="remove(question.Id)" text>{{$t('text.remove')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "QuestionItem",
  props: {
    question: Object,
    remove:Function
  },
  data: () => ({
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
  }
};
</script>