import { defineStore } from "pinia";
import useRobotsModule from "@/stores/modules/robots.js"

export const useStore = defineStore("root", {
    modules: {
        robots: useRobotsModule
    }
})