<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import CallsApi from './components/CallsApi.vue';

export default {
    components:{
    AppHeader,
    AppMain,
    AppFooter,
    CallsApi
  },
    data(){
    return {   
    }
  },

  methods:{
},

created(){
  
}
  
}
</script>

<template>
  <header>
    <AppHeader/>
  </header>
  <main>
     <AppMain/>
     <CallsApi/>
  </main>
  <footer>
     <AppFooter/>
  </footer>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap' as *;
</style>
