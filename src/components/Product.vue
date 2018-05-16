<template>
  <div class="ui main container">
    <div class="ui info message">
      <p>Contact for more information about products and product specifications.</p>
    </div>
    <h1>{{ item.name }}</h1>
    <div class="ui grid">
      <div class="five wide column">
        <img class="ui medium image" src="../assets/placeholder.jpeg">
      </div>
      <div class="eleven wide column">
        <div class="ui raised padded text container segment">
          <pre>{{ item.description.split(",").join("\n") }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Product',
  data() {
    return {
      item: {},
    };
  },
  beforeMount() {
    this.temp();
  },
  methods: {
    temp() {
      this.item = this.$route.query.prod;
    },
  },
};
</script>
<style>

</style>
