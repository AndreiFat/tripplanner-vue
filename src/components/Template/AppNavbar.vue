<script>
export default {
  name: 'AppNavbar',
  components: {}
}
</script>

<template>

  <nav id="top" class="navbar navbar-expand-lg bg-white fixed-top shadow-sm">
    <div class="container d-flex">
      <!-- Template toggler button -->
      <b-button v-b-toggle.navbarNav
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                class="d-lg-none d-sm-inline-block custom-outline-button"
                data-target="#navbarNav"
                data-toggle="collapse"
                type="button"
      >
        <b-icon icon="list"></b-icon>
      </b-button>

      <div class="d-flex justify-content-end">
        <a class="navbar-brand d-sm-none d-block" href="/"><img alt="" height="32px" src="@/assets/Logo.svg"></a>
      </div>

      <b-collapse id="navbarNav" class="collapse navbar-collapse justify-content-start ml-4">
        <ul class="navbar-nav">
          <li class="nav-item text-center mr-md-4 m-0 my-auto">
            <a class="nav-link" data-section="connect" href="/">Connect</a>
          </li>
          <li class="nav-item text-center m-0 my-auto">
            <a class="nav-link text-primary" data-section="facebook" href="/"><i
                class="fa-brands fa-xl fa-facebook"></i></a>
          </li>
        </ul>
      </b-collapse>
      <b-collapse id="navbarNav" class="collapse navbar-collapse justify-content-end ml-4">
        <ul class="navbar-nav">
          <li class="nav-item text-center mr-md-4 m-0 my-auto">
            <a class="nav-link" data-section="trips" href="/">View Trips</a>
          </li>
          <li class="nav-item text-center mr-md-4 m-0 my-auto">
            <a class="nav-link" data-section="about" href="/">About</a>
          </li>
          <li class="nav-item text-center mr-md-4 m-0 my-auto">
            <a class="nav-link" data-section="contact" href="/">Home</a>
          </li>
        </ul>
      </b-collapse>

      <a class="navbar-brand d-sm-block d-none" href="/"><img alt="" height="42px" src="@/assets/Logo.svg"></a>
    </div>
  </nav>

</template>

<style scoped>
.custom-outline-button {
  border: 1px solid #dcdcdc;
  color: #333;
  background-color: transparent;
}

.custom-outline-button:hover {
  background-color: #f8f9fa;
}

.custom-outline-button:active {
  color: #333 !important;
  background-color: #f8f9fa !important;
  border-color: #dcdcdc !important;
}
</style>