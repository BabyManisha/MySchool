<template>
<div id="homeapp" v-if="activeApp == ''">
  <nav id="nav-id" class="navbar navbar-inverse">
    <div class="container-fluid">
      <a id="nobars" class="fa fa-bars fa-2x"></a>
      <div class="navbar-header">
          <a class="navbar-brand" href="#">Glim</a>
      </div>
    </div>
  </nav>

  <!-- <div id="homehr"></div> -->

  <div class="app">
    <div class="main-container container">
      <button type="button" class="btn btn-warning" 
          @click="switchApp('login')">
            <img id="bimg" alt="Brand" src="images/login1.png">
          </button>
      <button type="button" class="btn btn-warning" 
           @click="switchApp('aboutus')">
             <img id="bimg" alt="Brand" src="images/aboutus.png">
           </button>
      <button type="button" class="btn btn-warning" 
           @click="switchApp('contactus')">
             <img id="bimg" alt="Brand" src="images/contactus.png">
           </button>
      <button type="button" class="btn btn-warning" 
           @click="switchApp('testing')">
             <img id="bimg" alt="Brand" src="images/logo.png">
           </button>
      
  	</div>
  </div>

   <nav id="nav-id1" class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
          <a class="navbar-brand" href="#">All Rights 2016 @S4-Team</a>
      </div>
    </div>
  </nav>

</div>

<div v-if="activeApp != ''">
  <login-vue v-if="activeApp == 'login'"></login-vue>
  <parents-vue v-if="activeApp == 'parents'"></parents-vue>
  <teachers-vue v-if="activeApp == 'teachers'"></teachers-vue>
  <admin-vue v-if="activeApp == 'admin'"></admin-vue>
  <aboutus-vue v-if="activeApp == 'aboutus'"></aboutus-vue>
  <contactus-vue v-if="activeApp == 'contactus'"></contactus-vue>
  <testing-vue v-if="activeApp == 'testing'"></testing-vue>
</div>
</template>

<script>
var Login = require('./login.vue')
var Parents = require('./parents.vue')
var Teachers = require('./random-word.vue')
var Admin = require('./admin.vue')
var Aboutus = require('./aboutus.vue')
var Contactus = require('./contactus.vue')
var Testing = require('./main.vue')
export default {
    data () {
      	return {
    		activeApp: '',
        urlbase: 'https://deals.shivaprasanth.info'
    	}
  	},
    methods: {
  		switchApp: function(op){
  			this.activeApp = op;
  		}
  	},
	 components: {
    'login-vue': Login,
		'parents-vue': Parents,
    'teachers-vue': Teachers,
    'admin-vue': Admin,
    'aboutus-vue': Aboutus,
    'contactus-vue': Contactus,
    'testing-vue': Testing
  	}
}
</script>