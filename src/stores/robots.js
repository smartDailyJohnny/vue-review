import { defineStore } from "pinia";

export const useRobotsStore = defineStore("robots", {
    state: () => ({
        cart: [],
    }),
    getters: {
        cartSaleItems() {
            return this.cart.filter(item => item.head.onSale)
        }
    },
    actions: {
        addRobotToCart(robot) {
            this.cart.push(robot)
        },
    }
})