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
            showMessage: false,
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
                });
            this.clearInput();
        },

        clearInput() {
            this.name = '';
            this.surname = '';
            this.vote = '';
            this.content = '';
        },

        onSubmit() {
            this.sendReview();
            this.clearInput();
            this.showMessage = true;
        }

    }
}

</script>

<template>
    <div class="row w-100">
        <div class="col-12 m-5">
            <form class="row w-100 justify-content-between" @submit.prevent="onSubmit">
                <div class="name col-12 col-md-3 px-2">
                    <label for="name">
                        <h6>Nome(*):</h6>
                    </label>
                    <input v-model="name" required class="d-block form-control" name="name" type="text" id="name">
                </div>
                <div class="surname col-12 col-md-3  px-2">
                    <label for="surname">
                        <h6>Cognome(*):</h6>
                    </label>
                    <input v-model="surname" required class="d-block form-control" name="surname" type="text" id="surname">
                </div>
                <div class="vote col-12 col-md-3  px-2">
                    <label for="vote">
                        <h6>Voto(*):</h6>
                    </label>
                    <select v-model="vote" required name="vote" id="vote" class="d-block form-control form-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                </div>
                <div class="rev-text mt-4 col-12 px-2">
                    <label for="rev-text">
                        <h6>Testo(*):</h6>
                    </label>
                    <textarea v-model="content" required name="rev-text" id="rev-text" class="form-control"></textarea>
                </div>
                <div class="">
                    (*) I campi sono obbligatori
                </div>
                <div class="button-sub d-flex justify-content-start">
                    <button class="btn btn-primary mt-4 py-2 px-4" type="submit">Invia</button>
                </div>
            </form>
            <div class="alert alert-success">
                Recensione inviato con successo!
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
input:invalid {
    border: 1px dashed rgb(0, 0, 0);
}

input:valid {
    border: 2px solid black;
}

select:invalid {
    border: 1px dashed rgb(0, 0, 0);
}

select:valid {
    border: 2px solid black;
}

textarea:invalid {
    border: 1px dashed rgb(0, 0, 0);
}

textarea:valid {
    border: 2px solid black;
}
</style>

