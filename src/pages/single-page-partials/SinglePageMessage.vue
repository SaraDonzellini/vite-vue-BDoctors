<script>
import axios from 'axios';

export default {
  name: 'SinglePageMessage',
  data() {
    return {
      formData: {
        userId: this.userId,
        name: '',
        surname: '',
        email: '',
        text: '',
      }
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
      required: true,
    },
  },

  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/messages', this.formData)
        console.log(response.data)
      } catch (error) {
        console.log(error.response.data)
      }
    }
  },

}
</script>

<template>
  <section id="messaggi">
    <nav class="navbar navbar-expand-lg my_navbar">
      <div class="container-fluid">
        <button class="navbar-toggler py-3" type="button">
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav d-flex justify-content-between">
            <li class="nav-item">
              <span class="nav-link my_navbar" href="#messaggi" id="bg-toggle">Invia un messaggio</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container card shadow-lg">
      <div class="row w-100">
        <div class="col-12 m-5">

          <form class="row w-100 justify-content-between" action="/messages" method="POST" @submit.prevent="handleSubmit">
            <div class="name col-12 col-md-3 px-2">
              <label for="name">
                <h6>Nome:</h6>
              </label>
              <input class="d-block form-control" v-model="formData.name" name="name" type="text" id="name">
            </div>
            <div class="surname col-12 col-md-3  px-2">
              <label for="surname">
                <h6>Cognome:</h6>
              </label>
              <input class="d-block form-control" v-model="formData.surname" name="surname" type="text" id="surname">
            </div>
            <div class="email col-12 col-md-3  px-2">
              <label for="email">
                <h6>Email:</h6>
              </label>
              <input class="d-block form-control" v-model="formData.email" name="email" type="email" id="email">
            </div>
            <div class="mex-text mt-4 col-12 px-2">
              <label for="mex-text">
                <h6>Testo:</h6>
              </label>
              <textarea name="text" v-model="formData.text" id="mex-text" class="form-control"></textarea>
            </div>
            <div class="button-sub d-flex justify-content-start">
              <button class="btn btn-primary mt-4 py-2 px-4" type="submit">Invia</button>
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

}
</style>