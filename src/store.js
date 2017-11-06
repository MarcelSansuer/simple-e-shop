import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /*
    for example the following dummy data.
    alternative you can use other tools to get data from the server (axios).
    */
    forSale: [
      { invId: 1, name: 'PokéBall', image: '//placehold.it/200', price: 4711, count: 5 },
      { invId: 2, name: 'Cap', image: '//placehold.it/200', price: 200, count: 5},
      { invId: 3, name: 'Hyper Potion', image: '//placehold.it/200', price: 1000, count: 5 },
      { invId: 4, name: 'Moomoo Milk', image: '//placehold.it/200', price: 500, count: 5 },
    ],
    inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
     ADD_TO_CART(state, invId) { state.inCart.push(invId); },
     REMOVE_FROM_CART(state, index){state.inCart.splice(index,1)},
     DEC_COUNT_OF_ITEM(state, invId){
       state.forSale.forEach(function(obj){
         if(obj.invId === invId){
          obj.count = obj.count -1 ;
         }
       })
     },
     INC_COUNT_OF_ITEM(state, invId){
       state.forSale.forEach(function(obj){
         if(obj.invId === invId){
          obj.count = obj.count +1 ;
         }
       })
     },

  },
  actions: {
    //remove items
    removeFromCart(context, index){
      context.commit('REMOVE_FROM_CART', index);
    },
    incCountItem(context, invId){
      context.commit('INC_COUNT_OF_ITEM', invId);
    },
    //add items
    addToCart(context, invId) {
      context.commit('ADD_TO_CART', invId);
    },
    decCountItem(context, invId){
      context.commit('DEC_COUNT_OF_ITEM', invId);
    },

  },
});
