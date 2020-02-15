<template>
    <v-footer
        color="black"
        padless
    >
        <v-row
            justify="center"
            no-gutters
        >
        <v-btn
            to="/"
            text
            class="my-2"
        >
            Home
        </v-btn>
        <v-btn
            @click="getList"
            to="/list"
            text
            class="my-2"
        >
            Blog
        </v-btn>
        <v-col
            class="foot"
            cols="12"
        >
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
        </v-row>
    </v-footer>
</template>


<script>
export default {
    data () {
        //
    },
    methods: {
        getList: function() {
            this.$store.dispatch('commitDataSet')
        }
    },
}
</script>

<style scoped>
.my-2 {
    color:#1AFF06;
}

.foot {
    color: #1AFF06;
    text-align: center;
}
</style>