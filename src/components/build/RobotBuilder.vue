<script setup>
import { ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { useRobotsStore } from "@/stores/robots";

import availableParts from '@/data/parts';
import PartSelector from '@/components/build/PartSelector.vue';

const robotStore = useRobotsStore()
// state ================================
const selectedRobot = ref({
    head: {},
    leftArm: {},
    torso: {},
    rightArm: {},
    base: {}
})
const addedToCart = ref(false) // nav guard
// methods ===========================
const addToCart = () => {
    const robot = selectedRobot.value
    const cost = robot.head.cost + robot.leftArm.cost + robot.torso.cost + robot.rightArm.cost + robot.base.cost
    // cart.value.push({ cost: cost, title: robot.head.title })
    robotStore.addRobotToCart({ ...robot, cost })
    addedToCart.value = true
}

const getHead = part => selectedRobot.value.head = part
const getLeftArm = part => selectedRobot.value.leftArm = part
const getTorso = part => selectedRobot.value.torso = part
const getRightArm = part => selectedRobot.value.rightArm = part
const getBase = part => selectedRobot.value.base = part

// lifecycle hooks / router hooks ===========================
onBeforeRouteLeave((to, from, next) => {
    if (addedToCart.value) {
        next(true)
    } else {
        // confirm returns a boolean
        const response = confirm('Are you sure you want to leave without adding to cart?')
        next(response)
    }
})
</script>

<template>
    <div id="RobotBuilder">
        <div>
            <button class="add-to-cart" @click="addToCart">Add to Cart</button>
            <div class="top-row">
                <PartSelector :parts="availableParts.heads" position="top" @partSelected="getHead" />
            </div>
            <div class="middle-row">
                <PartSelector :parts="availableParts.arms" position="left" @partSelected="getLeftArm" />
                <PartSelector :parts="availableParts.torsos" position="center" @partSelected="getTorso" />
                <PartSelector :parts="availableParts.arms" position="right" @partSelected="getRightArm" />
            </div>
            <div class="bottom-row">
                <PartSelector :parts="availableParts.bases" position="bottom" @partSelected="getBase" />
            </div>
            <div>
                <h1>Cart</h1>
                <table>
                    <tbody>
                        <tr v-for="(item, index) in robotStore.cart" :key="index">
                            <td>{{ item.head.title }}</td>
                            <td>{{ item.cost }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- <pre>{{ robotStore.cart }}</pre> -->
    </div>
</template>

<style lang="scss" scoped>
#RobotBuilder {
    .part {
        position: relative;
        width: 165px;
        height: 165px;
        border: 3px solid #aaa;
    }

    .part img {
        width: 165px;
    }

    .top-row {
        display: flex;
        justify-content: space-around;
    }

    .middle-row {
        display: flex;
        justify-content: center;
    }

    .bottom-row {
        display: flex;
        justify-content: space-around;
        border-top: none;
    }

    .head {
        border-bottom: none;
    }

    .left {
        border-right: none;
    }

    .right {
        border-left: none;
    }

    .left img {
        transform: rotate(-90deg);
    }

    .right img {
        transform: rotate(90deg);
    }

    .bottom {
        border-top: none;
    }

    .prev-selector {
        position: absolute;
        z-index: 1;
        top: -3px;
        left: -28px;
        width: 25px;
        height: 171px;
    }

    .next-selector {
        position: absolute;
        z-index: 1;
        top: -3px;
        right: -28px;
        width: 25px;
        height: 171px;
    }

    .center .prev-selector,
    .center .next-selector {
        opacity: 0.8;
    }

    .left .prev-selector {
        top: -28px;
        left: -3px;
        width: 144px;
        height: 25px;
    }

    .left .next-selector {
        top: auto;
        bottom: -28px;
        left: -3px;
        width: 144px;
        height: 25px;
    }

    .right .prev-selector {
        top: -28px;
        left: 24px;
        width: 144px;
        height: 25px;
    }

    .right .next-selector {
        top: auto;
        bottom: -28px;
        left: 24px;
        width: 144px;
        height: 25px;
    }

    .right .next-selector {
        right: -3px;
    }

    .robot-name {
        position: absolute;
        top: -30px;
        width: 100%;
        text-align: center;
    }

    .sale {
        color: red;
        font-weight: bold;
    }

    td,
    th {
        text-align: left;
    }
}
</style>