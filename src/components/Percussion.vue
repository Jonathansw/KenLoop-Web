<template>
<div class="ui main container">
  <product-page v-bind:products="products" v-bind:types="types"></product-page>
</div>
</template>

<script>
import ProductService from '../../services/ProductService';
import ProductPage from './ProductPage';

export default {
  name: 'Percussion',
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
    this.getPercussions();
  },
  methods: {
    async getPercussions() {
      const response = await ProductService.fetchPercussions();
      this.products = response.data.percussion;
      this.types = _.map(_.uniqBy(response.data.percussion, 'type'), 'type');
    },
  },
};
</script>
<style>

</style>