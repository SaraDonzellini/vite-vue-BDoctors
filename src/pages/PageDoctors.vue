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

    // async getDoctorsWithAverageVote(id) {
    //   try {
    //     let response
    //     if (id) {
    //       response = await axios.get(`http://127.0.0.1:8000/api/doctors/${id}`)
    //     } else {
    //       response = await axios.get(`http://127.0.0.1:8000/api/doctors/`)
    //     }
    //     this.doctors = response.data.response;
    //     // console.warn(response.data.response);

    //     this.doctors.forEach(doctor => {
    //       for (let i = 0; i < doctor.user.reviews.length; i++) {
    //         this.doctorsWithAverageVote = this.doctors.map(doctor => {
    //           const reviews = doctor.user.reviews;
    //           const totalVotes = reviews.reduce((sum, review) => sum + review.vote, 0);
    //           const averageVote = totalVotes / reviews.length;
    //           // console.log(averageVote);
    //           return {
    //             ...doctor,
    //             averageVote: averageVote.toFixed(2)
    //           };
    //         });
    //       }
    //     });

    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    
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
      this.specializations = specializationsResponse.data.response;
    },
    
    getVoteDoctors(revVote) {
      this.voteDoctors = this.doctorsWithAverageVote.filter((doctor) => doctor.averageVote == revVote);
      console.log(this.voteDoctors)
    }
  },

    // questa chiamata si occupa di dare tutti i dottori con determinata specializzazione
    // async getSpecializations() {
    //   try {
    //     const response = await axios.get('http://127.0.0.1:8000/api/specializations')
    //     this.specializations = response.data.response;
    //     // console.log(response.data.response);

    //   } catch (error) {
    //     console.log(error)
    //   }
    // },

  computed: {
    filteredDoctors() {
      if (!this.selectedSpecialization) {
        return this.doctors;
      } else {
        return this.doctors.filter((doctor) =>
          doctor.specializations.some((spec) => spec.id === this.selectedSpecialization)
        );
      }
    }
  },

  mounted() {
    this.getDoctors();
  },

  created() {
    // this.getDoctors();
    // this.getDoctorsWithAverageVote();
    // this.getSpecializations();
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
      <div class="col-2 col-md-2 m-auto my-2">
        <VoteFilter @changeVote="getVoteDoctors" />
        <ReviewFilter />
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