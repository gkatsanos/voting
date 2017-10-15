<style src="./question.scss" lang="scss"></style>

<template>
  <v-flex d-flex sm12 md6 lg4 xl3>
    <router-link :to="`${id}`" class="card-link">
    <v-card color="blue-grey darken-1" hover class="white--text">
      <v-card-title primary-title>
        <div>
          <div class="headline">{{ question.question }}</div>
          <div>
            created {{ question.published_at | moment("from", "now") }}
          </div>
          <div>
            {{ question.choices.length }} choices
          </div>
        </div>
      </v-card-title>
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
