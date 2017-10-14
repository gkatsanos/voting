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
        <v-list>
          <v-list-tile avatar v-for="(choice, index) in question.choices" v-bind:key="index" @click="">
            <v-list-tile-content>
              <v-list-tile-title v-text="choice.choice"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-content>
              <v-list-tile-title v-text="choice.votes"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
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
        return this.$store.state.questions
          .filter(element => element.url === this.$route.fullPath)[0] || {};
      },
    },
  };
</script>
