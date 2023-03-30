<script>
//import store
import { store } from '../store.js'

// import Home card
import HomeDocCard from '../components/HomeDocCard.vue';

//import axios
import axios from 'axios'

import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  data() {
    return {
      store,
      doctors: [],
      averageVote: null,
      sliderDoctors: [],
      sliderOptions: {
        slidesToShow: 3,
        slidesToScroll: 3,
        perPage: 3,
        pagination: false,
        type: 'slide',
        gap: '1rem',
        // autoplay: true,
        // breakpoints: {
        //   640: {
        //     perPage: 1,
        //     gap: '0.5rem'
        //   },
        //   768: {
        //     perPage: 2,
        //   },
        //   1024: {
        //     perPage: 3,
        //   },
        // },
      },
    }
  },
  components: {
    HomeDocCard,
    Splide,
    SplideSlide,
  },

  methods: {
    async getDoctorsWithAverageVote() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/doctors/')
        this.doctors = response.data.response;
        console.warn(response.data.response)

        // Calcola la media dei voti per ogni dottore
        this.doctors.forEach(doctor => {
          for (let i = 0; i < doctor.user.reviews.length; i++) {
            const doctorsWithAverageVote = this.doctors.map(doctor => {
              const reviews = doctor.user.reviews;
              const totalVotes = reviews.reduce((sum, review) => sum + review.vote, 0);
              const averageVote = totalVotes / reviews.length;
              console.log(averageVote);
              return {
                ...doctor,
                averageVote: averageVote.toFixed(2)
              };
            });
            // console.log(doctor);
            this.sliderDoctors = doctorsWithAverageVote.filter(doctor => doctor.averageVote >= 4);
            console.log(doctorsWithAverageVote)
          }
        });

      } catch (error) {
        console.log(error)
      }
    },
    async getSpecializations() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/specializations')
        this.store.specializations = response.data.response;
        // console.log(response.data.response);

      } catch (error) {
        console.log(error)
      }
    },

    // setAverageVote(revVote) {
    //   console.log(revVote);
    //   return this.averageVotes = revVote;
    // },

  },

  created() {
    this.getDoctorsWithAverageVote();
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
          <!-- <div class="search-doctors my-3">
            <label class="mb-2" for="specialization-select">Seleziona specializzazione:</label>
            <select class="form-select" id="specialization-select" v-model="store.selectedSpecialization">
              <option value="">Tutte le specializzazioni</option>
              <option v-for="specialization in store.specializations" :key="specialization.id" :value="specialization.id">
                {{ specialization.title }}</option>
            </select>
          </div> -->

        </div>
        <div class="d-flex">
          <router-link v-if="!store.selectedSpecialization" class="btn btn-primary" :to="{ name: 'doctors' }">
            Tutti i nostri dottori
          </router-link>

          <!-- <router-link v-else class="btn btn-primary" :to="{ name: 'doctors' }">
            Cerca un {{ store.selectedSpecialization }}
          </router-link> -->
        </div>
      </div>
    </div>
  </section>
  <section class="functions py-5">
    <div class="container border p-3 justify-content-around shadow">
      <div class="row w-100 justify-content-around">
        <div class="col-12 col-md-3 card-tool border rounded-4 p-3 text-center bg-white shadow">
          <h5 class="mb-4">
            <i class="fa-solid fa-magnifying-glass pe-2"></i>
            Trova il dottore adatto a te!
          </h5>
          <p>
            Scegli il tipo di specializzazione che ti interessa per trovare il medico inerente o
            scopri la vasta scelta di dottori offerti dal nostro sito.
          </p>
        </div>
        <div class="col-12 col-md-3 card-tool border rounded-4 p-3 text-center bg-white shadow">
          <h5 class="mb-4">
            <i class="fa-regular fa-envelope pe-2"></i>
            Prenota la tua visita!
          </h5>
          <p>
            Con il nostro servizio di messaggistica, potrai inviare personalmente un messaggio ad uno dei nostri dottori
            per avere informazioni e prenotare un appuntamento.
          </p>
        </div>
        <div class="col-12 col-md-3 card-tool border rounded-4 p-3 text-center bg-white shadow">
          <h5 class="mb-4">
            <i class="fa-solid fa-pen-nib pe-2"></i>
            Lascia la tua recensione!
          </h5>
          <p>
            Oltre a poter leggere le recensioni di altri pazienti, avrai la possibilità
            di inserire la tua personale recensione per farci sapere la tua opinione sulla visita effettuate.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="slider-vote">
    <div class="container p-3 border">
      <Splide :options="sliderOptions">
        <SplideSlide class="row justify-content-start" v-for="(doctor, index) in sliderDoctors">
          <HomeDocCard :doctor="doctor" :key="index" :review="doctor.user.reviews" />
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

.jumbotron {
  height: 650px;
  background-image: url('./imgs/jumbo-home.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 25%;
}

.functions .container {
  background-color: $background-color;
}
</style>
