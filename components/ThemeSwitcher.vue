<script setup>
import { ref } from 'vue';

const themes = [
  { name: 'Default', value: 'default' },
  { name: 'Seriph', value: 'seriph' },
  { name: 'Apple Basic', value: 'apple-basic' },
  { name: 'Penguin', value: 'penguin' },
  { name: 'Dracula', value: 'dracula' }
];

const selectedTheme = ref('default');

function changeTheme(theme) {
  selectedTheme.value = theme;
  // In a real implementation, this would change the theme
  // For now, we'll just reload the page with a theme parameter
  window.location.href = `?theme=${theme}`;
}
</script>

<template>
  <div class="theme-switcher">
    <div class="dropdown">
      <button class="theme-button">
        Theme: {{ selectedTheme }}
        <span class="arrow">▼</span>
      </button>
      <div class="dropdown-content">
        <a 
          v-for="theme in themes" 
          :key="theme.value" 
          href="#" 
          @click.prevent="changeTheme(theme.value)"
        >
          {{ theme.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.theme-switcher {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
}

.theme-button {
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.arrow {
  font-size: 10px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 4px;
}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>