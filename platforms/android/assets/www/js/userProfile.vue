<template>
    <div class="app">
      <div class="main-container container">
          <div class="row">
            <div class="col-sm-6 col-md-4">
              <div class="profile thumbnail">
                <img id="dimg" src="images/user.png" alt="user image">
                <div class="caption">
                  <!-- <h3>{{userDetails.name}}</h3>
                  <p> <b>UserName : </b>{{userDetails.username}}</p>
                  <p> <b>Role : </b>{{userDetails.role}}</p>
                  <p> <b>Email : </b>{{userDetails._id}}</p>
                  <p> <b>Mobile : </b>{{userDetails.phoneNumber}}</p> -->
                  <ul class="list-group">
                    <a class="list-group-item list-group-item-primary disabled">
                      <h3 v-text="userDetails.name | uppercase"></h3></a>
                    <a class="list-group-item list-group-item-info"><p> <b>UserName : </b>{{userDetails.username}}</p></a>
                    <a class="list-group-item list-group-item-warning"><p> <b>Role : </b>{{userDetails.role}}</p></a>
                    <a class="list-group-item list-group-item-danger"><p> <b>Email : </b>{{userDetails._id}}</p></a>
                    <a class="list-group-item list-group-item-success"><p> <b>Mobile : </b>{{userDetails.phoneNumber}}</p></a>
                  </ul>
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