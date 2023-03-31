<script>
import DoctorCard from '../components/DoctorCard.vue';
import axios from 'axios';
//import store
import { store } from '../store.js'

export default {
  name: 'PageDoctors',

  components: {
    DoctorCard,
  },

  data() {
    return {
      votes: [
        {
          num: 1,
          text: 'stella',
        },
        {
          num: 2,
          text: 'stelle',
        },
        {
          num: 3,
          text: 'stelle',
        },
        {
          num: 4,
          text: 'stelle',
        },
        {
          num: 5,
          text: 'stelle',
        }
      ],
      reviews: [1, 2, 5, 10],
      store,
      doctors: [],
      specializations: [],
      specDoctors: [],
      voteDoctors: [],
      revDoctors: [],
      selectedSpecialization: '',
      selectedVote: '',
      selectedReview: null,
      averageVote: null,
      doctorsWithAverageVote: null,
    }
  },

  methods: {

    async getDoctors() {
      const [doctorsResponse, specializationsResponse] = await Promise.all([ // Execute when all request in the array are resolved
        axios.get('http://127.0.0.1:8000/api/doctors/'),
        axios.get('http://127.0.0.1:8000/api/specializations'),
      ]);

      this.doctors = doctorsResponse.data.response;
      this.doctors.forEach(doctor => {
        for (let i = 0; i < doctor.user.reviews.length; i++) {
          this.doctorsWithAverageVote = this.doctors.map(doctor => {
            const reviews = doctor.user.reviews;
            // const numReview = reviews.length;
            const totalVotes = reviews.reduce((sum, review) => sum + review.vote, 0);
            const averageVote = totalVotes / reviews.length;
            // console.log(this.numReview);
            return {
              ...doctor,
              averageVote: averageVote.toFixed(2),
              numReview: reviews.length
            };
          });
        }
      });
      this.specializations = specializationsResponse.data.response;
    },

  },

  computed: {
    filteredDoctors() {
      if (!this.selectedSpecialization) {
        this.specDoctors = this.doctorsWithAverageVote;

        if (this.selectedVote) {
          this.voteDoctors = this.specDoctors.filter((doctor) => doctor.averageVote == this.selectedVote)
          if (this.selectedReview) {
            this.revDoctors = this.voteDoctors.filter((doctor) => doctor.numReview >= this.selectedReview)
            return this.revDoctors
          } else {
            return this.voteDoctors
          }
        } else {
          return this.specDoctors
        }
      } else if (this.selectedSpecialization) {
        this.specDoctors = this.doctorsWithAverageVote.filter((doctor) =>
          doctor.specializations.some((spec) => spec.id === this.selectedSpecialization)
        );
        if (this.selectedVote) {
          this.voteDoctors = this.specDoctors.filter((doctor) => doctor.averageVote == this.selectedVote)
          if (this.selectedReview) {
            this.revDoctors = this.voteDoctors.filter((doctor) => doctor.numReview >= this.selectedReview)
            return this.revDoctors
          } else {
            return this.voteDoctors
          }
        } else {
          return this.specDoctors
        }
      }
    },
  },

  mounted() {
    this.getDoctors();
    this.selectedReview = '';
  },

  created() {
  },
}


</script>

<template>
  <div class="bg-doctors">
    <div class="container py-5">

      <div class="row justify-content-between">
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
        <div class="col-6 col-md-6 my-2">
          <div class="filters row justify-content-end">
            <div class="col-4">
              <select v-if="selectedVote" class="form-select" aria-label="Default select example"
                v-model="selectedReview">
                <option selected value="">N° min Recensioni</option>
                <option v-for="review in reviews" :key="review" :value="review">
                  {{ review }}
                </option>
              </select>
            </div>
            <div class="col-4">
              <select class="form-select" aria-label="Default select example" v-model="selectedVote">
                <option selected value="">Voto</option>
                <option v-for="vote in votes" :key="vote" :value="vote.num">
                  {{ vote.num }} {{ vote.text }}
                </option>
              </select>
            </div>
            <div class="col-3 d-flex justify-content-end">
              <button @click="(this.selectedVote = '') && (this.selectedSpecialization = '')" class="btn filter-btn">
                Rimuovi filtri
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row gap-5 justify-content-around">
        <DoctorCard v-for="doctor in filteredDoctors" :doctor="doctor" :key="doctor.id" :review="doctor.user.reviews" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

.bg-doctors {
  background-image: url('/imgs/Bg-image.jpg');
  background-size: cover;
  background-position: center;

  .filter-btn {
    background-color: $secondary-variant-color;
    color: white;
  }
}
</style>