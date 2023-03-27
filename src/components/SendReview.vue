<script>
import axios from 'axios';
export default {
    name: 'SendReview',

    data() {
        return {
            name: '',
            surname: '',
            vote: '',
            content: '',
            userId: this.userId,
        }
    },

    props: {
        'userId': {
            type: Number,
            required: true
        }
    },

    methods: {
        sendReview() {
            axios.post('http://127.0.0.1:8000/api/reviews', {
                name: this.name,
                surname: this.surname,
                vote: this.vote,
                content: this.content,
                userId: this.userId
            })
                .then(response => {
                    // Gestisci la risposta del backend
                })
                .catch(error => {
                    // Gestisci gli errori di invio
                })
        }
    }
}

</script>

<template>
    <div class="row w-100">
    <div class="col-12 m-5">
        <form @submit.prevent="sendReview">
            <label>Nome</label>
            <input v-model="name" type="text">
                <label>Cognome</label>
                <input v-model="surname" type="text">
                <label>voto: </label>
                <input v-model="vote" type="number">
                <label>Testo</label>
                <textarea v-model="content"></textarea>
                <button type="submit">Invia</button>
            </form>

            <!-- <form class="row w-100 justify-content-between" action="">
                                                                        <div class="name col-12 col-md-3 px-2">
                                                                            <label for="name">
                                                                                <h6>Nome:</h6>
                                                                            </label>
                                                                            <input class="d-block form-control" name="name" type="text" id="name">
                                                                        </div>
                                                                        <div class="surname col-12 col-md-3  px-2">
                                                                            <label for="surname">
                                                                                <h6>Cognome:</h6>
                                                                            </label>
                                                                            <input class="d-block form-control" name="surname" type="text" id="surname">
                                                                        </div>
                                                                        <div class="vote col-12 col-md-3  px-2">
                                                                            <label for="vote">
                                                                                <h6>Voto:</h6>
                                                                            </label>
                                                                            <select name="vote" id="vote" class="d-block form-control form-select">
                                                                                <option value="1">1</option>
                                                                                <option value="2">2</option>
                                                                                <option value="3">3</option>
                                                                                <option value="4">4</option>
                                                                                <option value="5">5</option>
                                                                            </select>

                                                                        </div>
                                                                        <div class="rev-text mt-4 col-12 px-2">
                                                                            <label for="rev-text">
                                                                                <h6>Testo:</h6>
                                                                            </label>
                                                                            <textarea name="rev-text" id="rev-text" class="form-control"></textarea>
                                                                        </div>

                                                                    </form> -->
        </div>
    </div>
</template>