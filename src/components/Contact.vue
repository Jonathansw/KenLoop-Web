<template>
  <div class="ui main container">
    <div class="ui vertical stripe segement">
      <div class="ui grid stackable container">
        <div class="six wide column">
          <div class="ui grid">
            <div class="row">
              <div class="column">
                <h3>Address</h3>
                <p>Taipei 101, No. 7, Section 5, Xinyi Road, Xinyi District, Taipei City, Taiwan</p>
              </div>
            </div>
            <div class="row">
              <div class="column">
                <h3>Phone</h3>
                <p>(123) 456-7899</p>
              </div>
            </div>
            <div class="row">
              <div class="column">
                <h3>Email</h3>
                <p>Tempemail@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="ten wide column">
          <contact-form></contact-form>
        </div>
      </div>
    </div>
    <div class="ui vertical stripe segement">
      <google-map name="homeLoc"></google-map>
    </div>
  </div>
</template>

<script>
import GoogleMap from './GoogleMap';
import ContactForm from './ContactForm';

export default {
  name: 'Contact',
  components: {
    GoogleMap,
    ContactForm,
  },
};
</script>
<style>
.ui.button {
  margin-top: 10px;
}

</style>