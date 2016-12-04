<template>
    <div class="app">
      <div class="main-container container">
          <!-- Welcome {{userDetails.name}} !! -->
          <div class="row">
            <div class="col-sm-6 col-md-4" v-for="ev in classEvents">
              <div class="thumbnail">
                <img v-bind:src="'classEvents/'+ev.images[0]" alt="...">
                <div class="caption">
                  <h3>{{ev.name}}</h3>
                  <p><b> Description </b>{{ev.details}}</p>
                  <p><b> Venue </b>{{ev.place}}</p>
                  <p><b> Date and Time </b>{{ev.date}}</p>

                  <h3>
                    <div class="embed-responsive embed-responsive-4by3">
                      <iframe width="500" height="360" 
                      v-bind:src="'https://www.youtube.com/embed/'+ev.videos[0]+'?feature=player_embedded'" frameborder="0" allowfullscreen></iframe>
                    </div>
                  </h3>
                  <h3> Gallery </h3>
                  <div class="row">
                    <div class="col-xs-6 col-md-3" v-for="im in ev.images">
                      <a href="#" class="thumbnail">
                        <img v-bind:src="'classEvents/'+im" alt="...">
                      </a>
                    </div>
                  </div>

                  <p><a href="#" class="btn btn-primary" role="button">Details</a></p>
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
      useractiveApp: this.$parent.useractiveApp,
      urlbase: this.$parent.urlbase,
      user: this.$parent.user,
      role: this.$parent.role,
      userDetails: this.$parent.userDetails,
      classDetails: this.$parent.userDetails,
      schoolDetails: this.$parent.schoolDetails,
      // classEvents: this.$parent.classEvents,
      schoolEvents: this.$parent.schoolEvents,
      posts: this.$parent.posts,
      classEvents : [
        {
          'name' : "10th Class Group discussion",
          'details' : "Classwise group Discussion Event",
          'place' : "GoldenOak School 10th class",
          'date' : "04-12-2016 10AM - 5PM",
          'images' : ['ce1.jpg', 'ce2.jpg', 'ce3.jpg', 'ce7.jpg'],
          'videos' : ['tUcEwvjckk0']
        },
        {
          'name' : "Technical Seminar",
          'details' : "All about latest technology",
          'place' : "GoldenOak School Seminar Hall",
          'date' : "02-12-2016 10AM - 5PM",
          'images' : ['ce4.jpg', 'ce5.jpg', 'ce6.jpg', 'ce8.jpg'],
          'videos' : ['5CRGKGHcrKA']
        }
      ]
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