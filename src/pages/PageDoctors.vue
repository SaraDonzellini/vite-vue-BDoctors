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
      voteDoctors: [],
      selectedSpecialization: '',
      selectedVote: null,
      averageVote: null,
      doctorsWithAverageVote: null,
    }
  },

  // questa chiamata si occupa di dare tutti i dottori che hanno id nel caso contrario tutti i dottori
  methods: {

    //questa chiamata si occupa di dare i dottori filtrati con il voto selezionato

    async getDoctorsWithAverageVote(id) {
      try {
        let response
        if (id) {
          response = await axios.get(`http://127.0.0.1:8000/api/doctors/${id}`)
        } else {
          response = await axios.get(`http://127.0.0.1:8000/api/doctors/`)
        }
        this.doctors = response.data.response;
        // console.warn(response.data.response);

        this.doctors.forEach(doctor => {
          for (let i = 0; i < doctor.user.reviews.length; i++) {
            this.doctorsWithAverageVote = this.doctors.map(doctor => {
              const reviews = doctor.user.reviews;
              const totalVotes = reviews.reduce((sum, review) => sum + review.vote, 0);
              const averageVote = totalVotes / reviews.length;
              // console.log(averageVote);
              return {
                ...doctor,
                averageVote: averageVote.toFixed(2)
              };
            });
          }
        });

      } catch (error) {
        console.log(error);
      }
    },

    // questa chiamata si occupa di dare tutti i dottori con determinata specializzazione
    async getSpecializations() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/specializations')
        this.specializations = response.data.response;
        // console.log(response.data.response);

      } catch (error) {
        console.log(error)
      }
    },

    getVoteDoctors(revVote) {
      this.voteDoctors = this.doctorsWithAverageVote.filter(doctor => doctor.averageVote == revVote);
      console.log(this.voteDoctors)
    }

  },

  created() {
    // this.getDoctors();
    this.getDoctorsWithAverageVote();
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
        <VoteFilter @changeVote="getVoteDoctors" />
        <ReviewFilter />
      </div>
    </div>
    <div v-if="!store.selectedSpecialization" class="row gap-5 justify-content-around">
      <DoctorCard :review="doctor.user.reviews" v-if="doctors.length" v-for="doctor in doctors" :doctor="doctor"
        :key="doctor.id" />
    </div>

    <div v-else>
      <div v-for="doctor in voteDoctors" class="container">
        <div v-if="!selectedVote" v-for="filterDoctor in doctor.specializations" class="row gap-5 justify-content-around">
          <DoctorCard :review="doctor.user.reviews" v-if="filterDoctor.id === store.selectedSpecialization"
            :doctor="doctor" :key="doctor.id" />
        </div>
        <!-- <div v-else v-for="filterDoctor in voteDoctors.specializations" class="row gap-5 justify-content-around">
            <DoctorCard :review="doctor.user.reviews" v-if="filterDoctor.id === store.selectedSpecialization"
              :doctor="doctor" :key="doctor.id" />
          </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>