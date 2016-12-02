<template>
  <div>
    <h1>Hello SivaMani!!</h1>
    <button type="button" class="btn btn-info btn-lg btn-block" 
      @click="getData">Click to get Sample Data</button>
    <div class="row">
      <div class="col-sm-6 col-md-4" v-for="d in smData">
        <div class="thumbnail">
          <img id="dimg" v-bind:src="'images/'+d.imgs" alt="...">
          <div class="caption">
            <h3>{{d.name}}</h3>
            <p>{{d.category}}</p>
            <p>{{d.description}}</p>
            <button type="button" class="btn btn-default" @click="getData()">Details</button>
          </div>
        </div>
      </div>
    </div>

    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li>
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  data () {
    return {
    	smData: {}
    }
  },
  methods: {
  	getData: function(){
  		var self = this;
        $.getJSON("https://sheetsu.com/apis/v1.0/f30264ebda07", {} )
          .done(function( json ) {
            console.log( "JSON Data: " + json );
            self.smData = json;
            console.log(self.smData);
          })
          .fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });
  	}
  }
}
</script>