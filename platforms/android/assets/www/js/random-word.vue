<template>
  <div>
    <h1>Hello SivaMani</h1>
    <h1>Random Word</h1> 
    <button id="btn-get-random-word" class="btn btn-info btn-lg btn-block" 
      @click="getRandomWord()">Get Random Word</button>
    <h2>{{randomWord}}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      randomWord: 'SM',
      dealsData: {}
    }
  },
  methods: {
    getRandomWord: function() {
      var self = this;
      self.randomWord = '...';
      self.$http.get('http://api.wordnik.com:80/v4/words.json/randomWord?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
      .then(function(response) {
          self.randomWord = response.data.word;
      }, function(error) {
          console.log(error);
      });
    }
  }
}
</script>