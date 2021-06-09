import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        counter: 0
    },
    mutations: {
        increment: state => state.counter ++,
        decrement: state => state.counter --
    },
    getters: {
        counter: state => state.counter * 3
    },
    actions: {
        decrement: context => context.commit('decrement'),
        increment: context => context.commit('increment')
    }
})
export {store}