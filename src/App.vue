
<template>
  <div id="app" class="container my-5">
    <div class="row">
      <div class="col-9">
        <h1>E-store example</h1>
      </div>
      <div class="col-3">
        <ShoppingCart/>
      </div>
    </div>

    <div class="row">
          <Item
            v-for="item in forSale"
            :key="item.invId"
            :invId="item.invId"
            :name="item.name"
            :image="item.image"
            :price="item.price"
            :count="item.count" />
    </div>
  </div>
</template>

<script>
import Item from './components/Item.vue';
import ShoppingCart from './components/ShoppingCart.vue';

export default {
  name: 'app',
  computed: {
    forSale() { return this.$store.getters.forSale; },
    inCart() { return this.$store.getters.inCart; },
  },
  components: {
    Item: Item,
    ShoppingCart: ShoppingCart,
  },
};
</script>

<style lang="scss">

</style>
