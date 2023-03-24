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
      urlAddress: 'http://127.0.0.1:8000/',
    }
  },
 
  //chiamata per tutti i dottori
  methods: {
    getDoctor() {
      axios.get(this.urlAddress + 'api/doctors', {
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
  getDoctorSelect(specialization) {
    axios.get(this.urlAddress, {
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
    this.getDoctorSelect()
  }

}

</script>

<template></template>

<style lang="scss" scoped></style>
