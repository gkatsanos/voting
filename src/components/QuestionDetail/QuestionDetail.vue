<template>
  <v-container grid-list-xl>
    <v-layout column>
      <v-flex xs12 lg10 offset-xs1>
        <h4>Question: {{ question.question }}</h4>
        <v-card>
          <v-card-text>
              <div class="grey--text">
                {{ question.published_at }}
              </div>
            <v-form>
              <v-radio-group v-model="voteChoice" column>
                <v-radio
                    :label="choice.choice"
                    :value="choice.url"
                    v-for="(choice, index) in question.choices"
                    v-bind:key="index"
                >
                </v-radio>
              </v-radio-group>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 lg10 offset-xs1 text-xs-right>
        <v-spacer></v-spacer>
        <v-btn
            :disabled="!canVote"
            class="ma-0"
            color="primary"
            @click="vote(voteChoice)">
          Vote
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  export default {
    data() {
      return {
        voteChoice: '',
      };
    },
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
      canVote() {
        return !!this.voteChoice.length;
      },
      question() {
        return this.$store.state.questions
          .filter(element => element.url === this.$route.fullPath)[0] || {};
      },
    },
    methods: {
      vote(choice) {
        this.$store.dispatch('vote', choice);
      },
    },
  };
</script>
