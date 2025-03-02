<script setup>
import { ref } from 'vue';

const transitionOptions = [
  { name: 'Slide Left', value: 'slide-left' },
  { name: 'Slide Up', value: 'slide-up' },
  { name: 'Fade', value: 'fade' },
  { name: 'Zoom', value: 'zoom' },
  { name: 'None', value: 'none' }
];

const selectedTransition = ref('slide-left');

function changeTransition(transition) {
  selectedTransition.value = transition;
  // In a real implementation, this would change the transition
  // For now, we'll just reload with a transition parameter
  window.location.href = `?transition=${transition}`;
}
</script>

<template>
  <div class="slide-controls">
    <div class="dropdown">
      <button class="control-button">
        Transition: {{ selectedTransition }}
        <span class="arrow">▼</span>
      </button>
      <div class="dropdown-content">
        <a 
          v-for="option in transitionOptions" 
          :key="option.value" 
          href="#" 
          @click.prevent="changeTransition(option.value)"
        >
          {{ option.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-controls {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1000;
}

.control-button {
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
  left: 0;
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