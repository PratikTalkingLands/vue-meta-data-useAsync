<template>
    <v-row no-gutters>
        <v-col v-for="items in products" :key="items" cols="12" lg="3" xl="3" xxl="2" md="6" sm="6" xs="12">
            <v-card @click="changeRoute(items.id)">
                <v-img class="pa-3" :src="items.image"></v-img>
                <p>{{ items.title }}</p>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})

//fetch data
const { data: products } = await useFetch('https://fakestoreapi.com/products')
const router = useRouter()
const changeRoute = (id) => {
    router.push(`/products/${id}`)
}

// useHead({
//     title: 'Nuxt Dojo'
// })
</script>