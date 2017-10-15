<template>
  <v-layout column>
    <v-flex xs12 md10 offset-md1 lg9>
      <v-card color="blue-grey darken-2" dark>
        <v-toolbar dark>
          <v-toolbar-title>Add new Question</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
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
              class="ma-0"
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
          @click="saveQuestion(question)">
          Save Question
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapState } from 'vuex';

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
      if (!this.$store.state.hasLoaded) {
        this.$store.dispatch('requestItems');
      }
    },
    computed: {
      ...mapState([
        'createdQuestion',
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
