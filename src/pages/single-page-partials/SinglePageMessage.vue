<script>


export default {
  name: 'SinglePageMessage',
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
  <section id="messaggi">
    <nav class="navbar navbar-expand-lg my_navbar">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav d-flex justify-content-between">
              <li class="nav-item">
                <span class="nav-link my_navbar" href="#messaggi" id="bg-toggle">Invia un messaggio!</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container card shadow-lg">
        <div class="row">
          <div class="col-12 m-5">
            <form class="row justify-content-around" action="">
              <div class="name col-3 px-2">
                <label for="name"><h6>Nome:</h6></label>
                <input class="d-block" type="text" id="name">
              </div>
              <div class="surname col-3 px-2">
                <label for="surname"><h6>Cognome:</h6></label>
                <input class="d-block" type="text" id="surname">
              </div>
              <div class="e-mail col-4 px-2">
                <label for="e-mail"><h6>Email:</h6></label>
                <input class="d-block" type="text" id="e-mail">
              </div>
            </form>
          </div>
        </div>
      </div>
  </section>
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

  .navbar-toggler{
    background-color: $primary-bg-color;
    span#bg-toggle{
      background-image: linear-gradient($primary-bg-color);
    }
  }
}
</style>