<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const part = ref({
    title: 'Part title',
    description: 'Part description',
})
</script>

<template>
    <div id="PathInfo">
        <h1>{{ part.title }}</h1>
        <div>{{ part.description }}</div>
    </div>
</template>

<style lang="scss" scoped>
#PathInfo {}
</style>