<script>

export default {
    name: 'SinglePageInfo',
    data() {
        return {
            fullStars: [],
            emptyStars: [],
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
    },
    methods: {
        // getStarsVote(num){
        //     let fullStarElement = Math.ceil(num / 2)
        //     console.log(num)
        //     console.log(fullStarElement)

        //     for(let i = 0; i < fullStarElement ; i++){
        //         this.fullStars.push(fullStarElement);
        //     }
        //     console.log(this.fullStars.length)

        //     let emptyStarElement = 1
        //     for(let i = 0; i < (5 - this.fullStars.length) ; i++){
        //         this.emptyStars.push(emptyStarElement)
        //     }
        //     console.log(this.emptyStars.length)
        // },
    },
    created() {
        // this.getStarsVote(this.vote);
    }
}
</script>

<template>
    <div class="info-container d-flex justify-content-around">
        <section class=" image-box d-flex justify-content-center">
            <img class="image-doctor img-fluid" :src="`../../public/${doctor.photo}`" :alt="doctor.user.name">
        </section>
        <section class="info-box d-flex flex-column justify-content-around ms-5">
            <div class="infos">
                <h1>
                    {{ doctor.user.name }} {{ doctor.user.surname }}
                </h1>
                Specializzazione:
                <span v-for="(specialization, index) in doctor.specializations" :key="index">
                    {{ specialization.title }} |
                </span>
                <div class="review-info">
                    <h6>Voto: </h6>
                    <span v-for="(reviewEl, index) in review" :key="index">
                        {{ reviewEl.vote }} |
                    </span>
                    <!-- <div class="stars">
                            <i v-for="starEL in fullStars" class="fa-solid fa-star"></i>
                            <i v-for="star in emptyStars" class="fa-regular fa-star"></i>
                        </div> -->
                </div>
            </div>
            <div class="buttons d-flex">
                <a class="btn btn-info me-5" href="#">Invia un messaggio</a>
                <a class="btn btn-success" href="#">Scrivi una recensione</a>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.info-container {
    padding: 4rem;

    .image-box {
        width: 400px;
        height: 400px;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid black;
    }

    ;

    p {
        line-height: 0.5rem;
    }
}
</style>
