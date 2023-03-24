<script>

import { store } from '../store.js'
export default{
    name:'cardComp',
    data(){
        return {
            store,
        }   
    }
}

</script>

<template>
    <div class="col" v-for="element in store.doctorsList">
        <div class="card ">
            <div class="card-body">
                <h5 class="card-title"> {{ element.specialization.title }}</h5>
                <p class="card-text">{{ element.specialization.color }}</p>
            </div>
        </div>
    </div>
</template>



<style lang="scss">
.card-body{
    height:100px;
    h5{
        font-size: 1rem;
    }
}

</style>
