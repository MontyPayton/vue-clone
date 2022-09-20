import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {
    PRODUCTS(state){
      return state.products;
    }
  },
  mutations: {
    SET_PRODUKTS_TO_STATE:(state ,products)=>{
      state.products=products
    }
    
  },
  actions: {
    GET_PRODUCTS_API({commit}){
      return axios('http://localhost:3000/produkts',{
        method:"GET"
      })
      .then((products) =>{
        
        commit('SET_PRODUKTS_TO_STATE', products.data)
        return products;
      })
      .catch((error)=>{
        console.log(error);
        return error;
      })
    }
  },
  modules: {
  }
})
