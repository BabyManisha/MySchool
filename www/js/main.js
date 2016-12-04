var Vue = require('vue')
var VueResource = require('vue-resource');
var HomeVue = require('./home.vue')


Vue.use(VueResource);

Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;
Vue.http.options.xhr = {withCredentials: true};

// Add interceptors
//Vue.http.interceptors.push({})
// Vue.http.interceptors.push((request, next) => {
//   // Modify headers
//   request.headers = {
//   	'Access-Control-Allow-Origin': '*'
//     // 'x-gnana-tenant': 'tenant',
//     // 'x-gnana-username': 'username'
//   }
// });

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