<template>
<div class="ui container">
  <h1>Products</h1>
  <div class="ui stackable grid">
    <div class="three column row">
      <div class="column">
        <div class="ui fluid card">
          <img class="ui image" src="../assets/guitar.jpeg">
          <div class="content">
            <div class="header">Guitars</div>
          </div>
          <router-link to="/guitar" tag='button' class="ui button bottom attached">Find More</router-link>
        </div>
      </div>
      <div class="column">
        <div class="ui fluid card">
          <img class="ui image" src="../assets/drums.jpeg">
          <div class="content">
            <div class="header">Drums</div>
          </div>
          <router-link to="/" tag='button' class="ui button bottom attached">Find More</router-link>
        </div>
      </div>
      <div class="column">
        <div class="ui fluid card">
          <img class="ui image" src="../assets/piano.jpeg">
          <div class="content">
            <div class="header">Pianos</div>
          </div>
          <router-link to="/" tag='button' class="ui button bottom attached">Find More</router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style>

</style>