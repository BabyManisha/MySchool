<template>
    <div class="app">
      <div class="main-container container">
          <img class="contactimg"src="posts/ps01.jpg" alt="Post1">
          <img class="aboutimgs" src="posts/ps02.jpg" alt="Post2">
          <img class="contactimg"src="posts/ps03.jpg" alt="Post3">
          <img class="aboutimgs"src="posts/ps04.jpg" alt="Post4">
          <img class="contactimg"src="posts/ps05.jpg" alt="Post5">
      </div>
    </div>


    <!-- <div class="app">
      <div class="main-container container">
          Welcome {{userDetails.name}} !!
          <div class="row">
            <div class="col-sm-6 col-md-4">
              <div class="thumbnail">
                <img id="dimg" src="images/parents.png" alt="parent image">
                <div class="caption">
                  <h3>{{userDetails._id}}</h3>
                  <p>{{userDetails.username}}</p>
                  <p>{{userDetails.role}}</p>
                  <p>{{userDetails.phoneNumber}}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div> -->
</template>

<script>
export default {
  data () {
    return {
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