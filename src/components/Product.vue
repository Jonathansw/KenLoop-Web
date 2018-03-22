<template>
<div>
  <div v-for="categories in types" v-bind:key="categories" class="ui vertical segment">
    <h1>{{ categories }}</h1>
    <div class="ui three column grid">
      <div v-for="guitar in getProducts(categories)" v-bind:key="guitar._id" class="column">
        <p>{{ guitar.name }}</p>
        <p>{{ guitar.description }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Product',
  props: ['products', 'types'],
  methods: {
    getProducts(search) {
      return (_.filter(this.products, {type: search}));
    }
  },
}
</script>
<style>

</style>
