import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../components/LoginView.vue';
import SignUp from '../components/SignUp.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active'
});

export default router;
