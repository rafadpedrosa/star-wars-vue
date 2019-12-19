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
      <b-card-text >
        <transition-group name="list" tag="p">
          <div v-for="(item, index) in itemsList" v-bind:key="index" class="list-item">
            <span v-if="index">{{ item }}</span>
          </div>
        </transition-group>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {},
  data () {
    return {
      toggle: false,
      initialized: false,
      items: ['Shuuuuu...', 'Shiiiii....']
    }
  },
  computed: {
    itemsList () {
      return this.items
    }
  },
  created () {
    if (!this.initialized) {
      setInterval(() => {
        console.log(':::')
        let test = this.items.shift()
        setTimeout(() => {
          this.items.push(test)
        }, 1000)
      }, 3000)
    }
    this.initialized = true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  /*transform: translateY(-24px);*/

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
