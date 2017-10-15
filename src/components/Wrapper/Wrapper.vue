<style src="./wrapper.scss" lang="scss"></style>

<template>
  <v-app>
    <v-toolbar light color="white">
      <div class="logo hidden-sm-and-down">
        <router-link :to="'/'">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 2569 2833" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path class="fil0" d="M2145 1928c9-6 14-16 14-27V757c0-18-15-33-33-33-8 0-16 3-21 8 0 0-76 64-86 72-8 6-17 10-28 10-8 0-15-2-22-6-13-8-664-386-664-386-5-3-10-4-16-4s-12 2-17 5L431 907c-9 6-14 16-14 27v1144c0 18 15 33 33 33 8 0 16-3 21-8 0 0 76-64 86-72 8-6 17-10 28-10 8 0 15 2 22 6 13 8 664 386 664 386 5 3 10 4 16 4s12-2 17-5l841-484zm-841 243c-5 3-11 5-17 5s-11-1-16-4l-509-289c-4-2-9-3-14-3-7 0-13 2-18 6 0 0-42 35-49 41-6 5-13 8-21 8-18 0-33-15-33-33v-848c0-11 6-21 14-27 2-1 632-363 632-363 5-3 11-5 17-5s11 1 16 4l509 289c4 2 9 3 14 3 7 0 13-2 18-6 0 0 42-35 49-41 6-5 13-8 21-8 18 0 33 15 33 33v848c0 11-6 21-14 27-2 1-632 363-632 363z" id="Layer_x0020_1"/></svg>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <router-link :to="'/question/create'">
        <v-btn
            class="white--text"
            color="primary"
            @click="add(voteChoice)">
          Add question
          <v-icon right>create</v-icon>
        </v-btn>
      </router-link>

    </v-toolbar>
    <main>
      <v-content v-cloak>
        <v-container
            fluid
            grid-list-md
            :grid-list-xl="$vuetify.breakpoint.smAndUp"
        >
          <div class="loading-spinner" v-once v-if="loadingState">
            <v-progress-circular class="text-xs-center" indeterminate v-bind:size="55" color="primary"></v-progress-circular>
          </div>
          <transition name="fade" appear mode="out-in">
            <router-view></router-view>
          </transition>
        </v-container>
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
