<template>
<div class="ui main container">
  <h1>Guitar</h1>
  <div v-for="guitar in products" v-bind:key="guitar._id">
    <p>{{ guitar.type }}</p>
    <div v-if="this.guitar.type === Accoustic" class="vertical segmented">
      <h1>{{guitar.type}}</h1>
        <p>{{ guitar.name }}</p>
        <p>{{ guitar.description }}</p>
    </div>
    <div v-else-if="this.guitar.type === Electric" class="vertical segmented">
      <h1>{{guitar.type}}</h1>
        <p>{{ guitar.name }}</p>
        <p>{{ guitar.description }}</p>
    </div>
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