<script setup>
import { ref } from 'vue';

const isDownloading = ref(false);
const downloadFormats = [
  { name: 'PowerPoint (.pptx)', value: 'pptx' },
  { name: 'PDF (.pdf)', value: 'pdf' }
];
const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

async function downloadPresentation(format) {
  isDownloading.value = true;
  showDropdown.value = false;
  
  try {
    // In a real implementation, this would call the Slidev export API
    // For now, we'll simulate a download with a timeout
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create a download link
    const link = document.createElement('a');
    
    if (format === 'pptx') {
      link.href = '/slidev-export.pptx';
      link.download = 'TCP-Presentation.pptx';
    } else {
      link.href = '/slidev-export.pdf';
      link.download = 'TCP-Presentation.pdf';
    }
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // For actual implementation, use Slidev's export functionality:
    // window.open(`/export/${format}`, '_blank');
  } catch (error) {
    console.error('Download failed:', error);
    alert('Download failed. Please try again later.');
  } finally {
    isDownloading.value = false;
  }
}
</script>

<template>
  <div class="download-button">
    <button 
      @click="toggleDropdown" 
      class="main-button"
      :disabled="isDownloading"
    >
      <span v-if="isDownloading">
        <span class="loading-spinner"></span>
        Preparing...
      </span>
      <span v-else>
        <span class="download-icon">↓</span>
        Download
      </span>
    </button>
    
    <div v-if="showDropdown" class="dropdown-content">
      <a 
        v-for="format in downloadFormats" 
        :key="format.value" 
        href="#" 
        @click.prevent="downloadPresentation(format.value)"
      >
        {{ format.name }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.download-button {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1000;
}

.main-button {
  background-color: #4D7FFF;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: background-color 0.3s;
}

.main-button:hover {
  background-color: #3A6AE0;
}

.main-button:disabled {
  background-color: #8EAEFF;
  cursor: not-allowed;
}

.download-icon {
  font-size: 16px;
  font-weight: bold;
}

.dropdown-content {
  display: block;
  position: absolute;
  right: 0;
  bottom: 40px;
  background-color: white;
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 4px;
}

.dropdown-content a {
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.loading-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 8px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>