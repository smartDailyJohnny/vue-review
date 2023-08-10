<script setup>
import { computed } from "vue";
import { useRobotsStore } from "@/stores/robots";
const robotStore = useRobotsStore()

const cart = computed(() => {
    return robotStore.cart
})
</script>

<template>
    <div>
        <h1>Cart</h1>
        <table>
            <thead>
                <tr>
                    <th class="robot-title">Robot</th>
                    <th class="cost">Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(robot, index) in cart" :key="index">
                    <td class="robot-title">
                        {{ robot.title }}
                    </td>
                    <td class="cost">
                        {{ robot.cost }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
  
<style scoped>
td,
th {
    padding: 5px;
}

.robot-title {
    text-align: left;
    padding-right: 200px;
}

.cost {
    text-align: right;
}
</style>