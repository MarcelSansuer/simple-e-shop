<template>
  <div class="text-right">
    <button class="btn btn-primary" data-toggle="modal" data-target="#shoppingCart">Cart ({{ countStuffInCart }})</button>
    <div id="shoppingCart" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Shopping cart</h5>
          <button class="close" data-dismiss="modal">
            &times;
          </button>
        </div>
        <div class="modal-body ">
          <!--Shopping cart items will go here.-->
          <table class="table">
          <tbody>
            <tr v-for="(item, index) in cart">
              <td>{{ item.name }}</td>
              <td>{{ item.price | dollars }}</td>
              <td>
                <button class="btn btn-sm btn-danger" @click="removeFromCart(index, item.invId)">&times;</button>
              </td>
              <td>
                <div v-if="item.count > 0">
                  <button class="btn btn-sm btn-success" @click="addToCart(item.invId, item.count)">&#43;</button>
                </div>
                <div v-else>
                  <button class="btn btn-sm btn-success disabled" @click="addToCart(item.invId, item.count)">&#43;</button>
                </div>
              </td>
            </tr>
            <tr>
              <th></th>
              <th class="text-right">{{ total | dollars }}</th>
              <th></th>
            </tr>
          </tbody>
        </table>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
          <button class="btn btn-primary">Check out</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import filters from './filters';

export default {
  name: 'shoppingCart',
  methods:{
    removeFromCart(index, invId){
      this.$store.dispatch('removeFromCart', index);
      this.$store.dispatch('incCountItem', invId);
    },
    addToCart(invId, count) {
      if(count > 0){
        this.$store.dispatch('addToCart', invId);
        this.$store.dispatch('decCountItem', invId);
      }
    },
  },
  computed: {
    inCart() { return this.$store.getters.inCart; },
    countStuffInCart(){return this.inCart.length},
    cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.forSale.find((forSaleItem) => {
          return cartItem === forSaleItem.invId;
        });
      });
    },
    total() {
        return this.cart.reduce((acc, cur) => acc + cur.price, 0);
      },
  },
  filters,

};
</script>
<style media="screen">
td {
  width: 100%;
}
</style>
