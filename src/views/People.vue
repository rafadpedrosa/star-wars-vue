<template>
  <div class="people">
    <h1 class="p-3 m-0">People</h1>
    <div class="row table-people">
      <b-table class="col-12" :items="peoples" hover striped></b-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('peopleStore', ['peoples'])
  },
  methods: {
    ...mapActions('peopleStore', ['fetchPeoples'])
  },
  data () {
    return {}
  },
  created () {
    this.fetchPeoples()
      .then(data => this.$store.commit('peopleStore/SET_PEOPLE_LIST', data))
  }
}
</script>

<style>
  h1 {
    border-bottom: 1px solid black;
  }

  .table-people {
    overflow-x: auto;
  }
</style>
