<script>

import SelectCards from './SelectCards.vue';
import SelectNav from './SelectNav.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
  name: 'ApiSelectSpec',
  components: {
    SelectCards,
    SelectNav

  },
    data() {
        return {
            store,
            url: 'http://127.0.0.1:8000/api/doctors',
        }
    },
    methods:{
        getSpec(typeSpecialization) {
        axios.get(this.url, {
            params:{
              specializations: typeSpecialization
            }
        })
        // params: (selectOutput == "" ) ? {} : {specialization : selectOutput}
        
        .then((response) => {
          console.log(response.data.results.data);
          this.store.doctorsSelect = response.data.results.data;
        })
    
        .catch(function (error) {
          console.log(error);
        })
    
      },
    },
  
  
  created() {
    this.getSpec();
  }
}

</script>

<template>
    <div class="container mt-4">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
          <SelectNav @change="getSpec"/>
        </div>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
          <SelectCards/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

</style>
