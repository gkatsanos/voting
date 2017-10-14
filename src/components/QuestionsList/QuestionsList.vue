<template>
  <v-container grid-list-xl>
    <h4>Questions</h4>
    <v-layout row wrap>
      <question
        v-for="(question, index) in questions"
        :key="question.url"
        :id="question.url"
        :question="question">
      </question>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Question from '../Question/Question';

  export default {
    name: 'questionsList',
    components: {
      Question,
    },
    computed: {
      ...mapGetters([
        'questions',
      ]),
    },
    mounted() {
      this.$store.dispatch('requestItems');
    },
  };
</script>
