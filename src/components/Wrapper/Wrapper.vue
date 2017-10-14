<style src="./wrapper.scss" lang="scss"></style>

<template>
  <v-app>
    <main>
      <v-content>
        <router-view></router-view>
      </v-content>
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
