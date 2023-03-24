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
            url: 'http://127.0.0.1:8000/api/specializations',
        }
    },
    methods:{
        getSpec() {
        axios.get(this.url, {
            params:{
            }
        })
        // params: (selectOutput == "" ) ? {} : {specialization : selectOutput}
        
        .then((response) => {
          console.log(response.data.response);
          this.store.specializations = response.data.response;
          console.log(this.store.specializations)
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
  <SelectNav @change="getSpec"/>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

</style>
