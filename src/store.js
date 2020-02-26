import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store =  new Vuex.Store({
    state: {
        cards: [],
        blog: [],
    },
    mutations: {
        mutateDataSet(state, payload) {
            state.cards = payload;
        },
        mutateBlog(state, payload) {
            state.blog = payload;
        }
    },
    actions: {
        commitDataSet({ commit }) {
            return axios.get('http://hiroakik.pythonanywhere.com/api/v2/pages/')
                .then(response => {
                commit('mutateDataSet', response.data.items)
                })
        },
        commitBlog({ commit }, payload) {
            commit('mutateBlog', payload.blog)
        },
    },
    getters: {
        getList(state) {
            return state.cards
        },
        getBlog(state) {
            return state.blog
        },
    },
})

export default store