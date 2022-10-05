import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {
   
  },
  actions:{
    GET_API({commit}) {
      return axios.get('http://localhost:3000/produkts')
        .then((response) => {commit('SET', response.data)})
  }
  },
  mutations:{
    SET:(state, products)=>{
      state.products=products;
    }
  },
  modules: {
  }
})
