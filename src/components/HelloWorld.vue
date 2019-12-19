<template>
  <div class="hello">
    <b-card
      class="mb-2"
      img-alt="Image"
      img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrfw4XFjkicehDleH68_0dg-4yX9KsqxD-en9QBrx2-89h8Jy&s"
      img-top
      style="max-width: 20rem;"
      tag="article"
      title="I'm your father"
    >
      <b-card-text>
        <transition-group name="list" tag="p">
          <div class="list-item" v-bind:key="index" v-for="(item, index) in itemsList">
            <span v-if="index">{{ item }}</span>
          </div>
        </transition-group>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {},
  data () {
    return {
      toggle: false,
      items: ['Shuuuuu...', 'Shiiiii....'],
      refreshIntervalId: 0
    }
  },
  computed: {
    ...mapGetters(['initialized']),
    itemsList () {
      return this.items
    }
  },
  mounted () {
    if (!this.initialized) {
      this.refreshIntervalId = setInterval(() => {
        let test = this.items.shift()
        setTimeout(() => {
          this.items.push(test)
        }, 1000)
      }, 3000)

      this.$store.commit('INITIALIZED', { init: true })
    }
  },
  destroyed () {
    this.$store.commit('INITIALIZED', { init: false })
    clearInterval(this.refreshIntervalId)
  }
}
</script>

<style lang="scss" scoped>
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to
  {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
