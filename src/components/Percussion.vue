<template>
<div class="ui main container">
  <h1>Drums</h1>
  <div v-for="percussion in products" v-bind:key="percussion._id">
    <p>{{percussion.name}}</p>
    <p>{{percussion.size}}</p>
    <p>{{percussion.description}}</p>
    <p>{{percussion.type}}</p>
  </div>

</div>
</template>

<script>
import ProductService from '../../services/ProductService';

export default {
  name: 'Percussion',
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getPercussions();
  },
  methods: {
    async getPercussions() {
      const response = await ProductService.fetchPercussions();
      this.products = response.data.percussion;
    }
  }
};
</script>
<style>

</style>