<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import parts from '@/data/parts';

const route = useRoute()
const partObj = computed(() => {
    const partType = route.params.partType;
    const id = route.params.id;
    // retrieve an array of parts based on the partType route param
    // this function is responsible for finding the matching part
    return parts[partType].find((item) => item.id === id);
})
</script>

<template>
    <div id="PathInfo">
        <h1>{{ partObj.title }}</h1>
        <div>{{ partObj.description }}</div>
    </div>
</template>

<style lang="scss" scoped>
#PathInfo {}
</style>