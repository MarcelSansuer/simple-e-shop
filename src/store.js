import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /*
    for example i use the following dummy data.
    we can use axios oder another tool to load files (json or another) form server...
    */
    forSale: [
      { invId: 1, name: 'An Item', image: '//placehold.it/200', price: 999 },
      { invId: 2, name: 'Thing', image: '//placehold.it/200', price: 1499 },
      { invId: 3, name: 'Doo-dad', image: '//placehold.it/200', price: 499 },
      { invId: 4, name: 'Other thing', image: '//placehold.it/200', price: 299 },
    ],
    inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
     ADD_TO_CART(state, invId) { state.inCart.push(invId); },
     REMOVE_FROM_CART(state, index){state.inCart.splice(index,1)}
  },
  actions: {
    removeFromCart(context, index){
      context.commit('REMOVE_FROM_CART', index);
    },
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
  },
});
