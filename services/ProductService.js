import Api from './Api';

export default {
  fetchGuitars() {
    return Api().get('/guitar');
  },
  fetchBags() {
    return Api().get('/bag');
  },
  fetchWinds() {
    return Api().get('/wind');
  },
  fetchPercussions() {
    return Api().get('/percussion');
  },
  sendEmail(params) {
    return Api().post('/contact', params);
  },
};
