<script>
import { store } from '../store';
import DoctorCard from '../components/DoctorCard.vue';
import axios from 'axios';

export default {
  name: 'SinglePageDoctor',
  components: {
    DoctorCard,
  },
  data() {
    return {
      store,
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
                    // console.log(response.data.results)
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
    <div class="row">
      <DoctorCard :doctor="doctor" :isShow="true" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as * ;
</style>



