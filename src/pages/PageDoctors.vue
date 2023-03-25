<script>
import DoctorCard from '../components/DoctorCard.vue';

import { store } from '../store';
//importiamo la componente per la chiamata axios, con risposta l'elenco delle specializzazioni
import SelectSpecializations from '../components/SelectSpecializations.vue';


import axios from 'axios';
import { nextTick } from 'vue';

export default {
  name: 'PageDoctors',

  components: {
    DoctorCard,
    SelectSpecializations,
 
  },

  data() {
    return {
      doctors: [],
      specializations:[]
    }
  },
  methods: {
    // getDoctors() {
    //   axios.get('http://127.0.0.1:8000/api/doctors', {
    //     params: {}
    //   })
    //     .then((response) => {
    //       this.doctors = (response.data.response.data);
    //     })
    //     .catch(function (error) {
    //       console.warn(error);
    //     });
    // },

    // getSpecializations() {
    //   axios.get('http://127.0.0.1:8000/api/specializations', {
    //     params: {
    //     }
    //   })

    //     .then((response) => {
    //       console.log(response.data.response);
    //       this.specializations = response.data.response;

    //     })

    //     .catch(function (error) {
    //       console.log(error);
    //     })

    // },

     async getDoctors(id) {
       console.log(id)
       try {
         let response
         if(id){
           response = await axios.get(`http://127.0.0.1:8000/api/doctors/${id}`)
         }else{
           response = await axios.get(`http://127.0.0.1:8000/api/doctors/`)
         }
         console.log(response)
         this.doctors = response.data.response.data
        
       } catch(error){
         console.log(error)
       }
     },

     async getSpecializations() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/specializations')
        console.log(response)
        this.specializations = response.data.response.data
        
       } catch(error){
         console.log(error)
       }
     },
   },
   
   mounted() {
    this.getDoctors();
    this.getSpecializations();
   },
}


</script>

<template>
  <section class="search-doctors">
    <div class="row">
      <div class="col-2 m-auto my-2">
        <SelectSpecializations @changeType="getDoctors"/>
      </div>
    </div>
  </section>

  <DoctorCard v-if="doctors.length" v-for="doctor in doctors" :doctor="doctor" :key="doctor.id"/>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>



