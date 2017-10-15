import Vue from 'vue';
import Router from 'vue-router';
import QuestionsList from '../components/QuestionsList/QuestionsList';
import QuestionDetail from '../components/QuestionDetail/QuestionDetail';
import AddQuestion from '../components/AddQuestion/AddQuestion';

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
      path: '/questions/:id',
      component: QuestionDetail,
      name: 'question',
    },
    {
      path: '/question/create',
      component: AddQuestion,
      name: 'addquestion',
    },
  ],
});
