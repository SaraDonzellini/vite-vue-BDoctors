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
      messageElement: false,
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
    this.selectedSpecialization = store.selectedSpecialization;
  },

  created() {
  },
}


</script>

<template>
  <div class="bg-doctors">
    <div class="container py-5">

      <div class="d-flex justify-content-between mb-4 flex-wrap">

        <!-- Filter doctors -->
        <div class="col-12 col-md-3 mb-3">
          <h5 class="mb-3 secondary-text-color">Seleziona specializzazione:</h5>

          <select class="form-select" id="specialization-select" v-model="selectedSpecialization">
            <option value="">Tutte le specializzazioni</option>
            <option v-for="specialization in specializations" :key="specialization.id" :value="specialization.id">
              {{ specialization.title }}
            </option>
          </select>

        </div>

        <div class="col-12 col-md-6">
          <h5 class="mb-3 secondary-text-color">Seleziona filtri:</h5>

          <div class="d-flex filters gap-1">
            <select v-if="selectedVote" class="form-select" aria-label="Default select example" v-model="selectedReview">
              <option selected value="">N° min Recensioni</option>
              <option v-for="review in reviews" :key="review" :value="review">
                {{ review }}
              </option>
            </select>

            <select class="form-select" aria-label="Default select example" v-model="selectedVote">
              <option selected value="">Voto</option>
              <option v-for=" vote in votes" :key="vote" :value="vote.num">
                {{ vote.num }} {{ vote.text }}
              </option>
            </select>

            <button @click="(this.selectedVote = '') && (this.selectedSpecialization = '') && (this.selectedReview = '')"
              class="btn btn-danger container-fluid" style="border-radius: 25px;">
              Rimuovi
            </button>
          </div>

        </div>
      </div>

      <section v-show="doctors.length === 0" class="wait-api">
        <div class="loader">

          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="-466.4 259.6 280.2 47.3" enable-background="new -466.4 259.6 280.2 47.3" xml:space="preserve">
            <polyline class="animation"
              points="-465.4,281 -436,281 -418.9,281 -423.9,281 -363.2,281 -355.2,269 -345.2,303 -335.2,263 -325.2,291 -319.2,281 -187.2,281 ">
            </polyline>

          </svg>
        </div>
      </section>

      <section v-if="(filteredDoctors == (this.specDoctors == 0))" class="no-doctor">
        <div>
          <h2 class="mt-3 secondary-text-color">
            Nessun dottore corrisponde ai criteri di ricerca
          </h2>
        </div>
      </section>

      <section v-else class="doctor row gap-5 justify-content-around">
        <DoctorCard v-for="doctor in filteredDoctors" :doctor="doctor" :key="doctor.id" :review="doctor.user.reviews" />
      </section>

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
}

div.filters {

  select,
  button {
    height: 38px !important;
  }
}

.no-doctor,
.wait-api {
  height: 60vh;
}

// Heartbeat loading
.loader {
  @mixin translate($x, $y) {
    -webkit-transform: translate($x, $y);
    -ms-transform: translate($x, $y);
    -o-transform: translate($x, $y);
    transform: translate($x, $y);
  }

  @mixin keyframes($animationName) {
    @-webkit-keyframes #{$animationName} {
      @content;
    }

    @-moz-keyframes #{$animationName} {
      @content;
    }

    @-o-keyframes #{$animationName} {
      @content;
    }

    @keyframes #{$animationName} {
      @content;
    }
  }

  @mixin animate($name, $duration, $iteration, $direction) {
    -webkit-animation-duration: $duration;
    -moz-animation-duration: $duration;
    -o-animation-duration: $duration;
    animation-duration: $duration;

    -webkit-animation-iteration-count: $iteration;
    -moz-animation-iteration-count: $iteration;
    -o-animation-iteration-count: $iteration;
    animation-iteration-count: $iteration;

    -webkit-animation-name: $name;
    -moz-animation-name: $name;
    -o-animation-name: $name;
    animation-name: $name;

    -webkit-animation-direction: $direction;
    -moz-animation-direction: $direction;
    -o-animation-direction: $direction;
    animation-direction: $direction;
  }

  @include keyframes(pulsate) {
    0% {
      background-color: #f44336;
    }

    25% {
      background-color: #E91E63;
    }

    50% {
      background-color: #2196F3;
    }

    75% {
      background-color: #FFC107;
    }

    100% {
      background-color: #FF5722;
    }
  }

  @include keyframes(move) {
    to {
      stroke-dashoffset: -1200;
    }
  }

  @include keyframes(fade) {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }
  }

  @mixin pulsate {
    @include animate(pulsate, 80s, infinite, normal);
  }


  .loader {
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999999;
    @include pulsate;

    svg {
      left: 0;
      position: absolute;
      top: 50%;
      @include translate(0, -50%);

    }
  }

  .animation {
    fill: none;
    stroke: $secondary-variant-color;
    stroke-linecap: square;
    stroke-miterlimit: 10;
    stroke-width: 0.5px;
    opacity: 1;
    stroke-dasharray: 600;
    -webkit-animation: move 5s linear forwards infinite, fade 5s linear infinite;
    animation: move 5s linear forwards infinite, fade 5s linear infinite;
  }

}


.no-doctor,
.wait-api {
  height: 60vh;
}


.loader {
  @mixin translate($x, $y) {
    -webkit-transform: translate($x, $y);
    -ms-transform: translate($x, $y);
    -o-transform: translate($x, $y);
    transform: translate($x, $y);
  }

  @mixin keyframes($animationName) {
    @-webkit-keyframes #{$animationName} {
      @content;
    }

    @-moz-keyframes #{$animationName} {
      @content;
    }

    @-o-keyframes #{$animationName} {
      @content;
    }

    @keyframes #{$animationName} {
      @content;
    }
  }

  @mixin animate($name, $duration, $iteration, $direction) {
    -webkit-animation-duration: $duration;
    -moz-animation-duration: $duration;
    -o-animation-duration: $duration;
    animation-duration: $duration;

    -webkit-animation-iteration-count: $iteration;
    -moz-animation-iteration-count: $iteration;
    -o-animation-iteration-count: $iteration;
    animation-iteration-count: $iteration;

    -webkit-animation-name: $name;
    -moz-animation-name: $name;
    -o-animation-name: $name;
    animation-name: $name;

    -webkit-animation-direction: $direction;
    -moz-animation-direction: $direction;
    -o-animation-direction: $direction;
    animation-direction: $direction;
  }

  @include keyframes(pulsate) {
    0% {
      background-color: #f44336;
    }

    25% {
      background-color: #E91E63;
    }

    50% {
      background-color: #2196F3;
    }

    75% {
      background-color: #FFC107;
    }

    100% {
      background-color: #FF5722;
    }
  }

  @include keyframes(move) {
    to {
      stroke-dashoffset: -1200;
    }
  }

  @include keyframes(fade) {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }
  }

  @mixin pulsate {
    @include animate(pulsate, 80s, infinite, normal);
  }


  .loader {
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999999;
    @include pulsate;

    svg {
      left: 0;
      position: absolute;
      top: 50%;
      @include translate(0, -50%);

    }
  }

  .animation {
    fill: none;
    stroke: $secondary-variant-color;
    stroke-linecap: square;
    stroke-miterlimit: 10;
    stroke-width: 0.5px;
    opacity: 1;
    stroke-dasharray: 600;
    -webkit-animation: move 5s linear forwards infinite, fade 5s linear infinite;
    animation: move 5s linear forwards infinite, fade 5s linear infinite;
  }

}
</style>