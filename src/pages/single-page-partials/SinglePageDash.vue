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
  <section id="doctor-infos" class="my-card shadow-lg">
    <div class="info-title d-flex justify-content-center">
      <h5 class="m-0">Informazioni</h5>
    </div>
    
    <div class="container-fluid">
      <div class="row justify-content-between p-4">
        
        <div class="col-12 col-md-5">
          <div class="d-flex justify-content-between mb-3">
            <div>
              <h5 class="secondary-text-color">Indirizzo</h5>
              <p>{{ doctor.address }}</p>
            </div>

            <div>
              <h5 class="secondary-text-color">Telefono</h5>
              <p>{{ doctor.phone }}</p>              
            </div>
          </div>

          <div class="">
            <h5 class="text-center mb-3 secondary-text-color">Biografia</h5>
            <p>{{ doctor.bio }}</p>
          </div>
        </div>
          
        <div class="col-12 col-md-5 d-flex flex-column align-items-center">
          <h5 class="text-center secondary-text-color">Curriculum</h5>
          
          <a href="/imgs/Curriculum_1.png" download class="download-button mb-3"><i class="fa-solid fa-download"></i> Scarica</a>

          <div class="curriculum-image-container shadow-lg">
            <img class="image-cv img-fluid" src="/imgs/Curriculum_1.png" :alt="doctor.user.name">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="reviews">
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

.my-card {
  border-radius: 25px !important;
  border-width: 0 !important;
  background-color: $background-color !important;
  padding: 0;
  backdrop-filter: blur(50px);
  overflow: hidden;
}

.info-title {
  padding: 1rem;
  background-color: $primary-color;
  color: $secondary-text-color;
}

.curriculum-image-container {
        margin-bottom: 0 !important;
        border-radius: 25px;
        overflow: hidden;
        padding: 0 !important;
    }
.fa-star {
  color: rgba(255, 208, 0, 0.815);
}

.download-button{
  text-decoration: none;
  background-color: $secondary-color;
  color: $secondary-text-color;
  padding: .5rem;
  border-radius: 5px;
}

</style>