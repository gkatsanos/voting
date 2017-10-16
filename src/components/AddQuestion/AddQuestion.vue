<template>
  <v-layout column>
    <v-flex xs12 md10 offset-md1 lg9>
      <v-card color="blue-grey darken-2" dark>
        <v-toolbar dark height="100%">
          <v-toolbar-title>
            <span v-if="!questionSaved">
              Add new Question
            </span>
            <span v-else>
              Your Question was submitted succesfully
            </span>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text v-if="!questionSaved">
            <v-form v-model="valid" ref="form">
              <v-text-field
                  name="title"
                  :rules="requiredRule"
                  label="Question title"
                  dark
                  required
                  v-model="question.question"
              ></v-text-field>
              <template
                  v-for="(choice, index) in choices"
                  >
                <transition name="fade" appear mode="in-out">
                  <v-text-field
                      :name="'choice'+index"
                      :rules="requiredRule"
                      :label="'Choice ' + (index+1)"
                      dark
                      :key="index"
                      :required="index<=1"
                      v-model="question.choices[index]"
                  ></v-text-field>
                </transition>
              </template>
            </v-form>
          <v-btn
              class="ml-0"
              @click="addChoice"
              small
          >
            Add Choice
            <v-icon right>add_box</v-icon>
          </v-btn>
          <v-btn
              class="ma-0"
              color="error"
              small
              @click="clearChoices()">
            Clear choices
          </v-btn>
        </v-card-text>
        <v-list dark v-else dense>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>
                Question Title
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ question.question }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>
                Choices
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-for="(choice, index) in question.choices" :key="index">
            <v-list-tile-content>
              <v-list-tile-sub-title>
                {{ choice }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
    <v-flex xs12 md10 offset-md1 lg9 text-xs-right>
      <v-spacer></v-spacer>
      <v-btn
          :block="$vuetify.breakpoint.xsOnly"
          :disabled="!valid"
          class="ma-0"
          color="primary"
          :loading="btnLoadingState"
          v-if="!questionSaved"
          @click="saveQuestion(question)">
          Save Question
      </v-btn>
      <router-link :to="'/'" class="card-link">
        <v-btn
            :block="$vuetify.breakpoint.xsOnly"
            class="ma-0"
            v-if="questionSaved">
            <v-icon left>arrow_back</v-icon>
            Back to Questions
        </v-btn>
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapState } from 'vuex';
  import * as types from '../../store/mutation-types';

  export default {
    data() {
      return {
        valid: true,
        requiredRule: [
          v => !!v || 'You need to fill in this field.',
        ],
        choices: 2,
        question: {
          question: '',
          choices: [],
        },
      };
    },
    name: 'addquestion',
    created() {
      this.$store.commit(types.RESET_QUESTION_FLAG);
    },
    computed: {
      ...mapState([
        'questionSaved',
        'btnLoadingState',
      ]),
    },
    methods: {
      addChoice() {
        this.choices += 1;
      },
      saveQuestion(formData) {
        if (this.$refs.form.validate()) {
          this.$store.dispatch('saveQuestion', formData);
        }
      },
      clearChoices() {
        this.choices = 2;
      },
    },
  };
</script>
