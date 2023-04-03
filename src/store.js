import { reactive } from "vue";

export const store = reactive({
    doctorsList: [],
    specializations: [],
    selectedSpecialization: '',
})