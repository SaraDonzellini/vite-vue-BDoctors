<script>
import DoctorCard from '../components/DoctorCard.vue';

import VoteFilter from '../components/VoteFilter.vue';
import ReviewFilter from '../components/ReviewFilter.vue';

//import store
import { store } from '../store.js'
//import axios
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
      store,
      doctors: [],
      specializations: [],
      reviews: [],
      selectedSpecialization: '',
      selectedVote: 0
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
        console.warn(response.data.response)
      } catch (error) {
        console.log(error)
      }
    },

    async getSpecializations() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/specializations')
        this.specializations = response.data.response;
        console.log(response.data.response);

      } catch (error) {
        console.log(error)
      }
    },

    setFilterVote(revVote) {
      console.log(revVote);
      this.averageVotes = revVote;
    },

    getFilteredVote(num){
      console.log(num)
    }

  },

  mounted() {
    this.getDoctors();
    this.getSpecializations();
  },
}


</script>

<template>
  <div class="container py-5">
    <div class="row d-flex">
      <div class="col-3">

        <!--search bar for doctor's specialization-->
        <div class="search-doctors mb-5">
          <label for="specialization-select">Seleziona specializzazione:</label>
          <select class="form-select" id="specialization-select" v-model="store.selectedSpecialization">
            <option value="">Tutte le specializzazioni</option>
            <option v-for="specialization in specializations" :key="specialization.id" :value="specialization.id">
              {{ specialization.title }}</option>
          </select>
        </div>
      </div>
      <div class="col-2 col-md-2 m-auto my-2">
        <VoteFilter @changeVote="getFilteredVote"/>
        <ReviewFilter/>
      </div>
    </div>
    <div v-if="!store.selectedSpecialization" class="row gap-5 justify-content-around">
      <DoctorCard @sendEmit="setFilterVote" :review="doctor.user.reviews" v-if="doctors.length" v-for="doctor in doctors" :doctor="doctor" :key="doctor.id" />
    </div>

    <div v-else>
      <div v-for="doctor in doctors" class="container">
        <div v-for="filterDoctor in doctor.specializations" class="row gap-5 justify-content-around">
          <DoctorCard @findVote="setFilterVote" :review="doctor.user.reviews" v-if="filterDoctor.id === store.selectedSpecialization" :doctor="doctor" :key="doctor.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>