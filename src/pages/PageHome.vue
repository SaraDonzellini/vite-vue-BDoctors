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
        breakpoints: {
          640: {
            perPage: 1,
            gap: '0.5rem'
          },
          992: {
            perPage: 2,
          },
          1200: {
            perPage: 3,
          },
        },
      },
      blogs: [
        {
          name: 'Alessio',
          surname: 'Napoletano',
          photo: 'alessio-photo.jpg',
          place: 'Milano | Lombardia',
          text: ''
        },
        {
          name: 'Giada',
          surname: 'Gallitto',
          photo: 'giada-photo.jpg',
          place: 'Cordignano | Veneto',
          text: ''
        },
        {
          name: 'Sara',
          surname: 'Donzellini',
          photo: 'sara-photo.png',
          place: 'Savona | Liguria',
          text: 'Sono una Junior Full Stack Web Developer appena uscita dal corso Boolean pronta a crescere in ambito lavorativo! Mi piace la musica e perdo la vita dietro ai videogames'
        },
        {
          name: 'Manuel',
          surname: 'Bravaccini',
          photo: 'manuel-photo.jpg',
          place: 'Firenze | Toscana',
          text: ''
        },
        {
          name: 'Vincenzo',
          surname: 'Belardo',
          photo: 'vincenzo-photo.jpg',
          place: 'Caserta | Campania',
          text: ''
        },
      ],
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
        //console.log(response.data.response)

        // Calcola la media dei voti per ogni dottore
        this.doctors.forEach(doctor => {
          for (let i = 0; i < doctor.user.reviews.length; i++) {
            const doctorsWithAverageVote = this.doctors.map(doctor => {
              const reviews = doctor.user.reviews;
              const totalVotes = reviews.reduce((sum, review) => sum + review.vote, 0);
              const averageVote = totalVotes / reviews.length;
              //console.log(averageVote);
              return {
                ...doctor,
                averageVote: averageVote.toFixed(2)
              };
            });
            // console.log(doctor);
            this.sliderDoctors = doctorsWithAverageVote.filter(doctor => doctor.averageVote >= 4);
            //console.log(doctorsWithAverageVote)
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

      } catch (error) {
        console.log(error)
      }
    },

  },

  created() {
    this.getDoctorsWithAverageVote();
    this.getSpecializations();
  },
}
</script>

<template>
  <section class="jumbotron text-home d-flex align-items-center w-100">
    <div class="container">
      <div class="text-home">
        <h1>
          Benvenuti in Bdoctors
        </h1>
        <h5 class="mb-4">
          Cerca tra i nostri dottori per trovare il tuo specialista
        </h5>
      </div>

      <div class="row">
        <div class="col col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <div class="my-3">
            <label class="mb-2 text-light" for="specialization-select">Seleziona specializzazione:</label>
            <select class="form-select" id="specialization-select" v-model="store.selectedSpecialization">
              <option value="">Tutte le specializzazioni</option>
              <option v-for="specialization in store.specializations" :key="specialization.id" :value="specialization.id">
                {{ specialization.title }}</option>
            </select>
          </div>

        </div>
        <div class="d-flex">
          <router-link v-if="!store.selectedSpecialization" class="my-btn" :to="{ name: 'doctors' }">
            Tutti i nostri dottori
          </router-link>

          <div v-else class="d-flex">
            <router-link class="my-btn me-3" :to="{ name: 'doctors' }">
              Cerca per specializzazione
            </router-link>

            <button class="btn btn-danger" style="border-radius: 25px;" @click="store.selectedSpecialization = ''">
              Rimuovi filtro
            </button>
          </div>

        </div>
      </div>
    </div>
  </section>

  <div class="main-home">
    <section class="functions py-5">
      <div class="container p-3 justify-content-around">
        <div class="row justify-content-center">
          <div class="col-11 mx-4 mb-3 col-md-8 col-lg-3 card-tool border rounded-4 p-3 text-center bg-white shadow">
            <div class="info-title d-flex flex-column justify-content-center">
              <i class="fa-solid fa-magnifying-glass pe-2 fs-3 mb-3"></i>
              <h5 class="mb-4">
                Trova il dottore adatto a te!
              </h5>
            </div>
            <p>
              Scegli il tipo di specializzazione che ti interessa per trovare il medico inerente o
              scopri la vasta scelta di dottori offerti dal nostro sito.
            </p>
          </div>
          <div class="col-11 mx-4 mb-3 col-md-8 col-lg-3 card-tool border rounded-4 p-3 text-center bg-white shadow">
            <div class="info-title d-flex flex-column">
              <i class="fa-regular fa-envelope pe-2 fs-3 mb-3"></i>
              <h5 class="mb-4">
                Prenota la tua visita!
              </h5>
            </div>
            <p>
              Con il nostro servizio di messaggistica, potrai inviare personalmente un messaggio ad uno dei nostri dottori
              per avere informazioni e prenotare un appuntamento.
            </p>
          </div>
          <div class="col-11 mx-4 mb-3 col-md-8 col-lg-3 card-tool border rounded-4 p-3 text-center bg-white shadow">
            <div class="info-title d-flex flex-column">
              <i class="fa-solid fa-pen-nib pe-2 fs-3 mb-3"></i>
              <h5 class="mb-4 ">
                Lascia la tua recensione!
              </h5>
            </div>
            <p>
              Oltre a poter leggere le recensioni di altri pazienti, avrai la possibilità
              di inserire la tua personale recensione per farci sapere la tua opinione sulla visita effettuate.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="bg-doctors py-5">
      <section class="slider-vote">
        <div class="container container-slider p-3">
          <Splide :options="sliderOptions">
            <SplideSlide class="row justify-content-start" v-for="(doctor, index) in sliderDoctors">
              <HomeDocCard :doctor="doctor" :key="index" :review="doctor.user.reviews" />
            </SplideSlide>
          </Splide>
        </div>
      </section>

      <section class="blogs">
        <div class="container container-slider p-3 my-5">
          <Splide :options="sliderOptions">
            <SplideSlide class="row justify-content-start" v-for="blog in blogs">
              <div class="blog-card col-12">
                <!-- Blog's photo -->
                <div class="blog-image-container mb-4">
                  <div class="blog-photo">
                    <img class="img-fluid" :src="`/imgs/${blog.photo}`" :alt="blog.name">
                  </div>
                </div>

                <div class="card-info card">
                  <!-- Blog's info -->
                  <div class="blog-info">
                    <div class="title">
                      <h4>
                        {{ blog.name }} {{ blog.surname }}
                      </h4>
                    </div>
                    <span class="text-place mb-3 d-inline-block">{{ blog.place }}</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus velit a nostrum accusamus.
                      Repellendus incidunt blanditiis fuga aliquam illum autem aperiam quis nemo non dignissimos
                      accusantium, cum quos! Delectus, odio.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </div>
  </div>
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

  .text-home {
    color: rgb(202, 214, 231);
    font-weight: bold;
    transition: color 4s ease-in-out;
    cursor: default;
    transition: color 3s ease-in-out, text-shadow 2s ease-in-out;

    &:hover {
      text-shadow: 0 0 10px rgba(0, 190, 161, 0.7),
        0 0 20px rgba(0, 190, 161, 0.5),
        0 0 30px rgba(0, 190, 161, 0.3),
        0 0 40px rgba(0, 190, 161, 0.1);
    }
  }
}

.functions {
  background-color: $primary-color;

  .info-title {
    font-weight: bolder;
    color: $secondary-variant-color;
  }
}

.bg-doctors {
  height: 100%;
  background-image: url('/imgs/bg-main-home.jpg');
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(50px);

  .blog-card {
    position: relative;
    padding-top: 3.5rem;

    .blog-image-container {
      padding-left: 2rem;

      .blog-photo {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top: 0;
        z-index: 5;

        img {
          height: 100%;
          width: 100%;
        }
      }
    }

    .card-info {
      border-radius: 25px;
      padding: 1rem;
      height: 80%;

      .blog-info {
        padding: 4.5rem 1rem 3rem 1rem;
        width: 100%;
        color: $primary-variant-color;

        h4 {
          font-weight: bold;
        }

        .text-place {
          font-weight: 600;
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
