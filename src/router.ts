import Vue from 'vue';
import Router from 'vue-router';
import LocationsView from '@/views/LocationsView.vue';
import NewLocationView from '@/views/NewLocationView.vue';
import VisitRegistrationView from '@/views/VisitRegistrationView.vue';
import SignupView from '@/views/SignupView.vue';
import LocationsGuestlistView from '@/views/LocationsGuestlistView.vue';
import LocationQrcodeView from '@/views/LocationQrcodeView.vue';
import SignupConfirmView from '@/views/SignupConfirmView.vue';
import ProfileView from '@/views/ProfileView.vue';
import ResetPasswordView from '@/views/ResetPasswordView.vue';
import HomeView from '@/views/HomeView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: HomeView,
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupView,
    },
    {
      path: '/signupConfirm/:token',
      name: 'SignupConfirm',
      component: SignupConfirmView,
    },
    {
      path: '/locations',
      name: 'Locations',
      component: LocationsView,
    },
    {
      path: '/locations/:shortname/qrcode',
      name: 'LocationQRCodeView',
      component: LocationQrcodeView,
    },
    {
      path: '/locations/:shortname/guestlist',
      name: 'Guestlist',
      component: LocationsGuestlistView,
    },
    {
      path: '/locations/new',
      name: 'NewLocation',
      component: NewLocationView,
    },
    {
      path: '/visit/:shortname',
      name: 'RegisterVisit',
      component: VisitRegistrationView
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView
    },
    {
      path: '/resetPassword/:token',
      name: 'ResetPassword',
      component: ResetPasswordView
    }
  ],
});