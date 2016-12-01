<template>
  <div class="app">
    <div class="main-container container" v-if="activeApp == ''">
      <button type="button" class="btn btn-warning btn-lg btn-block" 
          @click="switchApp('parents')">Parents / Students</button>
      <button type="button" class="btn btn-warning btn-lg btn-block" 
           @click="switchApp('faculty')">Faculty</button>
      <button type="button" class="btn btn-warning btn-lg btn-block" 
           @click="switchApp('admin')">Admin</button>
  	</div>
  	<div class="main-container container" v-if="activeApp != ''">
      <random-word v-if="activeApp == 'parents'"></random-word>
      <sm v-if="activeApp == 'admin'"></sm>
  	</div>
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