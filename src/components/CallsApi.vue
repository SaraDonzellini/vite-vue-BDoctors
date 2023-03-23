<script>
import { store } from '../store';
import axios from 'axios';

export default {
  name: 'CallsApi',
  components: {

  },

  data() {
    return {
      store,
      urlAddress: 'http://127.0.0.1:8000/',
    }
  },

  methods: {

    getDoctors() {
      axios.get(this.urlAddress + 'api/doctors', {
        params: {

        }
      })

        .then((response) => {
          console.log(response.data.response.data);
          this.store.doctorsList = response.data.response.data;
        })

        .catch(function (error) {
          console.log(error);
        })

    }
  },
  created() {
    this.getDoctors();
  },

}
</script>

<template></template>

<style lang="scss" scoped></style>
