import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        counter: 0,
        data: []
    },
    mutations: {
        increment: state => state.counter ++,
        decrement: state => state.counter --,
        getData: state =>{
            axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then(result => {
                state.data.push(result.data)
            })
        },
        deleteItem: (state, id) => {
            state.data.filter(function(jsonObject) {
                return jsonObject['id'] != id;
            });
            
            return state.data         
        }
        
    },
    getters: {
        counter: state => state.counter * 3,
        data: state => state.data
        
    },
    actions: {
        decrement: context => context.commit('decrement'),
        increment: context => context.commit('increment'),
        getData: context => context.commit('getData'),
        deleteItem: ({commit}, id) => commit('deleteItem', id)
    }
})
export {store}