<script>
//import store
import { store } from '../store.js'

//import axios
import axios from 'axios'

export default {
  data() {
    return {
      store
    }
  },

  methods: {
    async getSpecializations() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/specializations')
        this.store.specializations = response.data.response;
        console.log(response.data.response);

      } catch (error) {
        console.log(error)
      }
    },
  },

  created() {
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

      <div class="row">
        <div class="col-3">
          <div class="search-doctors my-3">
            <label class="mb-2" for="specialization-select">Seleziona specializzazione:</label>
            <select class="form-select" id="specialization-select" v-model="store.selectedSpecialization">
              <option value="">Tutte le specializzazioni</option>
              <option v-for="specialization in store.specializations" :key="specialization.id" :value="specialization.id">
                {{ specialization.title }}</option>
            </select>
          </div>

        </div>
        <div class="d-flex">
          <router-link v-if="!store.selectedSpecialization" class="btn btn-primary" :to="{ name: 'doctors' }">
            Tutti i nostri dottori
          </router-link>

          <router-link v-else class="btn btn-primary" :to="{ name: 'doctors' }">
            Cerca un {{ store.selectedSpecialization }}
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
