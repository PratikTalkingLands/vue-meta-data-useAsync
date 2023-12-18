<template>
    <!-- <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" content="title" />
      <Meta name="og:title" content="Tlands OpenGraph" />
      <Meta name="og:image" content="https://dev.talkinglands.in/public/store/organizations/01GPWQAET9ENJ489BQDCPNYYSB/projects/01GQF1WGY719VNNFHA9EJBJRJ9/photos/tBZjtDf8HacFfUcJEQaRwJ.png" />
      <Meta name="og:description" content="Lorem Ipsum is here" />
    </Head> -->
    <div style="height: 700px; width: 500px; display: flex; flex-direction: column;">
      <img v-if="posts" :src="posts.image" />
      <h3 v-if="posts">{{ posts.title }}</h3>
      <p v-if="posts">{{ posts.description }}</p>
      <button @click="showAlert" :disabled="!posts">Show Alert</button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import axios from 'axios';
  import { useHead } from '@vueuse/head';
  
  const posts = ref(null);
  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.npoint.io/6b9b6f798092807d5a8d',
    headers: {},
  };
  
  axios(config)
    .then((res) => {
      posts.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  
  const showAlert = () => {
    if (posts.value) {
      alert(JSON.stringify(posts.value));
    }
  };
  
// useSeoMeta({
//   title: 'My Amazing Site',
//   ogTitle: 'My Amazing Site',
//   description: 'This is my amazing site, let me tell you all about it.',
//   ogDescription: 'This is my amazing site, let me tell you all about it.',
//   ogImage: 'https://dev2.talkinglands.com/public/store/organizations/01GPWQAET9ENJ489BQDCPNYYSB/projects/01GQF1WGY719VNNFHA9EJBJRJ9/photos/eRadzZqjPgYXQPhv7eBtQD.png',
//   twitterCard: 'summary_large_image',
// })
  </script>
  
  