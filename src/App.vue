<template>
    <div id="app">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">
                <img src="../src/assets/icon-sw.png" alt="piuu piu" width="50">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :active="isActive('/Home')" href="#" to="/Home">Home</b-nav-item>
                    <b-nav-item :active="isActive('/People')" href="#" to="/People">People</b-nav-item>
                    <b-nav-item :active="isActive('/Films')" href="#" to="/Films">Films</b-nav-item>
                    <b-nav-item :active="isActive('/Starships')" href="#" to="/Starships">Starships</b-nav-item>
                    <b-nav-item :active="isActive('/Vehicles')" href="#" to="/Vehicles">Vehicles</b-nav-item>
                    <b-nav-item :active="isActive('/Species')" href="#" to="/Species">Species</b-nav-item>
                    <b-nav-item :active="isActive('/Planets')" href="#" to="/Planets">Planets</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    isActive (path) {
      // eslint-disable-next-line no-debugger
      debugger
      return this.$route.path === path
    }
  }
}
</script>

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
