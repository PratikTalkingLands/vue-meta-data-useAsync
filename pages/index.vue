<template>
    <button @click="routePush">Share News</button>
</template>

<script setup>
const router = useRouter()
const slug = "any-slug-you-want"

const routePush = () => {
    router.push(`/share/${slug}`)
}
</script>