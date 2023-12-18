<template>
    <div>
      <h1>{{ responseData.title }}</h1>
      <p>{{ responseData.description }}</p>
      <img :src="responseData.image" alt="News Image" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUpdated } from 'vue';
  
  // Define a reactive variable to store API response
  const responseData = ref({});
  
  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.npoint.io/6b9b6f798092807d5a8d');
      const data = await response.json();
      responseData.value = data;
  
      // Update meta tags dynamically
      updateMetaTags();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Call the fetchData function when the component is mounted
  onMounted(() => {
    fetchData();
  });
  
  // Call the fetchData function when the component is updated
  onUpdated(() => {
    updateMetaTags();
  });
  
  // Function to update dynamic meta tags
  const updateMetaTags = () => {
    const { title, description, image } = responseData.value;
  
    // Update meta tags
    document.head.querySelector('meta[property="og:title"]').content = title;
    document.head.querySelector('meta[property="og:description"]').content = description;
    document.head.querySelector('meta[property="og:image"]').content = image;
  };
  </script>
  
  <script>
  export default {
    head() {
      return {
        title: this.responseData.title,
        meta: [
          { hid: 'og:title', property: 'og:title', content: this.responseData.title },
          { hid: 'og:description', property: 'og:description', content: this.responseData.description },
          { hid: 'og:image', property: 'og:image', content: this.responseData.image },
        ],
      };
    },
  };
  </script>
  