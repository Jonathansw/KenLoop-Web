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
          <div class="ui grid">
            <div class="row">
              <div class="eight wide column">
                <div class="ui form">
                  <div class="required field">
                  <label>First Name</label>
                  <input type="text">
                  </div>
                </div>           
              </div>
              <div class="eight wide column">
                <div class="ui form">
                  <div class="required field">
                  <label>First Name</label>
                  <input type="text">
                  </div>
                </div>           
              </div>
            </div>
            <div class="row">
              <div class="column">
                <div class="ui form">
                  <div class="required field">
                    <label>Email Address</label>
                    <input type="text">
                  </div>
                </div> 
              </div>
            </div>
            <div class="row">
              <div class="column">
                <div class="ui form">
                  <div class="required field">
                    <label>Comments/Questions</label>
                    <textarea></textarea>
                  </div>
                </div>
                <button class="ui button" type="submit">Submit</button>                
              </div>
            </div>                   
          </div>
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

export default {
  name: 'Contact',
  components: {
    GoogleMap,
  },
};
</script>
<style>
.ui.button {
  margin-top: 10px;
}

</style>