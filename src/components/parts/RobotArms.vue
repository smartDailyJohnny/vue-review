<template>
    <div>
        <h2>Arms</h2>
        The arms are how your robot will interact with the world.
        They come in a variety of shapes and functions.
        <div v-for="(arm, idx) in arms" :key="idx">
            <h4>{{ arm.title }}</h4>
            <div>{{ arm.description }}</div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import parts from '@/data/parts';

const arms = ref(parts.arms);
</script>