<script>


export default {
  name: 'SinglePageDash',
  data() {
    return {
      fullStars: [],
      emptyStars: [],
      vote: 0,
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
    <div class="container card shadow-lg">
      <div class="row w-100">
        <div class="col-12 m-5">
          <form class="row w-100 justify-content-between" action="">
            <div class="name col-12 col-md-3 px-2">
              <label for="name">
                <h6>Nome:</h6>
              </label>
              <input class="d-block form-control" name="name" type="text" id="name">
            </div>
            <div class="surname col-12 col-md-3  px-2">
              <label for="surname">
                <h6>Cognome:</h6>
              </label>
              <input class="d-block form-control" name="surname" type="text" id="surname">
          </div>
          <div class="vote col-12 col-md-3  px-2">
              <label for="vote">
                <h6>Voto:</h6>
              </label>
              <select name="vote" id="vote" class="d-block form-control form-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div class="rev-text mt-4 col-12 px-2">
              <label for="rev-text">
                <h6>Testo:</h6>
              </label>
              <textarea name="rev-text" id="rev-text" class="form-control"></textarea>
            </div>

          </form>
        </div>
      </div>
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
            <h5>Voto: {{ reviewEl.vote }}
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
</style>