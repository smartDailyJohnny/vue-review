import { defineStore } from "pinia";

export const useRobotsStore = defineStore("robots", {
    state: () => ({
        cart: [],
        msg: "Hello from robots store"
    })
})