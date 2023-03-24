<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import CallAllDoctsApi from './components/CallAllDoctsApi.vue';
import CallApiSelect from './components/CallApiSelect.vue'

export default {
    components:{
    AppHeader,
    AppMain,
    AppFooter,
    CallAllDoctsApi,
    CallApiSelect
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
  </main>
  <footer>
     <AppFooter/>
  </footer>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap' as *;
</style>
