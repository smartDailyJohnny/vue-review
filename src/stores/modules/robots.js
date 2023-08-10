import { defineStore } from "pinia";

export const useRobotsStore = defineStore("robotsStore", {
    state: () => ({
        cart: [],
        msg: "Hello world"
    })
})