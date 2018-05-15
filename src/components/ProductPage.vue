<template>
<div>
  <div v-for="categories in types" v-bind:key="categories" class="ui vertical segment">
    <h1 class="ui header">{{ categories }}</h1>
    <div class="ui three column grid">
      <div v-for="items in getProducts(categories)" v-bind:key="items._id" class="column product-name">
        <img class="ui small image product-image" src="../assets/placeholder.jpeg">
        <h4>
          <router-link tag="a" :to="{path: base + '/' + items.name, query: {prod: items}}">
            {{ items.name }}
          </router-link>
        </h4>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'ProductPage',
  data() {
    return {
      base: this.$route.name,
    };
  },
  props: ['products', 'types'],
  methods: {
    getProducts(search) {
      return (_.filter(this.products, { type: search }));
    },
  },
};
</script>
<style>
.product-name {
  text-align: center;
}
.product-image {
  margin: auto;
}
a{
  color: black;
}
.ui .header {
  padding-bottom: 10px;
}
</style>
