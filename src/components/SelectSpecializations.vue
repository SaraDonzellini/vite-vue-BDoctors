<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
  name: 'SelectSpecializations',
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
    getSpecializations() {
      axios.get(this.url, {
        params: {
        }
      })

        .then((response) => {
          console.log(response.data.response);
          this.store.specializations = response.data.response;

        })

        .catch(function (error) {
          console.log(error);
        })

    },
  },


  created() {
    this.getSpecializations();
  },

  watch: {
    selectedSpecialization(selectedSpecialization) {
      //console.log("L'ID selezionato è = " + selectedSpecialization)
    }
  },

}

</script>

<template>
  <nav>
    <select class="form-select" aria-label="Default select example" v-model="selectedSpecialization"
      @change="$emit('changeType', selectedSpecialization)">
      <option v-for="element in store.specializations" :value="element.id" :key="element.id" >
        {{ element.title }}</option>
    </select>
  </nav>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>
