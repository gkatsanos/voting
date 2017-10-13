<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <question
        v-for="question in questions"
        :key="question.url"
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
    created() {
      this.$store.dispatch('requestItems');
    },
  };
</script>
