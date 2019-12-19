<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Home">Home</router-link>
      |
      <router-link to="/People">People</router-link>
      |
      <router-link to="/Films">Films</router-link>
      |
      <router-link to="/Starships">Starships</router-link>
      |
      <router-link to="/Vehicles">Vehicles</router-link>
      |
      <router-link to="/Species">Species</router-link>
      |
      <router-link to="/Planets">Planets</router-link>
    </div>
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
