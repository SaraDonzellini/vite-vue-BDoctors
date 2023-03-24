<script>
import { store } from '../store.js'
export default {
    name: 'SelectNav',
    components: {

    },
    data() {
        return {
            store,
            selectOutput:""
        }
    },
    methods: {},
  created() {},
}
</script>

<template>
    <nav>
        <select class="form-select" aria-label="Default select example" v-model="selectOutput" @change="$emit('change', selectOutput)">
            <option v-for="element in store.specializations" :value="element.id">{{ element.title }}</option>
        </select>
    </nav>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>