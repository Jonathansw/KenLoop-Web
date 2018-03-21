<template>
<div class="ui main container">
  <product v-bind:products="products" v-bind:types="types"></product>
</div>
</template>

<script>
import ProductService from '../../services/ProductService';
import Product from './Product';

export default {
  name: 'Percussion',
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
    this.getPercussions();
  },
  methods: {
    async getPercussions() {
      const response = await ProductService.fetchPercussions();
      this.products = response.data.percussion;
      this.types = _.map(_.uniqBy(response.data.percussion, 'type'), 'type');
    }
  }
};
</script>
<style>

</style>