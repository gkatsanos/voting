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
    <v-layout column align-center>
      <v-btn
          large
          color="primary"
          :block="$vuetify.breakpoint.xsOnly"
          v-if="!maxPagesReached"
          @click="$store.dispatch('requestItems')">
        Load More Questions</v-btn>
    </v-layout>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';
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
      ...mapState([
        'maxPagesReached',
      ]),
    },
    mounted() {
      if (!this.$store.state.hasLoaded) {
        this.$store.dispatch('requestItems');
      }
    },
  };
</script>
