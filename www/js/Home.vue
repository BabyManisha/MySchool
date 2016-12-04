<template>
<div id="homeapp" v-if="activeApp == ''">
  <nav id="nav-id" class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <a id="nobars" class="fa fa-bars fa-2x"></a>
      <div class="navbar-header">
          <a class="navbar-brand" href="#">Glim</a>
      </div>
    </div>
  </nav>

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
      <!-- <a href="images/parents.png" download 
                  @click="downloadImage('images/parents.png')">Download Image</a> -->
      <!-- <a href="images/parents.png"  
                  @click="downloadImage('file://images/parents.png')">Download Image</a> -->
  	</div>
  </div>

   <!-- <nav id="nav-id1" class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
          <a class="navbar-brand" href="#">All Rights 2016 @S4-Team</a>
      </div>
    </div>
  </nav> -->

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
        useractiveApp: '',
        // urlbase: 'http://52.220.231.225'
        urlbase: 'http://myschool.babymanisha.com',
        user: '',
        role: '',
        userRole: {'parent' : 'parents', 'faculty' : 'teachers', 'schooladmin' : 'admin'},
        userDetails: {},
        schoolDetails: {},
        posts: {},
    	}
  	},
    methods: {
      downloadImage: function(url){
        console.log(url);
        alert(url);
        cordova.plugins.photoLibrary.saveImage(url, 'My album', 
          function (resp) {
            console.log("Downloaded successfully", resp);
            alert("Downloaded successfully", resp);
          }, function (err) {
            console.log("Downloaded successfully", resp);
            alert("error occured", err);
          });
      },
  		switchApp: function(op, userop){
  			this.activeApp = op;
        if(userop){
          this.switchUserApp(userop);
        }else{
          this.switchUserApp('');
        }
  		},
      switchUserApp: function(op){
          this.useractiveApp = op;
      },
      whoami: function(){
        var self = this;
        self.$http.get(self.urlbase+'/whoami')
        .then(function(response) {
            console.log(response);
            self.user = response.data.username;
            if(response.role){
              self.role = self.userRole[response.role];
            }else{
              self.role = 'parents'
            }
            console.log(self.user);
            console.log(self.role);
            self.userDetails = response.data;
            console.log(self.userDetails);
            self.switchApp(self.role, 'userClass');
        }, function(error) {
            console.log(error);
            alert("no user found");
        });
      },
      logout: function(){
        var self = this;
        self.$http.get(self.urlbase+'/logout',{})
        .then(function(response) {
            console.log(response);
            if(response.status == 200){
              self.user = '';
              self.role = '';
              self.closeNav();
              self.switchApp('');
            }
        }, function(error) {
            console.log(error);
            console.log("no data found!!");
            self.user = '';
            self.role = '';
            self.closeNav();
            self.switchApp('');
        });
      },
      openNav: function(){
        document.getElementById("mySidenav").style.width = "150px";
        document.getElementById("nav-id").style.backgroundColor = "rgba(255,107,53,0.5)";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      },
      closeNav: function(){
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("nav-id").style.backgroundColor = "#ff6b35";
        document.body.style.backgroundColor = "white";
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