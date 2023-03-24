<script>
import { store } from '../store';
import axios from 'axios';

export default {
  name: 'CallAllDoctsApi',
  components: {

  },

  data() {
    return {
      store,
      url: 'http://127.0.0.1:8000/',
    }
  },
 
  //chiamata per tutti i dottori
  methods: {
    getDoctor() {
      axios.get(this.url+ 'api/doctors', {
        params: {
           
        }
      })

      .then((response) => {
        console.log(response.data);
        this.store.doctorsList = response.data.data;
      })

      .catch(function (error) {
        console.log(error);
      })

    }
  },

  created() {
    this.getDoctor();
  }

}

</script>

<template>

</template>

<style lang="scss" scoped></style>
