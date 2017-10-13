<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <div class="headline">{{ question.question }}</div>
        <div class="grey--text">
          {{ question.published_at }}
        </div>
        <div>
          {{ question.choices && question.choices.length }}
        </div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>

  export default {
    name: 'questionDetail',
    props: [
      'id',
    ],
    created() {
      if (!this.$store.state.questions.length) {
        this.$store.dispatch('requestItems');
      }
    },
    computed: {
      question() {
        return this.$store.state.questions[this.$route.params.id] || {};
      },
    },
  };
</script>
