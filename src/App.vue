<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/Home" href="#">Home</b-nav-item>
          <b-nav-item to="/People" href="#">People</b-nav-item>
          <b-nav-item to="/Films" href="#">Films</b-nav-item>
          <b-nav-item to="/Starships" href="#">Starships</b-nav-item>
          <b-nav-item to="/Vehicles" href="#">Vehicles</b-nav-item>
          <b-nav-item to="/Species" href="#">Species</b-nav-item>
          <b-nav-item to="/Planets" href="#">Planets</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
