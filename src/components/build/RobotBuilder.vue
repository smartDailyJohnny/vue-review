<script setup>
import { ref, computed } from 'vue';
import availableParts from '@/data/parts.js';
// state ================================
const selectedHeadIndex = ref(0);
const selectedLeftArmIndex = ref(0);
const selectedTorsoIndex = ref(0);
const selectedRightArmIndex = ref(0);
const selectedBaseIndex = ref(0);
const cart = ref([]);
// methods ===========================
// for switching between parts
const getPreviousValidIndex = (index, length) => {
    const subtractedIndex = index - 1
    return subtractedIndex < 0 ? length - 1 : subtractedIndex
}
const getNextValidIndex = (index, length) => {
    const addedIndex = index + 1
    return addedIndex > length - 1 ? 0 : addedIndex
}
const selectNextHead = () => { selectedHeadIndex.value = getNextValidIndex(selectedHeadIndex.value, availableParts.heads.length) }
const selectPreviousHead = () => { selectedHeadIndex.value = getPreviousValidIndex(selectedHeadIndex.value, availableParts.heads.length) }
const selectNextLeftArm = () => { selectedLeftArmIndex.value = getNextValidIndex(selectedLeftArmIndex.value, availableParts.arms.length) }
const selectPreviousLeftArm = () => { selectedLeftArmIndex.value = getPreviousValidIndex(selectedLeftArmIndex.value, availableParts.arms.length) }
const selectNextTorso = () => { selectedTorsoIndex.value = getNextValidIndex(selectedTorsoIndex.value, availableParts.torsos.length) }
const selectPreviousTorso = () => { selectedTorsoIndex.value = getPreviousValidIndex(selectedTorsoIndex.value, availableParts.torsos.length) }
const selectNextRightArm = () => { selectedRightArmIndex.value = getNextValidIndex(selectedRightArmIndex.value, availableParts.arms.length) }
const selectPreviousRightArm = () => { selectedRightArmIndex.value = getPreviousValidIndex(selectedRightArmIndex.value, availableParts.arms.length) }
const selectNextBase = () => { selectedBaseIndex.value = getNextValidIndex(selectedBaseIndex.value, availableParts.bases.length) }
const selectPreviousBase = () => { selectedBaseIndex.value = getPreviousValidIndex(selectedBaseIndex.value, availableParts.bases.length) }
// for adding to cart
const addToCart = () => {
    const robot = selectedRobot.value
    const cost = robot.head.cost + robot.leftArm.cost + robot.torso.cost + robot.rightArm.cost + robot.base.cost
    cart.value.push({ cost: cost, title: robot.head.title })
}

// computed ============================
const selectedRobot = computed(() => {
    return {
        head: availableParts.heads[selectedHeadIndex.value],
        leftArm: availableParts.arms[selectedLeftArmIndex.value],
        torso: availableParts.torsos[selectedTorsoIndex.value],
        rightArm: availableParts.arms[selectedRightArmIndex.value],
        base: availableParts.bases[selectedBaseIndex.value]
    }
})
</script>

<template>
    <div id="RobotBuilder">
        <div>
            <button class="add-to-cart" @click="addToCart">Add to Cart</button>
            <!-- <pre>{{ cart }}</pre> -->
            <div class="top-row">
                <div class="top part">
                    <div class="robot-name">
                        {{ selectedRobot.head.title }}
                        <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
                    </div>
                    <img :src="selectedRobot.head.src" title="head" />
                    <button class="prev-selector" @click="selectPreviousHead">&#9668;</button>
                    <button class="next-selector" @click="selectNextHead">&#9658;</button>
                </div>
            </div>
            <div class="middle-row">
                <div class="left part">
                    <img :src="selectedRobot.leftArm.src" title="left arm" />
                    <button class="prev-selector" @click="selectPreviousLeftArm">&#9650;</button>
                    <button class="next-selector" @click="selectNextLeftArm">&#9660;</button>
                </div>
                <div class="center part">
                    <img :src="selectedRobot.torso.src" title="body" />
                    <button class="prev-selector" @click="selectNextTorso">&#9668;</button>
                    <button class="next-selector" @click="selectPreviousTorso">&#9658;</button>
                </div>
                <div class="right part">
                    <img :src="selectedRobot.rightArm.src" title="right arm" />
                    <button class="prev-selector" @click="selectNextRightArm">&#9650;</button>
                    <button class="next-selector" @click="selectPreviousRightArm">&#9660;</button>
                </div>
            </div>
            <div class="bottom-row">
                <div class="bottom part">
                    <img :src="selectedRobot.base.src" title="base" />
                    <button class="prev-selector" @click="selectNextBase">&#9668;</button>
                    <button class="next-selector" @click="selectPreviousBase">&#9658;</button>
                </div>
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