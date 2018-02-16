<template>
<div class="ui main container">
  <h1>Wind</h1>
  <div v-for="wind in products" v-bind:key="wind._id">
    <p>{{wind.name}}</p>
    <p>{{wind.description}}</p>
    <p>{{wind.type}}</p>
  </div>

</div>
</template>

<script>
import ProductService from '../../services/ProductService';

export default {
  name: 'Wind',
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getWinds();
  },
  methods: {
    async getWinds() {
      const response = await ProductService.fetchWinds();
      this.products = response.data.wind;
    },
  },
};
</script>
<style>

</style>