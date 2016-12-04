<template>
    <div class="app">
      <div class="main-container container">
          Welcome {{userDetails.name}} !!
          <div class="row">
            <div class="col-sm-6 col-md-4">
              <div class="thumbnail">
                <img id="dimg" src="images/parents.png" alt="parent image">
                <div class="caption">
                  <h3>{{userDetails._id}}</h3>
                  <p>{{userDetails.username}}</p>
                  <p>{{userDetails.role}}</p>
                  <p>{{userDetails.phoneNumber}}</p>
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
      userDetails: this.$parent.userDetails,
    }
  }
}
</script>