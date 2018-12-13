<template>
  <div id="nav">
   <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">TGIF</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li><a href="home.html">Home</a></li>
          <li class="dropdown active">
            <a class="dropdown-toggle" data-toggle="dropdown">Congress 113 <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="house-data.html">House</a></li>
              <li class="active"><a href="senate-data.html">Senate</a></li>

            </ul>
          </li>
          <li class="dropdown ">
            <a class="dropdown-toggle" data-toggle="dropdown">Attendance <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="house-attendance.html">House</a></li>
              <li><a href="senate-attendance.html">Senate</a></li>

            </ul>
          </li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown">Party Loyalty <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="house-loyalty.html">House</a></li>
              <li><a href="senate-loyalty.html">Senate</a></li>

            </ul>
          </li>
        </ul>
        <div class="nav navbar-nav navbar-right">
          <a id="msg-glyph" class="navbar-text" href="#">info@tgif.net <span class="glyphicon glyphicon-envelope "></span></a>
        </div>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
