<template>
<div class="ui main container">
  <h1>Guitar</h1>
  <div v-for="guitar in products" v-bind:key="guitar._id">
    <p>{{guitar.name}}</p>
    <p>{{guitar.description}}</p>
    <p>{{guitar.type}}</p>
  </div>


</div>
</template>

<script>
import ProductService from '../../services/ProductService';

export default {
  name: 'Guitar',
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getGuitars();
  },
  methods: {
    async getGuitars() {
      const response = await ProductService.fetchGuitars();
      this.products = response.data.guitar;
    },
  },
};
</script>
<style>

</style>