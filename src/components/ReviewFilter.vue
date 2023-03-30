<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'VoteFilter',

    components: {

    },
    data() {
        return {
            store,
            url: 'http://127.0.0.1:8000/api/specializations',
            selectedReviews: null,
            reviews: [1, 2, 5, 10]
        }
    },
    methods: {
        sendEmit() {
            // console.log('selectedReviews:', this.selectedReviews);
            this.$emit('changeReviews', this.selectedReviews)
        }
    },

}

</script>

<template>
    <select class="form-select" aria-label="Default select example" v-model="selectedReviews" @change="sendEmit()">
        <option value="">N° min Recensioni</option>
        <option v-for="review in reviews" :key="review" :value="review">
            {{ review }}
        </option>
    </select>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>