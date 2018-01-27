<template>
  <div class="ui divided item">
    <div class="item">
      <google-map name="homeLoc"></google-map>
      <div class="middle aligned content">
        <div class="ui big very relaxed list">
          <div class="item">
            <i class="users icon"></i>
              <div class="content">
                KDJFlk
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from './GoogleMap';

export default {
  name: 'Contact',
  components: {
    GoogleMap,
  },
};
</script>
<style>

</style>