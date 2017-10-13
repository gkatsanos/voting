import Vue from 'vue';
import Router from 'vue-router';
import QuestionsList from '../components/QuestionsList/QuestionsList';
import QuestionDetail from '../components/QuestionDetail/QuestionDetail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: QuestionsList,
      name: 'home',
    },
    {
      path: '/:id',
      component: QuestionDetail,
      name: 'question',
    },
  ],
});
