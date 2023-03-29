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
      // reviews: [],
      averageVotes: null,
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

    // getMediaVote() {
    //     // for (let i = 0; i < reviews.length; i++) {
    //     //   const mediaVote = doctor.user.reviews[i].vote.reduce((sum, val) => sum + val, 0) / doctor.recensioni.length;

    //     // }
    //     this.doctors.forEach(doctor => {
    //       this.reviews = doctor.user
    //       console.log();
    //     });
    //     // return { nome: doctor.nome, mediaRecensioni: media };
    // }
    setFilterVote(revVote) {
      console.log(revVote);
      return this.averageVotes = revVote;
    }
  },

  mounted: {
    filteredDoctors(selectVote) {
      return this.doctors.filter(doctor => {

        console.log(this.averageVotes)
        if (selectVote == null) {
          console.log(`Non è stato selezionato il filtro`)
          return doctor = true
        } else if (this.averageVotes !== selectVote) {
          console.log(`Il voto e il filtro non metchano`)
          return doctor = false
        } else if (this.averageVotes == selectVote) {
          console.log(`Ci sono dei voti che metchano col filtro`)
          return doctor = true
        }
      })
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
      <div class="col-12 col-md-3 m-auto my-2">
        <VoteFilter @changeVote="filteredDoctors" />
        <ReviewFilter />
      </div>
    </div>
    <!-- <ul>
                <li v-for="doctor in doctors">
                  {{ doctor.user.reviews }}
                </li>
              </ul> -->
    <div class="row gap-5 justify-content-around">
      <DoctorCard @findVote="setFilterVote" v-show="doctor" v-if="doctors.length" v-for="doctor in doctors"
        :doctor="doctor" :review="doctor.user.reviews" :key="doctor.id" />
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>