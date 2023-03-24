<script>
// import { store } from '../store';
import axios from 'axios';

import SinglePageDash from './pages/single-page-partials/SinglePageDash.vue';

export default {
  name: 'SinglePageDoctor',
  components: {
    SinglePageDash,
  },
  data() {
    return {
      // store,
      doctor: null,
    }
  },
  methods: {
    getDoctor() {
            axios.get(`http://127.0.0.1:8000/api/doctors/${this.$route.params.id}`, {
                params: {

                }
            })
                .then((response) => {
                    this.doctor = (response.data.results);
                })
                .catch(function (error) {
                    console.warn(error);
                });
        },
  },
  created() {
    this.getDoctor();
  }
}
</script>

<template>
  <div class="container">
    <div v-for="element in doctor" class="text-danger">
      <h1>{{ element.user.name }}</h1>
      <!-- <h1>{{ element.user.surname }}</h1> -->
    </div>
    <div class="row">

      <SinglePageDash />
    </div>
  </div>
</template>

<style lang="scss">
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as * ;
</style>



