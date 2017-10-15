<template>
  <v-container
      fluid
      grid-list-md
      :grid-list-xl="$vuetify.breakpoint.smAndUp"
  >
    <v-layout column>
      <v-flex xs12 md10 offset-md1 lg9>
        <h4>Question: {{ question.question }}</h4>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-text>
              <div class="grey--text">
                {{ question.published_at }}
              </div>
              <v-form>
                <v-radio-group v-model="voteChoice" column>
                  <div class="mb-1" style='position:relative' v-for="(choice, index) in question.choices">
                    <v-radio
                        :label="choice.choice + ' ('+choice.votes+')'"
                        :value="choice.url"
                        style="z-index:10"
                        :key="index"
                        dark
                        class="pt-1 pb-1"
                        :disabled="question.voted"
                    >
                    </v-radio>
                    <v-progress-linear
                        v-bind:value="votesInPercentage[index]"
                        height="35"
                        :key="index"
                        buffer-value="100"
                        color="info"
                        background-color="blue-grey"
                    >
                    </v-progress-linear>
                  </div>
                </v-radio-group>
              </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md10 offset-md1 lg9 text-xs-right>
        <v-spacer></v-spacer>
        <v-btn
            :block="$vuetify.breakpoint.xsOnly"
            :disabled="!canVote"
            class="ma-0"
            color="primary"
            :loading="btnLoadingState"
            @click="vote(voteChoice)">
          <span v-if="canVote">Vote</span>
          <span v-else-if="this.question.voted">Thank you for voting
            <v-icon right dark>done</v-icon>
          </span>
          <span v-else>Select an Option to Vote</span>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';

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
      if (!this.$store.state.hasLoaded) {
        this.$store.dispatch('requestItems');
      }
    },
    computed: {
      ...mapState([
        'loadingState',
        'btnLoadingState',
      ]),
      canVote() {
        return !!this.voteChoice.length && !this.question.voted;
      },
      question() {
        return this.$store.state.questions
          .filter(element => element.url === this.$route.fullPath)[0] || { choices: [] };
      },
      votesInPercentage() {
        const max = Math.max(...this.question.choices.map(element => element.votes));
        return this.question.choices.map(element => (element.votes / max) * 100);
      },
    },
    methods: {
      vote(choice) {
        this.$store.dispatch('vote', { choice, question: this.question });
        this.voteChoice = [];
      },
    },
  };
</script>
