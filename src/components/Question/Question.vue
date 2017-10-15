<style src="./question.scss" lang="scss"></style>

<template>
  <v-flex d-flex xs12 md6 xl4>
    <router-link :to="`${id}`" class="card-link card" tag="div">
      <v-card
          hover
          :class="[question.voted ? 'green darken-2 white--text' : 'blue-grey darken-1']">
        <v-toolbar dark>
          <v-toolbar-title
              :class="[$vuetify.breakpoint.xsOnly ? 'body-1 ml-3' : 'ml-3']"
          >
            {{ question.question }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-chip v-if="question.voted" small class="hidden-sm-and-down">
            Voted
              <v-icon right>check</v-icon>
          </v-chip>
        </v-toolbar>
        <v-card-text primary-title>
          <div>
            <div class="headline"></div>
            <div>
              created {{ question.published_at | moment("from", "now") }}
            </div>
            <div>
              {{ question.choices.length }} choices
            </div>
            <v-chip v-if="question.voted" small class="hidden-md-and-up">
              Voted
              <v-icon right>check</v-icon>
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </router-link>
  </v-flex>
</template>

<script>

  export default {
    name: 'question',
    props: [
      'question',
      'id',
    ],
  };
</script>
