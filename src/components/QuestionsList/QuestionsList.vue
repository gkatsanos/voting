<template>
  <div>
    <h4>Questions</h4>
    <v-layout row wrap>
      <question
        v-for="(question, index) in questions"
        :key="question.url"
        :id="question.url"
        :question="question">
      </question>
    </v-layout>
  </div>
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
      if (!this.$store.state.hasLoaded) {
        this.$store.dispatch('requestItems');
      }
    },
  };
</script>
