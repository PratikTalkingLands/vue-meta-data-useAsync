<template>
    <Head>
        <Title>Nuxt Dojo | {{ product.title }}</Title>
        <Meta name="description" :content="product.description" />
        <Meta name="og:title" :content="product.title" />
        <Meta name="og:image"
            :content="product.image" />
        <Meta name="og:description" :content="product.description" />
        <Meta name="twitter:title" :content="product.title" />
        <Meta name="twitter:image"
            :content="product.image" />
        <Meta name="twitter:description" :content="product.description" />
    </Head>
    <div>
        <h1>Single Product</h1>
        <v-img height="500" width="500" :src="product.image"></v-img>
        <p class="text-h3">{{ product.title }}</p>
        <p class="text-h6">$ {{ product.price }}</p>
    </div>
</template>

<script setup>
import axios from "axios";
const { id } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id

// Fetch the product using Axios
let product = null;

try {
    const response = await axios.get(uri);
    product = response.data;
} catch (error) {
    throw createError({ statusCode: 404, statusMessage: 'Product Not Found', fatal: true });
}

if (!product) {
    throw createError({ statusCode: 404, statusMessage: 'Product Not Found', fatal: true });
}


definePageMeta({
    layout: 'products'
})
</script>