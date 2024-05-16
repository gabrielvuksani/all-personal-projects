<template>
  <f7-app v-bind="f7params">

  <!-- Left panel with cover effect-->
  <f7-panel left cover dark>
    <f7-view>
      <f7-page>
        <f7-navbar title="Left Panel"></f7-navbar>
        <f7-block>Left panel content goes here</f7-block>
      </f7-page>
    </f7-view>
  </f7-panel>


  <!-- Right panel with reveal effect-->
  <f7-panel right reveal dark>
    <f7-view>
      <f7-page>
        <f7-navbar title="Right Panel"></f7-navbar>
        <f7-block>Right panel content goes here</f7-block>
      </f7-page>
    </f7-view>
  </f7-panel>


  <!-- Views/Tabs container -->
  <f7-views tabs class="safe-areas">
    <!-- Tabbar for switching views-tabs -->
    <f7-toolbar tabbar icons bottom>
      <f7-link 
          tab-link="#view-home" 
          :class="{ 'tab-link-active': activeTab === 'view-home' }"
          @click="activeTab = 'view-home'"
          icon-ios="f7:house_fill" icon-md="material:home" text="Overview">
        </f7-link>
        <f7-link 
          tab-link="#view-portfolio" 
          :class="{ 'tab-link-active': activeTab === 'view-portfolio' }"
          @click="activeTab = 'view-portfolio'"
          icon-ios="f7:chart_bar_square_fill" icon-md="material:assessment" text="Portfolio">
        </f7-link>
        <f7-link 
          tab-link="#view-cards" 
          :class="{ 'tab-link-active': activeTab === 'view-cards' }"
          @click="activeTab = 'view-cards'"
          icon-ios="f7:creditcard_fill" icon-md="material:credit_card" text="Cards">
        </f7-link>
        <f7-link 
          tab-link="#view-profile" 
          :class="{ 'tab-link-active': activeTab === 'view-profile' }"
          @click="activeTab = 'view-profile'"
          icon-ios="f7:person_circle_fill" icon-md="material:person" text="Profile">
        </f7-link>
    </f7-toolbar>

    <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
    <f7-view id="view-home" main tab tab-active url="/"></f7-view>

    <!-- Catalog View -->
    <f7-view id="view-portfolio" name="catalog" tab url="/portfolio/"></f7-view>

    <!-- Cards View -->
    <f7-view id="view-cards" name="cards" tab url="/cards/"></f7-view>

    <!-- Profile View -->
    <f7-view id="view-profile" name="profile" tab url="/profile/"></f7-view>

  </f7-views>


    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Popup content goes here.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <f7-login-screen id="my-login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-input
              type="text"
              name="username"
              placeholder="Your username"
              v-model:value="username"
            ></f7-list-input>
            <f7-list-input
              type="password"
              name="password"
              placeholder="Your password"
              v-model:value="password"
            ></f7-list-input>
          </f7-list>
          <f7-list>
            <f7-list-button title="Sign In" @click="alertLoginData"></f7-list-button>
            <f7-block-footer>
              Some text about login information.<br>Click "Sign In" to close Login Screen
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
  </f7-app>
</template>
<script>
  import { ref, onMounted } from 'vue';
  import { f7, f7ready } from 'framework7-vue';
  import { getDevice }  from 'framework7/lite-bundle';
  import cordovaApp from '../js/cordova-app.js';

  import routes from '../js/routes.js';
  import store from '../js/store';

  
  export default {
    setup() {
      const device = getDevice();
      const savedTheme = localStorage.getItem('selectedTheme') || 'light';
      const darkModeSetting = savedTheme === 'dark';
      // Framework7 Parameters
      const f7params = {
        name: 'oFinancial', // App name
        theme: 'auto', // Automatic theme detection

        darkMode: darkModeSetting,


        // App store
        store: store,
        // App routes
        routes: routes,



        // Input settings
        input: {
          scrollIntoViewOnFocus: device.cordova,
          scrollIntoViewCentered: device.cordova,
        },
        // Cordova Statusbar settings
        statusbar: {
          iosOverlaysWebView: true,
          androidOverlaysWebView: false,
        },
      };

      const activeTab = ref('view-home'); // Initialize with default active tab ID

      // Login screen data
      const username = ref('');
      const password = ref('');

      const alertLoginData = () => {
        f7.dialog.alert('Username: ' + username.value + '<br>Password: ' + password.value, () => {
          f7.loginScreen.close();
        });
      }
      onMounted(() => {
        f7ready(() => {
          // Init cordova APIs (see cordova-app.js)
          if (device.cordova) {
            cordovaApp.init(f7);
          }

          // Call F7 APIs here
          document.documentElement.setAttribute('data-bs-theme', savedTheme);

          const savedColor = localStorage.getItem('selectedColor');
          if(savedColor) {
            let secondColor = f7.colors[savedColor];
            f7.setColorTheme(secondColor);
          }
          
        });
      });

      return {
        f7params,
        username,
        password,
        alertLoginData,
        activeTab
      }
    }
  }
</script>