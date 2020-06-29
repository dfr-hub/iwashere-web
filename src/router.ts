import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import LocationsView from '@/views/LocationsView.vue';
import NewLocationView from '@/views/NewLocationView.vue';
import VisitRegistrationView from '@/views/VisitRegistrationView.vue';
import SignupView from '@/views/SignupView.vue';
import LocationsGuestlistView from '@/views/LocationsGuestlistView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupView,
    },
    {
      path: '/locations',
      name: 'Locations',
      component: LocationsView,
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
    }
  ],
});
