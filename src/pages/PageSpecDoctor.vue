<script>
import SelectCard from '../components/SelectCards.vue';
import { store } from '../store.js'
export default{
    name:'cardComp',
    components: {
    SelectCard,
  },
    data(){
        return {
            store,
        }   
    }
}

</script>

<template>
    <SelectCard/>
</template>



<style lang="scss">
.card-body{
    height:100px;
    h5{
        font-size: 1rem;
    }
}

</style>
