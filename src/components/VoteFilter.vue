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
            selectedVote: 0,
            votes:[1,2,3,4,5]
        }
    },
    methods: {
        sendEmit(){
            console.log('selectedVote:', this.selectedVote);
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
    <select class="form-select" aria-label="Default select example" v-model="selectedVote" @change="sendEmit()">
      <option value="">Vote</option>
      <option v-for="vote in votes" :key="vote" :value="vote">{{ vote }}</option>
    </select>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>
