import { defineAppSetup } from '@slidev/types';
import globalComponents from '../global-components';

export default defineAppSetup(({ app, router }) => {
  // Register global components
  app.use(globalComponents);
  
  // Get URL parameters for theme and transition
  router.beforeEach((to) => {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme');
    const transition = urlParams.get('transition');
    
    // Apply theme if specified in URL
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
    
    // Apply transition if specified in URL
    if (transition) {
      document.documentElement.setAttribute('data-slidev-transition', transition);
    }
  });
});