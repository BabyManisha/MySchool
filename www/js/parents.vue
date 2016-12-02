<template>

  <div v-if="activeApp != ''">
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn fa fa-times" @click="closeNav()"></a>
      <a href="#">Home</a>
      <a href="#">Common</a>
      <a href="#">Hub</a>
      <a href="#">Posts</a>
      <a><span @click="logout()">Logout</span></a>
    </div>
  </div>

  <div id="homeapp">
    <nav id="nav-id" class="navbar navbar-inverse">
      <div class="container-fluid">
        <a class="fa fa-bars fa-2x" @click="openNav()"></a>
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Glim</a>
        </div>
      </div>
    </nav>
    <div class="app">
      <div class="main-container container">
          Welcome Parents !!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeApp: this.$parent.activeApp
    }
  },
  methods: {
    switchApp: function(op){
      this.$parent.switchApp(op);
    },
    logout: function(){
      var self = this;
      self.$http.post(self.urlbase+'/logout',{})
      .then(function(response) {
          console.log(response);
          self.closeNav();
          self.switchApp('');
      }, function(error) {
          console.log(error);
          console.log("no data found!!");
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
  }
}
</script>