<script>
import DoctorCard from '../components/DoctorCard.vue';

//importiamo la componente per la chiamata axios, con risposta l'elenco delle specializzazioni
import SelectSpecializations from '../components/SelectSpecializations.vue';
import VoteFilter from '../components/VoteFilter.vue';
import ReviewFilter from '../components/ReviewFilter.vue';


import axios from 'axios';

export default {
  name: 'PageDoctors',

  components: {
    DoctorCard,
    SelectSpecializations,
    VoteFilter,
    ReviewFilter,
  },

  data() {
    return {
      doctors: [],
      specializations: [],
      reviews: []
    }
  },
  methods: {
    async getDoctors(id) {
      //console.log(id)
      try {
        let response
        if (id) {
          response = await axios.get(`http://127.0.0.1:8000/api/doctors/${id}`)
        } else {
          response = await axios.get(`http://127.0.0.1:8000/api/doctors/`)
        }
        this.doctors = response.data.response.data;
        //console.log(response.data.response.data);
      } catch (error) {
        console.log(error)
      }
    },

    async getSpecializations() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/specializations')
        //console.log(response)
        this.specializations = response.data.response.data

      } catch (error) {
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
  <div class="container">

    <section class="row search-doctors mb-5">
      <div class="col-12 col-md-3 m-auto my-2">
        <SelectSpecializations @changeType="getDoctors" />
      </div>
      <div class="col-12 col-md-3 m-auto my-2">
        <VoteFilter />
        <ReviewFilter />
      </div>
    </section>

    <section class="container">
      <!-- <ul>
                                  <li v-for="doctor in doctors">
                                    {{ doctor.user.reviews }}
                                  </li>
                                </ul> -->
      <div class="row gap-5 justify-content-around">
        <DoctorCard v-if="doctors.length" v-for="doctor in doctors" :doctor="doctor" :key="doctor.id" />
      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>