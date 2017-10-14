<template>
  <v-flex d-flex sm12 md6 lg4 xl3>
    <v-card color="blue-grey lighten-4">
      <v-card-title primary-title>
        <div>
          <div class="headline">{{ question.question }}</div>
          <div>
            {{ question.published_at }}
          </div>
          <div>
            {{ question.choices.length }}
          </div>
        </div>
      </v-card-title>
      <v-card-actions>

          <router-link :to="`${id}`" tag="v-btn">
            See More
          </router-link>
      </v-card-actions>
    </v-card>
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
