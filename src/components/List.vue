<template>
    <v-card
        class="mx-auto"
        max-width="1200"
    >
        <v-container fluid>
            <v-row dense>
                <v-col
                    v-for="card in cards"
                    :key="card.title"
                    :cols=3
                >
                    <v-card>
                        <v-img
                            :src="image"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="200px"
                            @click="getBlog"
                        >
                            <v-card-title v-text="card.title"></v-card-title>
                        </v-img>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>

                            <v-btn icon>
                                <v-icon>mdi-bookmark</v-icon>
                            </v-btn>

                            <v-btn icon>
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>


<script>
import axios from 'axios'

export default {
    data () {
        return {
            cards: [],
            image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
        }
    },
    mounted() {
        axios.get('http://hiroakik.pythonanywhere.com/api/v2/pages/')
            .then((res) => {
                this.cards = res.data.items;
            })
            .catch((error) => {
                // eslint-disable-next-line
                console.error(error);
            });
    },
    methods: {
        getBlog: function() {
            this.$router.push('/blog')
        }
    },
}
</script>
