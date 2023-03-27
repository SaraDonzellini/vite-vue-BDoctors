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
          <!-- <li class="nav-item">
                  <a class="nav-link my_navbar" href="#recensioni">Recensioni</a>
                </li> -->

        </ul>
      </div>
    </div>
  </nav>
  <div class="container card shadow-lg">
    <div class="row">
      <div class="col-12 col-md-5 m-2">
        <p>Address: {{ doctor.address }}</p>
        <p>Phone: {{ doctor.phone }}</p>
        <p>
          Bio: {{ doctor.bio }}
        </p>

      </div>
      <div class="col-12 col-md-5 m-2">
        Curriculum: {{ doctor.curriculum }}
      </div>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg my_navbar">
    <div class="container-fluid">
      <button class="navbar-toggler py-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
  <div class="container-fluid card shadow-lg">
    <div class="row">
      <div class="col-12 m-2">
        <!-- <p>
                Recensioni:
              </p> -->
        <ul>
          <li v-for="(reviewEl, index) in review" :key="index">
            <h5>Vote: {{ reviewEl.vote }}
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