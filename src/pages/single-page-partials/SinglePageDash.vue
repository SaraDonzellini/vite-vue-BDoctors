<script>
import SendReview from '../../components/SendReview.vue';

export default {
  name: 'SinglePageDash',
  components: {
    SendReview

  },

  data() {
    return {
    }
  },
  props: {
    'doctor': {
      type: Object,
      required: true,
    },
    'review': {
      type: Object,
      required: true,
    },
    'userId': {
      type: Number,
      required: true
    }

  },
  methods: {

  },
  created() {
  },


}
</script>

<template>
  <nav class="navbar navbar-expand-lg my_navbar">
    <div class="container-fluid">
      <div class="" id="navbarNav">
        <ul class="navbar-nav d-flex justify-content-between">
          <li class="nav-item">
            <a class="nav-link my_navbar text-light" href="#address">Informazioni Dottore</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container card shadow-lg">
    <div class="row justify-content-between p-3">
      <div class="col-12 col-md-5 ">
        <h5>Indirizzo:</h5>
        <p> {{ doctor.address }}</p>
        <h5>Telefono:</h5>
        <p> {{ doctor.phone }}</p>
        <h5>Biografia:</h5>
        <p>
          {{ doctor.bio }}
        </p>

      </div>
      <div class="col-12 col-md-5 ">
        <h5 class="text-center">
          Curriculum:
        </h5>
        <a href="/imgs/Curriculum_1.png" download>
          Scarica
        </a>
        <div>
          <!-- <img class="image-cv img-fluid" :src="`http://127.0.0.1:8000/storage/${doctor.curriculum}`" :alt="doctor.user.name"> -->
          <img class="image-cv img-fluid" src="/imgs/Curriculum_1.png" :alt="doctor.user.name">
        </div>
      </div>
    </div>
  </div>
  <section id="recensioni">
    <nav class="navbar navbar-expand-lg my_navbar">
      <div class="container-fluid">
        <div class="" id="navbarNav">
          <ul class="navbar-nav d-flex justify-content-between">
            <li class="nav-item">
              <span class="nav-link my_navbar text-light" href="#recensioni" id="bg-toggle">Scrivi una recensione</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!--Form per l'inserimento di una nuova recensione-->
    <div class="container card shadow-lg">
      <SendReview :userId="userId" />
    </div>
  </section>
  <nav class="navbar navbar-expand-lg my_navbar">
    <div class="container-fluid">
      <div class="" id="navbarNav">
        <ul class="navbar-nav d-flex justify-content-between">
          <li class="nav-item">
            <a class="nav-link my_navbar text-light" href="#recensioni">Recensioni</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>

  <div class="container-fluid card shadow-lg">
    <div class="row">
      <div class="col-12 m-2">
        <ul>
          <li v-for="(reviewEl, index) in review" :key="index">
            <h5>Voto:
              <i class="fa-solid fa-star" v-for="n in Math.ceil(reviewEl.vote)"></i>
              <i class="fa-regular fa-star" v-for="n in Math.floor(5 - reviewEl.vote)"></i>
            </h5>
            <h6>{{ reviewEl.name }} {{ reviewEl.surname }}</h6>
            <p>{{ reviewEl.text }}</p>
          </li>
        </ul>
        <!-- <h4 v-else class="py-3">Non sono ancora presenti delle recensioni</h4> -->
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/variables' as *;


.my_navbar {
  background-color: $primary-color;
  color: $primary-text-color;

  :hover {
    color: $secondary-variant-color;
  }
}


.fa-star {
  color: rgba(255, 208, 0, 0.815);
}
</style>