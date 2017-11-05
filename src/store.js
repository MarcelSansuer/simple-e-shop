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
      { invId: 1, name: 'PokéBall', image: '//placehold.it/200', price: 4711 },
      { invId: 2, name: 'Cap', image: '//placehold.it/200', price: 200 },
      { invId: 3, name: 'Hyper Potion', image: '//placehold.it/200', price: 1000 },
      { invId: 4, name: 'Moomoo Milk', image: '//placehold.it/200', price: 500 },
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
