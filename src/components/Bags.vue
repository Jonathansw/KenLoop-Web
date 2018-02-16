<template>
<div class="ui main container">
  <h1>Bags</h1>
  <div v-for="bag in products" v-bind:key="bag._id">
    <p>{{bag.name}}</p>
    <p>{{bag.description}}</p>
    <p>{{bag.type}}</p>
  </div>

</div>
</template>

<script>
import ProductService from '../../services/ProductService';

export default {
  name: 'Bag',
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getBags();
  },
  methods: {
    async getBags() {
      const response = await ProductService.fetchBags();
      this.products = response.data.bag;
    },
  },
};
</script>
<style>

</style>