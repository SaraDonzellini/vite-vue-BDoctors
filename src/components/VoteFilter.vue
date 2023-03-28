<script>
import { store } from '../store.js';

export default {
    name: 'VoteFilter',

    components: {

    },
    data() {
        return {
            store,
            selectedVote: null
        }
    },
    methods: {

    },


    created() {
    },

    watch: {
    },

}

</script>

<template>
    <select class="form-select" aria-label="Default select example" v-model="selectedVote"
        @change="$emit('changeVote', selectedVote)">
        <option value="5">
            <i v-for="star in 5" class="fa-solid fa-star bg-dark"></i>
            5 stelle
        </option>
        <option value="4">
            <i v-for="star in 4" class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            4 stelle
        </option>
        <option value="3">
            <i v-for="star in 3" class="fa-solid fa-star"></i>
            <i v-for="star in 2" class="fa-regular fa-star"></i>
            3 stelle
        </option>
        <option value="2">
            <i v-for="star in 2" class="fa-solid fa-star"></i>
            <i v-for="star in 3" class="fa-regular fa-star"></i>
            2 stelle
        </option>
        <option value="1">
            <i v-for="star in 1" class="fa-solid fa-star"></i>
            <i v-for="star in emptyStars" class="fa-regular fa-star"></i>
            1 stella
        </option>
    </select>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

// .fa-star {
//         color: rgba(255, 208, 0, 0.815);
//     }
</style>
