<template>
  <v-flex d-flex sm12 md6 lg4 xl3>
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="headline">{{ id }} {{ question.question }}</div>
          <div class="grey--text">
            {{ question.published_at }}
          </div>
          <div>
            {{ question.choices.length }}
          </div>
        </div>
      </v-card-title>
      <v-card-actions>
        <router-link :to="{ name: 'question', params: { id: id }}">Detail</router-link>
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
