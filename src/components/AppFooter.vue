<script>

export default {
  name: 'AppFooter',
  components: {

  },
  data() {
    return {
      services: ['Privacy e cookies', 'Chi siamo', 'Contatti', 'Lavoro', 'Condizioni di Servizio', 'Ufficio stampa'],
      patients: ['Dottori', 'Medici di base', 'Strutture', 'Chiedi al dottore', 'Prestazioni', 'Patologie', 'FAQ', 'App mobile', 'Diagnostica per immagini'],
      professionals: ['Prezzi', 'Area professionisti sanitari', 'Risorse gratuite', 'Centro Assistenza per Professionisti'],


    }
  },
}
</script>

<template>
  <div class='bg-dark p-3'>
    <div class="container">
      <div class="row">
        <div class="col col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
          <div class="box text">
            <h4 class="title">Servizi</h4>
            <p class="p-0 m-0" v-for="service in services">{{ service }}</p>
          </div>
        </div>

        <div class="text  col  col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-3">
          <h4 class="title">Per i pazienti</h4>
          <p class="p-0 m-0" v-for="patient in patients">{{ patient }}</p>
        </div>

        <div class="text  col col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
          <h4 class="title">Per i professionisti sanitari</h4>
          <p class="p-0 m-0" v-for="professional in professionals">{{ professional }}</p>
        </div>

        <div class="text col col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 ">
          <img src="\imgs\Doctor-logo.png" style="width:30px" alt=""><h4 class="d-inline title"> BDoctors</h4>
          <p class="mb-3 mt-3 p-0">&#169; Boolean by 
            <a href="https://github.com/AlessioNapoletano">Alessio</a>, 
            <a href="https://github.com/ManuelBravaccini">Manuel</a>, 
            <a href="https://github.com/SaraDonzellini">Sara</a>, 
            <a href="https://github.com/Enzo-belardo">Vincenzo</a>, 
            <a href="https://github.com/GiadaGallitto">Giada</a>
          </p>
          <div class="box ">
            <i class="fa-brands fa-facebook fa-2x "></i><span>  </span>
            <i class="fa-brands fa-square-twitter fa-2x ps-2"></i><span>  </span>
            <i class="fa-brands fa-linkedin fa-2x ps-2"></i><span>  </span>
            <i class="fa-brands fa-spotify fa-2x ps-2"></i>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;


p{
  font-size: 0.8rem;
}

a{
  text-decoration: none;
  color: $secondary-color;
  &:hover{
    color: $secondary-variant-color
  }
}

.title{
  color: $secondary-color ;
}
.text{
  color: white;
}

.fa-facebook{
  color: $facebook;
}
.fa-square-twitter{
  color: $twitter;
}
.fa-spotify{
  color: $spotify;
}
.fa-linkedin{
  color: $linkedin;
}
</style>
