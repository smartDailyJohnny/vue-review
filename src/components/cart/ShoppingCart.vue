<script setup>
import { computed } from "vue";
import { useRobotsStore } from "@/stores/robots";
const robotStore = useRobotsStore()
// retrieve actions from store
const cart = computed(() => {
    return robotStore.cart
})
const cartSaleItems = computed(() => {
    return robotStore.cartSaleItems
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
                        {{ robot.head.title }}
                    </td>
                    <td class="cost">
                        {{ robot.cost }}
                    </td>
                </tr>
            </tbody>
        </table>
        <h2 class="saleItems">You saved money on these robots!</h2>
        <table>
            <thead>
                <tr>
                    <th class="robot-title">Robot</th>
                    <th class="cost">Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(robot, index) in cartSaleItems" :key="index">
                    <td class="robot-title">
                        {{ robot.head.title }}
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

.saleItems {
    color: red;
    margin-top: 50px;
    font-size: 18px;
}
</style>