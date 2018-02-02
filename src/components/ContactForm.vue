<template>
  <form v-on:submit="checkForm">
    <div class="ui grid">
      <div class="row">
        <div class="eight wide column">
          <div class="ui form">
            <div class="required field" v-bind:class="{error: this.firstName.input}">
              <label>First Name</label>
              <input type="text" name="firstName" id="firstName" v-model="firstName.user">
            </div>
          </div>           
        </div>
        <div class="eight wide column">
          <div class="ui form">
            <div class="required field" v-bind:class="{error: this.firstName.input}">
              <label>Last Name</label>
              <input type="text" name="lastName" id="lastName" v-model="lastName.user">
            </div>
          </div>           
        </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="ui form">
              <div class="required field" v-bind:class="{error: this.firstName.input}">
                <label>Email Address</label>
                <input type="email" name="email" id="email" v-model="email.user">
              </div>
            </div> 
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="ui form">
              <div class="required field" v-bind:class="{error: this.message.input}">
                <label>Comments/Questions</label>
                <textarea v-model="message.user"></textarea>
            </div>
          </div>
          <input class="ui button" type="submit" value="Submit">                
        </div>
      </div>                   
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      firstName: { 
        user: null,
        input: false,
      },
      lastName: {
        user: null,
        input: false,
      },
      email: {
        user: null,
        input: false,
      },
      message: {
        user: null,
        input: false,
      },
    };
  },
  methods: {
    checkForm(e) {
      if(!this.firstName.user) this.firstName.input = true;
      if(!this.lastName.user) this.lastName.input = true;
      if(!this.message.user) this.message.input = true;
      if(!this.email.user) {
        this.email.input = true;
      } else if(!this.validEmail(this.email.user)) {
        this.email.input = true;
      }
      if(this.firstName.input === this.lastName.input === this.email.input === this.message.input === false) return true;
      e.preventDefault();
    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>

<style>

</style>
