store.dispatch = jest.fn();
import Vue from 'vue';
import { mount } from 'vue-test-utils';
import QuestionsList from './QuestionsList';
import store from '@/store';

Vue.prototype.$vuetify = {
  load: (fn) => fn(),
  breakpoint: {}
};

describe('QuestionsList.spec.js', () => {
  let cmp;
  let template;
  
  beforeEach(() => {
    cmp = mount(QuestionsList, {
      store,
    });
    template = cmp.html();
  });
  
  it('has the expected html structure', () => {
    expect(template).toMatchSnapshot()
  });
  
  it('should emit 2 dispatch events', () => {
    expect(store.dispatch.mock.calls.length).toBe(2);
  });
  
});
