<!-- <template>
    <div style="height: 700px; width: 500px; display: flex; flex-direction: column;">
        <img :src="posts.image" />
        <h3>{{ posts.title }}</h3>
        <p>{{ posts.description }}</p>
        <button @click="showAlert">Show Alert</button>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'

const { data: posts } = await useAsyncData(
    'posts',
    () => $fetch('https://api.npoint.io/6b9b6f798092807d5a8d', {

    }), {
}
)

const showAlert = () => {
    alert(`This is a ${posts.title} post!`)
}


</script> -->

<template>
    <div style="height: 700px; width: 500px; display: flex; flex-direction: column;">
        <img v-if="posts" :src="posts.image" />
        <h3 v-if="posts">{{ posts.title }}</h3>
        <p v-if="posts">{{ posts.description }}</p>
        <button @click="showAlert" :disabled="!posts">Show Alert</button>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
//   import { useAsyncData } from '@vueuse/core';

const posts = ref(null);

// Immediately invoke the async function to fetch data
useAsyncData('posts', async () => {
    posts.value = await $fetch('https://api.npoint.io/6b9b6f798092807d5a8d');

});

const title = computed(() => {
    return posts.value ? posts.value.title : "Default Title";
});

const ogTitle = computed(() => {
    return posts.value ? posts.value.title : "Default OG Title";
});

const ogImage = computed(() => {
    return posts.value ? posts.value.image : "default_image_url.jpg";
});

const ogDescription = computed(() => {
    return posts.value ? posts.value.description : "Default OG Description";
});


const showAlert = () => {
    if (posts.value) {
        // alert(`This is a ${posts.value.title} post!`);
        alert(JSON.stringify(posts.value))
    }
};

watch(posts, () => {
    useHead({
        title: title.value,
        meta: [
            { hid: 'og-title', property: 'og:title', content: ogTitle.value },
            { hid: 'og-image', property: 'og:image', content: ogImage.value },
            { hid: 'og-description', property: 'og:description', content: ogDescription.value }
        ]
    });
});




</script>
  