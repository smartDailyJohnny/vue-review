import { defineStore } from "pinia";

export const useRobotsStore = defineStore("robots", {
    state: () => ({
        cart: [],
        msg: "e"
    }),
    actions: {
        addRobotToCart(robot) {
            this.cart.push(robot)
        }
    }
})