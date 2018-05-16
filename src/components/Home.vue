<template>
<div class="ui main container">
  <div class="ui huge dividing header">Products</div>
  <div class="ui two stackable cards">
    <div v-for="i in (1, navbars.length - 1)" v-bind:key="navbars[i].name" v-on:mouseover="navbars[i].hover = true;" 
    v-on:mouseleave="navbars[i].hover = false" class="card">
      <div class="blurring dimmable image" v-bind:class="{dimmed: navbars[i].hover}">
        <div class="ui inverted dimmer" v-bind:class="{active: navbars[i].hover}">
          <div class="content">
            <div class="center">
              <router-link tag="div" class="ui inverted button" :to="{path: navbars[i].path}" v-on:click.native="setNav(navbars[i].name)">
                {{navbars[i].name}}
              </router-link>
            </div>
          </div>
        </div>
        <img v-if="navbars[i].name === 'Guitar'" src="../assets/guitar.jpeg">
        <img v-else-if="navbars[i].name === 'Wind Instruments'" src="../assets/wind.jpeg">
        <img v-else-if="navbars[i].name === 'Drums Outfit & Percussions'" src="../assets/drums.jpeg">
        <img v-else-if="navbars[i].name === 'Bags & Cases'" src="../assets/bag.jpeg"> 
      </div>
      <div class="content">
        <h3>{{navbars[i].name}}</h3>
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
    setNav(item) {
      this.navbars.forEach((tabs) => {
        const tab = tabs;
        if (tab.name === item) {
          tab.clicked = true;
          tab.hover = false;
        } else {
          tab.clicked = false;
        }
      });
    },
  },

};
</script>
<style>
.ui.two.stackable.cards {
  margin-top: 20px;
}

</style>