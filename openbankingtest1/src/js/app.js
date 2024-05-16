// Import Vue
import { createApp } from 'vue';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Import Framework7 Styles
import 'framework7/css/bundle';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.scss';

// Import App Component
import App from '../components/app.vue';

//Custom styling

import '../sass/style.scss'

// Init plugin and register all components
Framework7.use(Framework7Vue);

// create Vue app
const app = createApp(App);

// register all Framework7 Vue components by passing Vue app instance there
registerComponents(app);

// Mount Vue App
app.mount('#app');