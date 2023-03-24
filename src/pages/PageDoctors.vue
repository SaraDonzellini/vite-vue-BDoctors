<script>
import DoctorCard from '../components/DoctorCard.vue';

//importiamo la componente per la chiamata axios, con risposta l'elenco delle specializzazioni
import SelectSpecializations from '../components/SelectSpecializations.vue';

import axios from 'axios';

export default {
  name: 'PageDoctors',

  components: {
    DoctorCard,
    SelectSpecializations
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
        params: {}
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
  <section class="search-doctors">
    <div class="row">
      <div class="col-2 m-auto my-2">
        <SelectSpecializations />
      </div>

    </div>
  </section>

  <DoctorCard v-for="doctor in doctors" :doctor="doctor" />
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>



