<template>
  <div>
    <button type="button" class="btn btn-primary" @click="switchApp('')">
      <span class="fa fa-arrow-circle-left" aria-hidden="true"> Go Back</span>
    </button>
    <h1>Hello SivaMani</h1>
    <h1>Random Word</h1> 
    <button id="btn-get-random-word" class="btn btn-info btn-lg btn-block" 
      @click="getRandomWord">Get Random Word</button>
    <p>{{randomWord}}</p>
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
    switchApp: function(op){
      this.$parent.switchApp(op);
    },
    getRandomWord: function() {
        var self = this;
        self.randomWord = '...';

        $.getJSON('http://api.wordnik.com:80/v4/words.json/randomWord?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5', {} )
          .done(function( json ) {
            self.randomWord = json.word;
            console.log( "JSON Data: " + json );
          })
          .fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });


        // self.$http.get('https://script.googleusercontent.com/macros/echo?user_content_key=pux9Wen6h7MQZVWZDYlDb-QMDtZEUmoiBqwlqN3vD2RW-S5jh_1M5SsLT8X8kKxYoEhvzHCgG03boobi-0hM63Rb5CWAnGShOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKp4Z0U-PmE6DZDs2T9b3Lxs3VObM1r8CkCvMjivNe3nq5pmdfpR_nUbUhtg7XNZ-x_cKiW3k6MDkf31SIMZH6H4k&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx')
        // .then(function(response) {
        //   self.dealsData = response.data['Sheet1'];
        // }, function(error) {
        //   alert(error);
        // });

        // self.$http.get("https://sheetsu.com/apis/v1.0/f30264ebda07")
        // .then(function(response){
        //     console.log(response);
        //     self.dealsData = response.data;
        //     console.log(self.dealsData);
        // }, function(error){
        //     alert("Some Error occured in Api", error);
        // });
    }
  }
}
</script>