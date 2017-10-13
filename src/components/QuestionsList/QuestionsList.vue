<template>
  <v-layout row wrap>
    <question
      v-for="(question, index) in questions"
      :key="question.url"
      :id="index"
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
    created() {
      this.$store.dispatch('requestItems');
    },
  };
</script>
