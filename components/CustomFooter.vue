<script setup>
import { ref } from 'vue';

const props = defineProps({
  author: {
    type: String,
    default: 'Pushpa Kumari'
  },
  institution: {
    type: String,
    default: 'Bhagat Phool Singh Mahila Vishwavidyalaya (BPSMV)'
  }
});

const showSettings = ref(false);
const footerColor = ref('#333333');
const textColor = ref('#ffffff');

function toggleSettings() {
  showSettings.value = !showSettings.value;
}
</script>

<template>
  <div>
    <div class="custom-footer" :style="{ backgroundColor: footerColor, color: textColor }">
      <div class="footer-content">
        <div class="author">{{ author }}</div>
        <div class="institution">{{ institution }}</div>
      </div>
      <button @click="toggleSettings" class="settings-button">⚙️</button>
    </div>
    
    <div v-if="showSettings" class="settings-panel">
      <h3>Footer Settings</h3>
      <div class="setting">
        <label>Background Color:</label>
        <input type="color" v-model="footerColor">
      </div>
      <div class="setting">
        <label>Text Color:</label>
        <input type="color" v-model="textColor">
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.footer-content {
  display: flex;
  flex-direction: column;
}

.author {
  font-weight: bold;
  font-size: 14px;
}

.institution {
  font-size: 12px;
  opacity: 0.8;
}

.settings-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.settings-button:hover {
  opacity: 1;
}

.settings-panel {
  position: fixed;
  bottom: 50px;
  right: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  padding: 15px;
  z-index: 101;
}

.settings-panel h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
}

.setting {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.setting label {
  font-size: 14px;
}
</style>