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
            selectedSpecialization: null
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
    <button>
        Orina per recensioni
    </button>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>