
import HomePage from '../pages/home.vue';
import ProfilePage from '../pages/profile.vue'
import AboutPage from '../pages/about.vue';
import FormPage from '../pages/form.vue';
import CatalogPage from '../pages/catalog.vue';
import CardsPage from '../pages/cards.vue'
import ColorThemes from '../pages/color-themes.vue'
import NotificationsPage from '../pages/notifications.vue'
import ProductPage from '../pages/product.vue';
import SettingsPage from '../pages/settings.vue';
import PortfolioPage from '../pages/portfolio.vue'

import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';
import CoinsPage from '../pages/details/coins.vue'

var routes = [
  {
    path: '/',
    component: HomePage,
    options: {
      transition: 'f7-push',
    },
  },
  {
    path: '/about/',
    component: AboutPage,
    options: {
      transition: 'f7-push',
    },
  },
  {
    path: '/form/',
    component: FormPage,
    options: {
      transition: 'f7-push',
    },
  },
  {
    path: '/color-themes/',
    component: ColorThemes,
    options: {
      transition: 'f7-push',
    },
  },
  {
    path: '/profile/',
    component: ProfilePage,
    options: {
      transition: 'f7-push',
    },
  },
  {
    path: '/notifications/',
    component: NotificationsPage,
    options: {
      transition: 'f7-push',
    },
  },
  {
    path: '/catalog/',
    component: CatalogPage,
    options: {
      transition: 'f7-push',
    },
  },
  {
    path: '/product/:id/',
    component: ProductPage,
    options: {
      transition: 'f7-push',
    },
  },
  {
    path: '/cards/',
    component: CardsPage,
    options: {
      transition: 'f7-push',
    },
  },
  {
    path: '/settings/',
    component: SettingsPage,
    options: {
      transition: 'f7-push',
    },
  },
  {
    path: '/portfolio/',
    component: PortfolioPage,
    options: {
      transition: 'f7-push',
    },
  },
  {
    path: '/coins/',
    component: CoinsPage,
    options: {
      transition: 'f7-push',
    },
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
    options: {
      transition: 'f7-push',
    },
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
