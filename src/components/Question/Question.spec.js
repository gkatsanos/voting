import Vue from 'vue';
import { mount } from 'vue-test-utils';
import Question from './Question';

Vue.prototype.$vuetify = {
  load: fn => fn(),
  breakpoint: {},
};

describe('Question.spec.js', () => {
  let cmp;
  let template;

  beforeEach(() => {
    cmp = mount(Question, {
      propsData: { // Replace data value with this fake data
        question: {
          url: '/questions/6673',
          published_at: '2017-10-25T18:20:59.459026+00:00',
          choices: [
            {
              votes: 0,
              url: '/questions/6673/choices/24969',
              choice: 'Objective-C',
            },
            {
              votes: 0,
              url: '/questions/6673/choices/24968',
              choice: 'Python',
            },
            {
              votes: 0,
              url: '/questions/6673/choices/24970',
              choice: 'Ruby',
            },
            {
              votes: 0,
              url: '/questions/6673/choices/24967',
              choice: 'Swift',
            },
          ],
          question: 'Favourite programming language?',
        },
        id: '/questions/6673',
      },
    });
    template = cmp.html();
  });

  it('has the expected html structure', () => {
    expect(template).toMatchSnapshot();
  });

  it('has a link with its UID', () => {
    expect(cmp.vm.$el.querySelector('.card-link').getAttribute('to')).toBe('/questions/6673');
  });
});
