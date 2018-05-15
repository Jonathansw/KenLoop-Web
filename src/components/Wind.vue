<template>
<div class="ui main container">
  <product-page v-bind:products="products" v-bind:types="types"></product-page>
</div>
</template>

<script>
import ProductService from '../../services/ProductService';
import ProductPage from './ProductPage';

export default {
  name: 'Wind',
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
    this.getWinds();
  },
  methods: {
    async getWinds() {
      const response = await ProductService.fetchWinds();
      this.products = response.data.wind;
      this.types = _.map(_.uniqBy(response.data.wind, 'type'), 'type');
    },
  },
};
</script>
<style>

</style>