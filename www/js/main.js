var Vue = require('vue')
var VueResource = require('vue-resource');
var HomeVue = require('./home.vue')


Vue.use(VueResource);

var vm = new Vue({
  el: 'body',
  data () {
    return {
    }
  },
  components: {
    'home-vue': HomeVue
  }
});