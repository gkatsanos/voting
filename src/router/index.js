import Vue from 'vue';
import Router from 'vue-router';

const QuestionsList = () => import('../components/QuestionsList/QuestionsList');
const QuestionDetail = () => import('../components/QuestionDetail/QuestionDetail');
const AddQuestion = () => import('../components/AddQuestion/AddQuestion');

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
