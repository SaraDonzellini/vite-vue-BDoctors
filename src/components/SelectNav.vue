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
            <option selected>seleziona la specializzazione</option>
            <option value="dermatologo">dermatologo</option>
            <option value="gincecologo">ginecologo</option>
            <option value="dentista">dentista</option>
        </select>
    </nav>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>