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
        sendEmit(){
            this.$emit('changeVote', this.selectedVote)
        }
    },


    created() {
    },

    watch: {
    },

}

</script>

<template>
    <select class="form-select" aria-label="Default select example" @change="sendEmit()" v-model="selectedVote">
        <option value="5">
            5 stelle
        </option>
        <option value="4">
            4 stelle
        </option>
        <option value="3">
            3 stelle
        </option>
        <option value="2">
            2 stelle
        </option>
        <option value="1">
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
