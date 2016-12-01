var Vue = require('vue')
var VueResource = require('vue-resource');
var MainVue = require('./main.vue')


Vue.use(VueResource);

var vm = new Vue({
  el: 'body',
  data () {
    return {
    }
  },
  components: {
    'main-vue': MainVue
  }
});