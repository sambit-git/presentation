import ThemeSwitcher from './components/ThemeSwitcher.vue';
import CustomFooter from './components/CustomFooter.vue';
import SlideControls from './components/SlideControls.vue';
import DownloadButton from './components/DownloadButton.vue';

// This file will be used to register global components
export default {
  install: (app) => {
    app.component('ThemeSwitcher', ThemeSwitcher);
    app.component('CustomFooter', CustomFooter);
    app.component('SlideControls', SlideControls);
    app.component('DownloadButton', DownloadButton);
  }
};