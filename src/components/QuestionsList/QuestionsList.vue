<template>
  <v-layout row wrap>
    <question
      v-for="(question, index) in questions"
      :key="question.url"
      :id="question.url"
      :question="question">
    </question>
  </v-layout>
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
