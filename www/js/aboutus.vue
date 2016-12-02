<template>
<div id="homeapp">
  <nav id="nav-id" class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <a class="fa fa-arrow-circle-left fa-2x" @click="switchApp('')"></a>
      <div class="navbar-header">
          <a class="navbar-brand" href="#">Glim</a>
      </div>
    </div>
  </nav>

  <div class="app">
    <div class="main-container container">
        <img class="aboutimgs" src="images/aboutus1.jpg" alt="aboutus">
        <img class="aboutimgs"src="images/aboutus2.jpg" alt="aboutus">
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
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    switchApp: function(op){
      this.$parent.switchApp(op);
    }
  }
}
</script>