<script>

import SelectSpecializations from '../components/SelectSpecializations.vue';
import axios from 'axios'
export default {
  name: 'PageHome',
  components: {
    SelectSpecializations
  },
  data() {
    return {
      doctors: [],
      specializations: []
    }
  },
  methods: {
    async getDoctors(id) {
      console.log(id)
      try {
        let response;
        if (this.selectedSpecialization) {
          this.$router.push({ name: 'doctors', params: { specializations: this.selectedSpecialization } })
        } else {
          response = await axios.get(`http://127.0.0.1:8000/api/doctors/`);
          this.doctors = response.data.response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async getSpecializations() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/specializations')
        console.log(response)
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
  <section class="jumbotron d-flex align-items-center w-100">
    <div class="container">
      <h1>
        Benvenuta/o in Bdoctors!
      </h1>
      <h5 class="mb-4">
        Cerca tra i nostri dottori per trovare il tuo specialista
      </h5>
      <div class="d-flex">
        <router-link class="btn btn-primary" :to="{ name: 'doctors' }">
          Tutti i nostri dottori
        </router-link>  
        <div class="col-3 ms-2">
          <SelectSpecializations @changeType="getDoctors" />
          <router-link :to="{ name: 'doctors' , params: [specializations.id] }" :class="this.$route.name == 'doctors' ? 'active' : ''">
            clicca
          </router-link>
        </div>
      </div>
    </div>  
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

.jumbotron {
  height: 90vh;
  background-image: url('./imgs/jumbo-home.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 25%;
}
</style>
