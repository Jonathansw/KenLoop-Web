<template>
<div class="ui main container">
  <product v-bind:products="products" v-bind:types="types"></product>
</div>
</template>

<script>
import ProductService from '../../services/ProductService';
import Product from './Product';

export default {
  name: 'Guitar',
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
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const response = await ProductService.fetchGuitars();
      this.products = response.data.guitar;
      this.types = _.map(_.uniqBy(response.data.guitar, 'type'), 'type');
    },
  },
};
</script>
<style>

</style>