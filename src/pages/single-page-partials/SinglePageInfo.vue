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
        vote: Number,
        averageRev: Number,
    },
    methods: {
        getStarsVote(num){
            let fullStarElement = Math.ceil(num / 2)
            console.log(num)
            console.log(fullStarElement)

            for(let i = 0; i < fullStarElement ; i++){
                this.fullStars.push(fullStarElement);
            }
            console.log(this.fullStars.length)

            let emptyStarElement = 1
            for(let i = 0; i < (5 - this.fullStars.length) ; i++){
                this.emptyStars.push(emptyStarElement)
            }
            console.log(this.emptyStars.length)
        },
    },
    created() {
        this.getStarsVote(this.vote);
    }
}
</script>

<template>
    <div class="info-container d-flex">
        <div class=" image-box d-flex justify-content-center">
            <img class="image-doctor img-fluid" :src="`../../public/${doctor.photo}`" :alt="doctor.user.name">
        </div>
        <div class="info-box ms-5">
            <h1>
                {{ doctor.user.name }} {{ doctor.user.surname }}
            </h1>
            Specializzazione:
            <span v-for="(specialization, index) in doctor.specializations" :key="index">
                {{ specialization.title }} |
            </span>
            <div class="review-info">
                <h6>Voto: </h6>
                <div class="stars">
                    <i v-for="starEL in fullStars" class="fa-solid fa-star"></i>
                    <i v-for="star in emptyStars" class="fa-regular fa-star"></i>
                </div>
            </div>
        </div>
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
