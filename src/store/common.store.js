import { defineStore } from 'pinia';
import { ref } from "vue"

export const useCommonStore = defineStore('commonStore', () => {
    const searchFieldValue = "";

    const IntialSearchValue = ref(searchFieldValue);

    const updateSeachField = (enteredVal) => {
        IntialSearchValue.value = enteredVal;
    }

    return {
        IntialSearchValue,
        updateSeachField,
    }
})