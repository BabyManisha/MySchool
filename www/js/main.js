var Vue = require('vue')
var VueResource = require('vue-resource');
var MainVue = require('./main.vue')
var HomeVue = require('./Home.vue')


Vue.use(VueResource);

var vm = new Vue({
  el: 'body',
  data () {
    return {
    }
  },
  components: {
    'main-vue': MainVue,
    'home-vue': HomeVue
  }
});