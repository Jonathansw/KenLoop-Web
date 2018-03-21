<template>
<div class="ui main container">
  <div v-for="categories in types" v-bind:key="categories" class="ui vertical segment">
    <h1>{{ categories }}</h1>
    <div class="ui three column very relaxed grid">
      <div v-for="guitar in getGuitars(categories)" v-bind:key="guitar._id" class="column">
        <p>{{ guitar.name }}</p>
        <p>{{ guitar.description }}</p>
      </div>
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
    getGuitars(search) {
      return (_.filter(this.products, {type: search}));
    }
  },
};
</script>
<style>

</style>