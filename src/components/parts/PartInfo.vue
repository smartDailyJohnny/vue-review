<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import parts from '@/data/parts';

const route = useRoute()
const part = computed(() => {
    const partType = route.params.partType;
    const id = route.params.id;

    return parts[partType].find(part => part.id === id);
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