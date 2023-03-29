<script>
import DoctorCard from '../components/DoctorCard.vue';

import VoteFilter from '../components/VoteFilter.vue';
import ReviewFilter from '../components/ReviewFilter.vue';


import axios from 'axios';

export default {
  name: 'PageDoctors',

  components: {
    DoctorCard,
    VoteFilter,
    ReviewFilter,
  },

  data() {
    return {
      doctors: [],
      specializations: [],
      reviews: [],
      selectedSpecialization: ''
    }
  },
  methods: {
    async getDoctors(id) {
      try {
        let response
        if (id) {
          response = await axios.get(`http://127.0.0.1:8000/api/doctors/${id}`)
        } else {
          response = await axios.get(`http://127.0.0.1:8000/api/doctors/`)
        }
        this.doctors = response.data.response;
        //console.log(response.data.response)
      } catch (error) {
        console.log(error)
      }
    },

    async getSpecializations() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/specializations')
        this.specializations = response.data.response;
        //console.log(response.data.response);

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
  <div class="container py-5">
    <div class="row">
      <div class="col-3">
        <div class="search-doctors">
          <label for="specialization-select">Seleziona specializzazione:</label>
          <select class="form-select" id="specialization-select" v-model="selectedSpecialization">
            <option value="">Tutte le specializzazioni</option>
            <option v-for="specialization in specializations" :key="specialization.id" :value="specialization.id">
              {{ specialization.title }}</option>
          </select>

          <p>
            la scelta selezionata è : {{ selectedSpecialization }}
          </p>
        </div>

      </div>
    </div>
    <div v-if="!selectedSpecialization" class="row gap-5 justify-content-around">
      <DoctorCard v-if="doctors.length" v-for="doctor in doctors" :doctor="doctor" :key="doctor.id"
        :review="doctor.user.reviews" />
    </div>

    <div v-else>
      <div v-for="doctor in doctors" class="container">
        <div v-for="filterDoctor in doctor.specializations" class="row gap-5 justify-content-around">
          <DoctorCard v-if="filterDoctor.id === selectedSpecialization" :doctor="doctor" :key="doctor.id"
            :review="doctor.user.reviews" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>