<template>
<div id="homeapp" v-if="activeApp == ''">
  <nav id="nav-id" class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
          <a class="navbar-brand" href="#">Glim</a>
      </div>
    </div>
  </nav>

  <!-- <div id="homehr"></div> -->

  <div class="app">
    <div class="main-container container">
      <button type="button" class="btn btn-warning" 
          @click="switchApp('parents')">
            <img id="bimg" alt="Brand" src="images/parents.png">
          </button>
      <button type="button" class="btn btn-warning" 
           @click="switchApp('faculty')">
             <img id="bimg" alt="Brand" src="images/teachers.png">
           </button>
      <button type="button" class="btn btn-warning" 
           @click="switchApp('admin')">
             <img id="bimg" alt="Brand" src="images/admin.png">
           </button>
      <button type="button" class="btn btn-warning" 
           @click="switchApp('aboutus')">
             <img id="bimg" alt="Brand" src="images/aboutus.png">
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

<div class="main-container container" v-if="activeApp != ''">
  <random-word v-if="activeApp == 'parents'"></random-word>
  <random-word v-if="activeApp == 'faculty'"></random-word>
  <sm v-if="activeApp == 'admin'"></sm>
  <sm v-if="activeApp == 'aboutus'"></sm>
</div>

</template>

<script>
var RandomWord = require('./random-word.vue')
var SM = require('./sm.vue')
export default {
    data () {
      	return {
    		activeApp: '',
    	}
  	},
    methods: {
  		switchApp: function(op){
  			this.activeApp = op;
  		}
  	},
	components: {
		'random-word': RandomWord,
		'sm' : SM
  	}
}
</script>