<template>
<div id="homeapp">
  <nav id="nav-id" class="navbar navbar-inverse">
    <div class="container-fluid">
      <a class="fa fa-arrow-circle-left fa-2x" @click="switchApp('')"></a>
      <div class="navbar-header">
          <a class="navbar-brand" href="#">Glim</a>
      </div>
    </div>
  </nav>

  <div class="app">
    <div class="main-container container">
        <div class="form-group">
          <input type="text" id="username" v-model="username" 
            placeholder="Username" class="form-control">
        </div>
        <div class="form-group">
          <input type="password" id="username" v-model="password" 
            class="form-control" placeholder="Password">
        </div>
        <button type="button" class="btn btn-waring" @click="checkLogin()">Login</button>
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
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      userRole:'',
      urlbase: 'http://localhost:8000'
    }
  },
  methods: {
    switchApp: function(op){
      this.$parent.switchApp(op);
    },
    checkLogin: function() {
        var self = this;
        $.get(urlbase+'/login', {} )
          .done(function( data ) {
            console.log("Login Successfully");
            console.log( "JSON Data: " + data );
            self.userRole = data.userRole;
          })
          .fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });
    }
  }
}
</script>