<script>
import DoctorCard from '../components/DoctorCard.vue';
import axios from 'axios';
// import { store } from '../store';

export default {
  name: 'PageDoctors',
  components: {
    DoctorCard,
  },
  data() {
    return {
      doctors: [],
      // store,
    }
  },
  methods: {
    getDoctors() {
      axios.get('http://127.0.0.1:8000/api/doctors', {
        params: {

        }
      })
        .then((response) => {
          this.doctors = (response.data.response.data);
        })
        .catch(function (error) {
          console.warn(error);
        });
    }
  },
  created() {
    this.getDoctors();
  },
}
</script>

<template>
  <section class="container d-flex justify-content-center flex-wrap">
    <DoctorCard v-for="doctor in doctors" :doctor="doctor" />
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>



