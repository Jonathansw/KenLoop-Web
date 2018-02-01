<template>
<div class="ui main container">
  <h1>Products</h1>
  <div class="ui stackable grid">
    <div class="four column row">
      <div v-for="i in (1, navbars.length - 1)" v-bind:key="navbars[i].name" class="column">
        <div class="ui card">
          <div v-on:mouseover="mouseOver(i)" class="image">
            <img v-if="navbars[i].name === 'Guitar'" src="../assets/guitar.jpeg">
            <img v-else-if="navbars[i].name === 'Wind Instruments'" src="../assets/wind.jpeg">
            <img v-else-if="navbars[i].name === 'Drums Outfit & Percussions'" src="../assets/drums.jpeg">
            <img v-else-if="navbars[i].name === 'Bags & Cases'" src="../assets/bag.jpeg"> 
          </div>
          <div class="content">
            <span class="header">{{navbars[i].name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  props: ['navbars'],
  methods: {
    mouseOver(input) {
      console.log('moused over', input);
    }
  },
};
</script>
<style>
.button.ui.button.bottom.attahced {
  margin: 0 0 !important;
  width: auto !important;
}

</style>