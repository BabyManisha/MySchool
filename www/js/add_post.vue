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
<div class="app">
<div class="main-container container">
<h1>Hello ! welcome to posts section</h1></div></div>
<div class="container">
  <form>
    <div class="form-group">
      <label for="Name">Name:</label>
      <input type="text" class="form-control" id="name" placeholder="Enter event name">
    </div>
    <div class="form-group">
      <label for="Details">Details:</label>
      <input type="text" class="form-control" id="details" placeholder="Enter details of events...">
    </div>
    <div class="form-group">
      <label for="Place">Place:</label>
      <input type="text" class="form-control" id="place" placeholder="Enter venue...">
    </div>
    <div class="form-group">

      <label for="Date">Date:</label>
      <input type="date" class="form-control" id="date" placeholder="select date">
        </div>
        <div class="form-group">

      <label for="Time">Time:</label>
      <input type="time" class="form-control" id="time" placeholder="select time">
        </div>
        <div class="form-group">

      <label for="Image">Images:</label>

      <input type="text" class="form-control" id="time" placeholder="select time">
        </div>


    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</div>

</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    switchApp: function(op){
      this.$parent.switchApp(op);
    }
  }
}

</script>


