<template>
  <div id="mySidenav" class="sidenav" v-if="activeApp != ''">
    <a href="javascript:void(0)" class="closebtn fa fa-times" @click="closeNav()"></a>
    <a href="#">Home</a>
    <a href="#">Class</a>
    <a href="#">School</a>
    <a href="#">Hub</a>
    <a href="#">Posts</a>
    <a><span @click="logout()">Logout</span></a>
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
    <div class="app">
      <div class="main-container container">
          Welcome Teacher !!
          <div class="row">
            <div class="col-sm-6 col-md-4">
              <div class="thumbnail">
                <img id="dimg" src="images/parents.png" alt="parent image">
                <div class="caption">
                  <h3>{{userDetails.name}}</h3>
                  <p>{{userDetails.username}}</p>
                  <p>{{userDetails._id}}</p>
                  <p>{{userDetails.phoneNumber}}</p>
                  <a href="images/parents.png" download>Download Image</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeApp: this.$parent.activeApp,
      urlbase: this.$parent.urlbase,
      user: this.$parent.user,
      role: this.$parent.role,
      userDetails: this.$parent.userDetails
    }
  },
  created: function(){
    console.log(this.userDetails);
  },
  methods: {
    switchApp: function(op){
      this.$parent.switchApp(op);
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
  }
}
</script>