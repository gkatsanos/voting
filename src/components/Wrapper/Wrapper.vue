<style src="./wrapper.scss" lang="scss"></style>

<template>
  <v-app>
    <main>
      <v-container fluid grid-list-md>
        <questions-list></questions-list>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import questionsList from '../QuestionsList/QuestionsList';

  export default {
    name: 'wrapper',
    components: {
      questionsList,
    },
  };
</script>
