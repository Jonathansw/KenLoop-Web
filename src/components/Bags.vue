<template>
<div class="ui main container">
  <product v-bind:products="products" v-bind:types="types"></product>
</div>
</template>

<script>
import ProductService from '../../services/ProductService';
import Product from './Product';

export default {
  name: 'Bag',
  components: {
    Product,
  },
  data() {
    return {
      products: [],
      types: [],
    };
  },
  mounted() {
    this.getBags();
  },
  methods: {
    async getBags() {
      const response = await ProductService.fetchBags();
      this.products = response.data.bag;
      this.types = _.map(_.uniqBy(response.data.bag, 'type'), 'type');
    },
  },
};
</script>
<style>

</style>