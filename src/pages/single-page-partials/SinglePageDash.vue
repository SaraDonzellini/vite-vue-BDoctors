<script>


export default {
  name: 'SinglePageDash',
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
  },

}
</script>

<template>
  <nav class="navbar navbar-expand-lg my_navbar">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav d-flex justify-content-between">
          <li class="nav-item">
            <a class="nav-link my_navbar" href="#address">Informazioni Dottore</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link my_navbar" href="#recensioni">Recensioni</a>
          </li> -->

        </ul>
      </div>
    </div>
  </nav>
  <div class="container card shadow-lg">
    <div class="row">
      <div class="col-5 m-5">
        <p>Address: {{ doctor.address }}</p>
        <p>Phone: {{ doctor.phone }}</p>
        <p>
          Bio: {{ doctor.bio }}

        </p>

      </div>
      <div class="col-5 m-5">
        Curriculum: {{ doctor.curriculum }}
      </div>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg my_navbar">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav d-flex justify-content-between">
          <!-- <li class="nav-item">
            <a class="nav-link my_navbar" href="#address">Informazioni Dottore</a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link my_navbar" href="#recensioni">Recensioni</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  <div class="container card shadow-lg">
    <div class="row">
      <div class="col-12 m-5">
        <!-- <p>
          Recensioni:
        </p> -->
        <ul>
          <li v-for="(reviewEl, index) in review" :key="index">
            {{ reviewEl.name }} {{ reviewEl.surname }} : {{ reviewEl.text }} (Voto: {{ reviewEl.vote }})

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