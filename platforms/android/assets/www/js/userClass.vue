<template>
    <div class="app">
      <div class="main-container container">
          <!-- Welcome {{userDetails.name}} !! -->
          <div class="row" v-if="eventDetails == ''">
            <div class="col-sm-6 col-md-4" v-for="ev in classEvents" 
              v-on:click="showDetails(ev)">
              <!-- <div class="thumbnail">
                <img class="eventimg" v-bind:src="'classEvents/'+ev.images[0]" alt="...">
                <div class="caption">
                  <b class="list-group-item list-group-item-info">{{ev.name}}</b>
                  <p><b> Description </b>{{ev.details}}</p>
                  <p><b> Venue </b>{{ev.place}}</p>
                  <p><b> Date and Time </b>{{ev.date}}</p>
                  <p><a href="#" class="btn btn-primary btn-block" role="button"
                    v-on:click="showDetails(ev)">Details</a></p>
                </div>
              </div> -->

              <div class="panel panel-primary">
                <div class="panel-heading">{{ev.name}}</div>
                <div class="panel-body">
                  <img class="eventimg" v-bind:src="'classEvents/'+ev.images[0]" alt="...">
                </div>
              </div>

            </div>
          </div>


          <div class="row" v-if="eventDetails != ''">
            <div class="panel panel-primary">
              <div class="panel-heading"><b>{{eventDetails.name}}</b></div>
              <div class="panel-body">
                <p><div class="embed-responsive embed-responsive-4by3">
                      <iframe width="500" height="360" 
                      v-bind:src="'https://www.youtube.com/embed/'+eventDetails.videos[0]+'?feature=player_embedded'" frameborder="0" allowfullscreen></iframe>
                    </div></p>
              </div>

              <ul class="list-group">
                <input class="list-group-item" v-model="eventDetails.details" 
                v-bind:contenteditable="detailsEditable" />
                <input class="list-group-item"  v-model="eventDetails.place" 
                v-bind:contenteditable="detailsEditable" />
                <input class="list-group-item" v-model="eventDetails.date"  
                v-bind:contenteditable="detailsEditable" />
              </ul>

              <ul class="list-group">
                <li class="list-group-item" v-for="im in eventDetails.images">
                <img class="eventimg" v-bind:src="'classEvents/'+im" 
                      alt="First slide"></li>
              </ul>

              <p><a href="#" class="btn btn-primary btn-block" role="button"
                v-on:click="updateDetails()">Update</a></p>

              <p><a href="#" class="btn btn-primary btn-block" role="button"
                v-on:click="goBack()">Back</a></p>
            </div>
          </div>

          <div class="add-new-event-icon" v-if="detailsEditable">
            <i class="fa fa-plus-square fa-4x" aria-hidden="true"></i>
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
      eventDetails: this.$parent.eventDetails,
      detailsEditable: false,
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
          'id' : 'ce1',
          'name' : "10th Class Group discussion",
          'details' : "Classwise group Discussion Event",
          'place' : "GoldenOak School 10th class",
          'date' : "04-12-2016 10AM - 5PM",
          'images' : ['ce1.jpg', 'ce2.jpg', 'ce3.jpg', 'ce7.jpg'],
          'currentImage':'ce1.jpg',
          'videos' : ['tUcEwvjckk0']
        },
        {
          'id' : 'ce2',
          'name' : "Technical Seminar",
          'details' : "All about latest technology",
          'place' : "GoldenOak School Seminar Hall",
          'date' : "02-12-2016 10AM - 5PM",
          'images' : ['ce4.jpg', 'ce5.jpg', 'ce6.jpg', 'ce8.jpg'],
          'currentImage':'ce4.jpg',
          'videos' : ['5CRGKGHcrKA']
        }
      ]
    }
  },
  created: function(){
    this.detailsEditable = this.role != 'parent' ? true : false;
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
    },
    showDetails: function(ev){
      this.eventDetails = ev;
    },
    goBack: function(){
      this.eventDetails = '';
    },
    updateDetails: function(){
      console.log(this.eventDetails);
    }
  }
}
</script>