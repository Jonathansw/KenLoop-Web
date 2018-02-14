import Api from './Api';

export default {
  fetchProducts() {
    return Api().get('/');
  },
};
