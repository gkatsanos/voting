<style src="./wrapper.scss" lang="scss"></style>

<template>
  <v-app>
    <main>
      <v-content>
        <v-container grid-list-xl>
          <router-view></router-view>
        </v-container>
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
