import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
    const InitialCount = 0;

    const Count = ref(InitialCount);

    const incrementCount = () => {
        Count.value++;
    }

    return {
        Count,
        incrementCount
    };
});