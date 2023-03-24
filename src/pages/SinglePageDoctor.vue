<script>
import { store } from '../store';
import axios from 'axios';
import SinglePageInfo from './single-page-partials/SinglePageInfo.vue';

export default {
  name: 'SinglePageDoctor',
  components: {
    SinglePageInfo,
  },
  data() {
    return {
      store,
      doctor: null,
    }
  },
  methods: {
    getDoctor() {
            axios.get(`http://127.0.0.1:8000/api/doctors/${this.$route.params.id}`, {
                params: {

                }
            })
                .then((response) => {
                    this.doctor = (response.data.results);
                    console.log(response.data.results)
                })
                .catch(function (error) {
                    console.warn(error);
                });
        },
  },
  created() {
    this.getDoctor();
  }
}
</script>

<template>
  <div class="wallpaper w-100 h-100 pt-5">
    <div class="container card-doctor">
      <SinglePageInfo :doctor="doctor" />
    </div>
  </div>
</template>

<style lang="scss">
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as * ;

.wallpaper{  
  background-image: url('../../public/imgs/Bg-image.jpg');
  background-size: cover;
  background-position: center;
  .card-doctor{
    border-radius: 20px;
    background-color: white;
    height: 800px;
    width: 100%;
  }
}

</style>



