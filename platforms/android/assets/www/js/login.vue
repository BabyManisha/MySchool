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

  <div id="login-box" class="app">
    <h3>Sign in to Your Account</h3>
    <div class="main-container container">
      <form v-on:enter="checkLogin()">
        <div class="form-group">
          <input type="text" id="username" v-model="username" 
            placeholder="Username" class="form-control">
        </div>
        <div class="form-group">
          <input type="password" id="username" v-model="password" 
            class="form-control" placeholder="Password">
        </div>
        <button type="button" class="btn btn-waring btn-lg btn-block" @click="checkLogin()">Login</button>
      </form>
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
      username: '',
      password: '',
      userRole:'',
      urlbase: this.$parent.urlbase,
      user: this.$parent.user,
      role: this.$parent.role,
      userDetails: this.$parent.userDetails
    }
  },
  created: function(){
    var self = this, tmUser = localStorage.getItem("user");
    if(localStorage != undefined && tmUser != "undefined" && tmUser != null){
      self.user = tmUser;
      alert(self.user);
      self.whoami();
      return;
    }
  },
  methods: {
    switchApp: function(op){
      this.$parent.switchApp(op);
    },
    checkFields: function(){
      var self = this;
      if(self.username && self.password){
        return true;
      }else{
        return false;
      }
    },
    whoami: function(){
      this.$parent.whoami();
    },
    checkLogin: function() {
      var self = this;
      if(self.checkFields()){
        self.$http.post(self.urlbase+'/login', 
          { 'username': self.username, 
            'password': self.password,
            'school_id': 'admin'})
        .then(function(response) {
            console.log(response);
            if(response.data.success || response.data.loggedin){
              self.whoami();
            }else{
              self.username = '';
              self.password = '';
              console.log("Login Failed Due To Invalid Details");
              alert("Incorrect Username and Password");
            }
        }, function(error) {
            console.log(error);
            console.log("no data found!!");
            alert("Incorrect Username and Password");
        });
      }else{
        alert("Please Provide Valid Username and Password");
      }
    }
  }
}
</script>