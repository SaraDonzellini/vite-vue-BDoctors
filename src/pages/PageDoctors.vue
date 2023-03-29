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
      selectedSpecialization: '',
    }
  },

  methods: {
    async getDoctors() {
      const [doctorsResponse, specializationsResponse] = await Promise.all([ // Execute when all request in the array are resolved
        axios.get('http://127.0.0.1:8000/api/doctors/'),
        axios.get('http://127.0.0.1:8000/api/specializations'),
      ]);

      this.doctors = doctorsResponse.data.response;
      this.specializations = specializationsResponse.data.response;
    },
  },

  computed: {
    filteredDoctors() {
      if (!this.selectedSpecialization) {
        return this.doctors;
      } else {
        return this.doctors.filter((doctor) =>
          doctor.specializations.some((spec) => spec.id === this.selectedSpecialization)
        );
      }
    },
  },

  mounted() {
    this.getDoctors();
  },
}

</script>

<template>
  <div class="container py-5">

    <div class="row">
      <div class="col-3">

        <!-- Filter doctors -->
        <div class="search-doctors mb-5">

          <label for="specialization-select">Seleziona specializzazione:</label>

          <select class="form-select" id="specialization-select" v-model="selectedSpecialization">
            <option value="">Tutte le specializzazioni</option>
            <option v-for="specialization in specializations" :key="specialization.id" :value="specialization.id">
              {{ specialization.title }}
            </option>
          </select>

        </div>

      </div>
    </div>

    <div class="row gap-5 justify-content-around">
      <DoctorCard v-for="doctor in filteredDoctors" :doctor="doctor" :key="doctor.id" :review="doctor.user.reviews" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>