import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store =  new Vuex.Store({
    state: {
        cards: []
    },
    mutations: {
        mutateDataSet(state, payload) {
            state.cards = payload;
        }
    },
    actions: {
        commitDataSet(store) {
            return axios.get('http://hiroakik.pythonanywhere.com/api/v2/pages/')
                .then(response => {
                store.commit('mutateDataSet', response.data.items)
                })
        }
    },
    getters: {
        getList (state) {
            return state.cards
        }
    },
})

export default store