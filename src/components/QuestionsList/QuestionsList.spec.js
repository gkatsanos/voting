import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { shallow, mount, createLocalVue } from 'vue-test-utils';
import QuestionsList from './QuestionsList';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Vuetify);

describe('QuestionsList.spec.js', () => {
  let cmp;
  let template;
  let actions;
  let getters;
  let state;
  let store;

  beforeAll(() => {
    actions = {
      requestItems: jest.fn(),
    };
    getters = {
      questions: () => [],
    };
    state = {
      hasLoaded: false,
      maxPagesReached: false,
    };
  });

  beforeEach(() => {
    store = new Vuex.Store({
      state,
      actions,
      getters,
    });
    cmp = mount(QuestionsList, {
      store,
      localVue,
    });
  });

  it('has the expected html structure', () => {
    template = cmp.html();
    expect(template).toMatchSnapshot();
  });

  it('calls store action requestItems when button is clicked', () => {
    const button = cmp.find('[data-qa=\'load-more-questions\']');
    button.trigger('click');
    expect(actions.requestItems).toHaveBeenCalled();
  });

  it('calls store action requestItems when store is not populated', () => {
    store = new Vuex.Store({
      state: {
        hasLoaded: true,
      },
      actions,
      getters,
    });
    cmp = shallow(QuestionsList, {
      store,
      localVue,
    });
    expect(actions.requestItems).toHaveBeenCalled();
  });

  it('hides button if max pages have been reached', () => {
    store = new Vuex.Store({
      state: {
        maxPagesReached: true,
      },
      actions,
      getters,
    });
    cmp = shallow(QuestionsList, {
      store,
      localVue,
    });
    expect(cmp.contains("[data-qa='load-more-questions']")).toBe(false);
  });
});
