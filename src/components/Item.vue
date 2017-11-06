<template>
  <div class="col-md-3">
    <div class="card">
      <img :src="image" :alt="name" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{ name }}</h4>
        <div class="card-text">{{ price | dollars }}</div>
          <div v-if="count > 0">
            <div class="card-text">{{ count }}</div>
          </div>
          <div class="error-message" v-else>
            sold out
          </div>
        <div class="row justify-content-end">
          <div v-if="count > 0">
            <button class="btn btn-primary" @click="addToCart(invId, count)">Add to cart</button>
          </div>
          <div v-else>
            <button class="btn btn-primary disabled" @click="addToCart(invId, count)">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import filters from './filters';


export default {
  name: 'item',
  props: ['invId', 'name', 'image', 'price', 'count'],
  methods: {
    addToCart(invId, count) {
      if(count > 0){
        this.$store.dispatch('addToCart', invId);
        this.$store.dispatch('decCountItem', invId);
      }
    },
  },
  filters,
};
</script>

<style media="screen">
  .error-message{
    color: red;
  }
</style>
