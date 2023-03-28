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
      <button class="navbar-toggler py-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav d-flex justify-content-between">
          <li class="nav-item">
            <a class="nav-link my_navbar" href="#address">Informazioni Dottore</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container card shadow-lg">
    <div class="row">
      <div class="col-12 col-md-5 m-2">
        <h5>Indirizzo:</h5>
        <p> {{ doctor.address }}</p>
        <h5>Telefono:</h5>
        <p> {{ doctor.phone }}</p>
        <h5>Biografia:</h5>
        <p>
          {{ doctor.bio }}
        </p>

      </div>
      <div class="col-12 col-md-5 m-2">
        <h5>
          Curriculum:
        </h5>
        <p>
          {{ doctor.curriculum }}
        </p>
      </div>
    </div>
  </div>
  <section id="recensioni">
    <nav class="navbar navbar-expand-lg my_navbar">
      <div class="container-fluid">
        <button class="navbar-toggler py-3" type="button">
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav d-flex justify-content-between">
            <li class="nav-item">
              <span class="nav-link my_navbar" href="#recensioni" id="bg-toggle">Scrivi una recensione</span>
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
      <button class="navbar-toggler py-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav d-flex justify-content-between">
          <li class="nav-item">
            <a class="nav-link my_navbar" href="#recensioni">Recensioni</a>
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

      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/variables' as *;


.my_navbar {
  background-color: $primary-bg-color;
  color: $primary-text-color;

  :hover {
    color: $secondary-text-color;
  }
}


.fa-star {
  color: rgba(255, 208, 0, 0.815);
}
</style>