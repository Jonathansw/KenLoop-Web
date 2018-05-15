<template>
  <form v-on:submit.prevent="validateBeforeSubmit">
    <div class="ui grid">
      <div class="row">
        <div class="column">
          <div class="ui form">
            <div class="required field" v-bind:class="{error: errors.has('name')}">
              <label>Full Name</label>
              <input type="text" name="name" id="name" v-model="name" v-validate="'required|alpha_spaces'">
            </div>
          </div>           
        </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="ui form">
              <div class="required field" v-bind:class="{error: errors.has('email')}">
                <label>Email Address</label>
                <input type="email" name="email" id="email" v-model="email" v-validate="'required|email'">
              </div>
            </div> 
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="ui form">
              <div class="required field" v-bind:class="{error: errors.has('message')}">
                <label>Comments/Questions</label>
                <textarea name="message" id="message" v-model="message" v-validate="'required|min:10|max:500'"></textarea>
              </div>
            </div>
            <div class="ui success message" v-bind:class="{hidden: !this.formSubmmited}">
              <div class="header">Email Sent</div>
              <p>We will email you back as soon as possible</p>
            </div>
          <button class="ui button" type="submit" value="Submit" v-bind:disabled="errors.any()"> Submit </button>               
        </div>
      </div>                   
    </div>
  </form>
</template>

<script>
import ProductService from '../../services/ProductService';

export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      formSubmmited: false,
    };
  },
  methods: {
    action() {
      const output = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      ProductService.sendEmail(output);
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.action();
          this.formSubmmited = true;
          this.name = '';
          this.email = '';
          this.message = '';
          this.$validator.reset();
          return;
        }
        this.formSubmmited = false;
      });
    },
  },
};
</script>

<style>

</style>
