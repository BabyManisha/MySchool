<template>
    <div class="app">
      <div class="main-container container">
          <!-- Welcome {{userDetails.name}} !! -->
          
          <h3>Hub is Under Development!!</h3>

          <!-- 4:3 aspect ratio -->
          <div class="embed-responsive embed-responsive-4by3">
            <iframe width="500" height="360" src="https://www.youtube.com/embed/Z2Og-40HZZM?feature=player_embedded" frameborder="0" allowfullscreen></iframe>
          </div>

      </div>
    </div>
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