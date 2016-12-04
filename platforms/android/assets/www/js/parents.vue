<template>
  <div id="mySidenav" class="sidenav" v-if="activeApp != ''">
    <a href="javascript:void(0)" class="closebtn fa fa-times" @click="closeNav()"></a>
    <a v-for="(ky, vl) in userApps" @click="switchUserApp(ky)">{{vl}}</a>
    <a @click="logout()">Logout</a>
  </div>

  <div id="homeapp">
    <nav id="nav-id" class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <a class="fa fa-bars fa-2x" @click="openNav()"></a>
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Glim</a>
        </div>
      </div>
    </nav>
    <div v-if="useractiveApp != ''">
      <user-class :class="useractiveApp" v-if="useractiveApp == 'userClass'"></user-class>
      <user-school :class="useractiveApp" v-if="useractiveApp == 'userSchool'"></user-school>
      <user-hub :class="useractiveApp" v-if="useractiveApp == 'userHub'"></user-hub>
      <user-posts :class="useractiveApp" v-if="useractiveApp == 'userPosts'"></user-posts>
      <user-profile :class="useractiveApp" v-if="useractiveApp == 'userProfile'"></user-profile>
    </div>
  </div>
</template>

<script>
var userClass = require('./userClass.vue')
var userSchool = require('./userSchool.vue')
var userHub = require('./userHub.vue')
var userPosts = require('./userPosts.vue')
var userProfile = require('./userProfile.vue')
export default {
  data () {
    return {
      userApps: {'userClass' : 'Home', 
                  'userSchool': 'School', 
                  'userHub' : 'Hub', 
                  'userPosts' : 'Posts', 
                  'userProfile' : 'Profile'},
      activeApp: this.$parent.activeApp,
      useractiveApp: this.$parent.useractiveApp,
      urlbase: this.$parent.urlbase,
      user: this.$parent.user,
      role: this.$parent.role,
      userDetails: this.$parent.userDetails,
      schoolDetails: this.$parent.schoolDetails,
      posts: this.$parent.posts
    }
  },
  methods: {
    switchApp: function(op){
      this.$parent.switchApp(op);
    },
    switchUserApp: function(op){
      console.log(op);
      this.$parent.switchUserApp(op);
      this.$parent.closeNav();
      console.log(this.useractiveApp);
      this.useractiveApp = this.$parent.useractiveApp;
    },
    logout: function(){
      this.$parent.logout();
    },
    openNav: function(){
      this.$parent.openNav();
    },
    closeNav: function(){
      this.$parent.closeNav();
    }
  },
  components: {
    'user-class': userClass,
    'user-school': userSchool,
    'user-hub': userHub,
    'user-posts': userPosts,
    'user-profile': userProfile,
  }
}
</script>