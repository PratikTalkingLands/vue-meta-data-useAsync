<template>
    <Head>
        <Title>Nuxt Dojo | {{ product.title }}</Title>
        <Meta name="og:title" :content="product.title" />
        <Meta name="og:image"
            :content="product.image" />
        <Meta name="og:description" :content="product.description" />
    </Head>
    <div>
        <h1>Single Product</h1>
        <v-img height="500" width="500" :src="product.image"></v-img>
        <p class="text-h3">{{ product.title }}</p>
        <p class="text-h6">$ {{ product.price }}</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id

// fetch the product
const { data: product } = await useFetch(uri, { key: id })

if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product Not Found', falat: true })
}

definePageMeta({
    layout: 'products'
})
</script>