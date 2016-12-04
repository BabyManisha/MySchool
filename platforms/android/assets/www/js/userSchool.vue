<template>
    <div class="app">
      <div class="main-container container">
          <!-- Welcome {{userDetails.name}} !! -->
          <div class="row">
            <div class="col-sm-6 col-md-4" v-for="ev in schoolEvents">
              <div class="thumbnail">
                <img v-bind:src="'schoolEvents/'+ev.images[0]" alt="...">
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
                        <img v-bind:src="'schoolEvents/'+im" alt="...">
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
      classEvents: this.$parent.classEvents,
      // schoolEvents: this.$parent.schoolEvents,
      posts: this.$parent.posts,
      schoolEvents: [
        {
          'name' : "Fresher's Party 2016",
          'details' : "Fresher's Day is a welcome party to newcomers and there is a need to be friendly and motivate juniors",
          'place' : "GoldenOak School Auditorium",
          'date' : "13-12-2016 10AM - 5PM",
          'images' : ['se1.jpg', 'se2.jpg', 'se6.jpg'],
          'videos' : ['SqYJYcSTUac']
        },
        {
          'name' : "teacher's Party 2016",
          'details' : "Teacher's Day is a Thank you party to Teachers for their effort towards students",
          'place' : "GoldenOak School Seminar Hall",
          'date' : "05-09-2016 10AM - 5PM",
          'images' : ['se3.jpg', 'se4.jpg', 'se5.jpg'],
          'videos' : ['MI01gcYDSWI']
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