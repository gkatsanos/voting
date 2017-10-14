<style src="./wrapper.scss" lang="scss"></style>

<template>
  <v-app>
    <main>
      <v-content v-cloak>
        <div class="loading-spinner" v-once v-if="loadingState">
          <v-progress-circular class="text-xs-center" indeterminate v-bind:size="55" color="primary"></v-progress-circular>
        </div>
        <transition name="fade" appear mode="out-in">
          <router-view></router-view>
        </transition>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  import { mapState } from 'vuex';
  import questionsList from '../QuestionsList/QuestionsList';

  export default {
    name: 'wrapper',
    components: {
      questionsList,
    },
    computed: {
      ...mapState([
        'loadingState',
      ]),
    },
  };
</script>
