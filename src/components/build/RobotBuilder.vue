<script setup>
import { ref } from 'vue';
import availableParts from '@/data/parts';
import PartSelector from '@/components/build/PartSelector.vue';
// state ================================
const cart = ref([]);
const selectedRobot = ref({
    head: {},
    leftArm: {},
    torso: {},
    rightArm: {},
    base: {}
})
// methods ===========================
const addToCart = () => {
    // const robot = selectedRobot.value
    // const cost = robot.head.cost + robot.leftArm.cost + robot.torso.cost + robot.rightArm.cost + robot.base.cost
    // cart.value.push({ cost: cost, title: robot.head.title })
    cart.value.push(selectedRobot.value)
}

const getPart = (part) => {
    selectedRobot.value[part.type] = part
}
</script>

<template>
    <div id="RobotBuilder">
        <div>
            <button class="add-to-cart" @click="addToCart">Add to Cart</button>
            <pre>{{ cart }}</pre>
            <div class="top-row">
                <PartSelector :parts="availableParts.heads" position="top" @partSelected="getPart" />
            </div>
            <div class="middle-row">
                <PartSelector :parts="availableParts.arms" position="left" @partSelected="getPart" />
                <PartSelector :parts="availableParts.torsos" position="center" @partSelected="getPart" />
                <PartSelector :parts="availableParts.arms" position="right" @partSelected="getPart" />
            </div>
            <div class="bottom-row">
                <PartSelector :parts="availableParts.bases" position="bottom" @partSelected="getPart" />
            </div>
            <div>
                <h1>Cart</h1>
                <table>
                    <tbody>
                        <tr v-for="(item, index) in cart" :key="index">
                            <td>{{ item.title }}</td>
                            <td>{{ item.cost }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
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