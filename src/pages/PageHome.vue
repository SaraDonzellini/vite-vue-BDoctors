<script>

</script>

<template>
  <section class="jumbotron d-flex align-items-center w-100">
    <div class="container">
      <h1>
        Benvenuta/o in Bdoctors!
      </h1>
      <h5 class="mb-4">
        Cerca tra i nostri dottori per trovare il tuo specialista
      </h5>
      <div class="d-flex">
        <router-link class="btn btn-primary" :to="{ name: 'doctors' }">
          Tutti i nostri dottori
        </router-link>
      </div>
    </div>
  </section>
  <section class="functions">
    <div class="container mt-4 border p-3 d-flex justify-content-around">
      <div class="card-tool border">
        <h5>
          Trova il dottore adatto a te!
        </h5>
        <p>
          Scegli il tipo di specializzazione che ti interessa per trovare il medico inerente o
          scopri la vasta scelta di dottori offerti dal nostro sito!
        </p>
      </div>
      <div class="card-tool border">
        <h5>
          Prenota la tua visita!
        </h5>
        <p>
          Con il nostro servizio di messaggistica, potrai inviare personalmente un messaggio a
        </p>
      </div>
      <div class="card-tool border">
        <h5>
          Lascia la tua recensione!
        </h5>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

.jumbotron {
  height: 650px;
  background-image: url('./imgs/jumbo-home.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 25%;
}
.functions{
  height: 250px;
  background-color: $background-color;
}
</style>
