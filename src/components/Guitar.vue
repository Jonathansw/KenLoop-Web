<template>
<div class="ui main container">
  <product-page v-bind:products="products" v-bind:types="types"></product-page>
</div>
</template>

<script>
import ProductService from '../../services/ProductService';
import ProductPage from './ProductPage';

export default {
  name: 'Guitar',
  components: {
    ProductPage,
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