<script>
import { store } from '../store';
import axios from 'axios';

export default {
  name: 'CallsApi',
  components: {

  },

  data() {
    return {
      store,
      urlDocts: 'http://127.0.0.1:8000/',
      urlSpec: 'http://127.0.0.1:8000/api/doctors',
    }
  },
 
  //chiamata per tutti i dottori
  methods: {
    getDoctor() {
      axios.get(this.urlDocts + 'api/doctors', {
        params: {
           
        }
      })

      .then((response) => {
        console.log(response.data.response.data);
        this.store.doctorsList = response.data.response.data;
      })

      .catch(function (error) {
        console.log(error);
      })

    }
  },

  //chiamata per i dottori selezionati
  getSpec(specialization) {
    axios.get(this.urlSpec, {
      params: {
        specialization: specialization
      }
    })

    .then((response) => {
      console.log(response.data.response.data);
      this.store.doctorsSelect = response.data.response.data;
    })

    .catch(function (error) {
      console.log(error);
    })

  },
  
  
  created() {
    this.getDoctor();
    this.getSpec();
  }

}

</script>

<template></template>

<style lang="scss" scoped></style>
