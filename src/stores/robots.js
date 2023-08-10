import { defineStore } from "pinia";

export const useRobotsStore = defineStore("robots", {
    state: () => ({
        cart: [],
    }),
    getters: {
        cartSaleItems() {
            this.cart.filter(item => item.head.onSale)
        }
    },
    actions: {
        addRobotToCart(robot) {
            this.cart.push(robot)
        },
    }
})