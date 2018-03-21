<template>
<div class="ui main container">
  <product v-bind:products="products" v-bind:types="types"></product>
</div>
</template>

<script>
import ProductService from '../../services/ProductService';
import Product from './Product';

export default {
  name: 'Wind',
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