<template>
  <div class="google-map" v-bind:id="mapName"></div>
</template>

<script>
export default {
  name: 'google-map',
  props: ['name'],
  data() {
    return {
      mapName: this.name + '-map',
      markerCoord: [
        {
          latitude: 25.0340,
          longitude: 121.5645,
        },
      ],
    };
  },
  mounted() {
    const element = document.getElementById(this.mapName);
    const option = {
      zoom: 16,
      center: new google.maps.LatLng(25.0330, 121.5654),
    };
    const map = new google.maps.Map(element, option);
    this.markerCoord.forEach((coord) => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({
        position,
        map,
      });
    });
  },
};
</script>
<style scoped>
.google-map {
  width: 100%;
  height: 500px;
  margin: 100px auto;
  background: gray;
}
</style>