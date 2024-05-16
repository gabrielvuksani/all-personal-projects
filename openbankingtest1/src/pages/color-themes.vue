<template>
  <f7-page name="color-themes">
    <f7-navbar>
            <f7-nav-left>
                <f7-nav-left back-link="Back"></f7-nav-left>
            </f7-nav-left>
            <f7-nav-title sliding>Color Themes</f7-nav-title>
            <f7-nav-right>
                <f7-link href="/notifications/" icon-only>
                    <f7-icon ios="f7:bell" md="material:notifications">
                        <f7-badge color="red">4</f7-badge>
                    </f7-icon>
                </f7-link>
            </f7-nav-right>
        </f7-navbar>
    <f7-block-title medium>Layout Themes</f7-block-title>
    <f7-block strong>
      <p>Framework7 comes with 2 main layout themes: Light (default) and Dark:</p>
      <div class="grid grid-cols-2 grid-gap" style="height: 60px">
        <div class="bg-color-white demo-theme-picker" @click="setLayoutTheme('light')">
          <f7-checkbox v-if="theme === 'light'" checked disabled />
        </div>
        <div class="bg-color-black demo-theme-picker" @click="setLayoutTheme('dark')">
          <f7-checkbox v-if="theme === 'dark'" checked disabled />
        </div>
      </div>
    </f7-block>

    <f7-block-title medium>Default Color Themes</f7-block-title>
    <f7-block strong>
      <p>Framework7 comes with {{ colors.length }} color themes set.</p>
      <div class="grid grid-cols-3 medium-grid-cols-4 large-grid-cols-5 grid-gap">
        <div v-for="(color, index) in colors" :key="index">
          <f7-button
            fill
            round
            small
            class="demo-color-picker-button"
            :color="color"
            @click="setColorTheme(color)"
            >{{ color }}</f7-button
          >
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>
<script>
import {
  f7Navbar,
  f7Page,
  f7BlockTitle,
  f7Button,
  f7Block,
  f7List,
  f7ListInput,
  f7Checkbox,
  f7Link,
  f7Toolbar,
  f7,
} from 'framework7-vue';
import $ from 'dom7';

// Detect current theme from the HTML attribute.
let theme = localStorage.getItem('selectedTheme') || document.documentElement.getAttribute('data-bs-theme') || 'light';

// Get the primary color from the computed styles on the HTML element.
let themeColor = localStorage.getItem('selectedColor') || getComputedStyle(document.documentElement).getPropertyValue('--f7-color-primary').trim();

export default {
  components: {
    f7Navbar,
    f7Page,
    f7BlockTitle,
    f7Button,
    f7Block,
    f7List,
    f7ListInput,
    f7Checkbox,
    f7Link,
    f7Toolbar,
  },
  data() {
    const colors = Object.keys(f7.colors).filter(
      (c) => c !== 'primary' && c !== 'white' && c !== 'black',
    );

    return {
      colors,
      theme,
      themeColor,
    };
  },
  mounted() {
    // Set initial theme on HTML tag
    document.documentElement.setAttribute('data-bs-theme', this.theme);
  },
  methods: {
    setLayoutTheme(newTheme) {
      f7.setDarkMode(newTheme === 'dark');
      theme = newTheme;
      this.theme = newTheme;

      document.documentElement.setAttribute('data-bs-theme', newTheme);
      localStorage.setItem('selectedTheme', newTheme);  // Save to localStorage
    },

    setColorTheme(newColor) {
      themeColor = f7.colors[newColor];
      this.themeColor = themeColor;
      f7.setColorTheme(themeColor);

      localStorage.setItem('selectedColor', newColor);  // Save to localStorage
    },

  },
};
</script>
