<template>
    <v-container>
        <v-parallax
            dark
            height="200"
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <v-row
                align="center"
                justify="center"
            >
                <v-col class="text-left" cols="12">
                    <h1 class="display-1 mb-4">{{ blog }}</h1>
                </v-col>
            </v-row>
        </v-parallax>
        <div v-html="body"></div>
    </v-container>
</template>


<script>
export default {
    data() {
        return {
            blog: [],
            body: [],
        }
    },
    mounted() {
        this.blog = this.$store.getters.getBlog.title
        this.body = this.$store.getters.getBlog.body
    },
}
</script>