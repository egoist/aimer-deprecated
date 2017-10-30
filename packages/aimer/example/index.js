import Vue from 'vue'
import Aimer from '../src'

class Adapter {
  mount(component, target) {
    return new Vue({
      el: target,
      render: h => h(component)
    })
  }

  unmount(mounted) {
    mounted.$destroy()
  }
}

const aimer = new Aimer({
  adapter: Adapter
})

aimer.add({
  title: 'With text',
  component: {
    render(h) {
      return h('button', null, ['hello world'])
    },
    beforeDestroy() {
      console.log('bye')
    }
  },
  example: `
<template>
  <my-button>hello world</my-button>
</template>

<script>
import MyButton from 'my-button'

export default {
  components: {
    MyButton
  }
}
</script>
  `.trim()
})

aimer.add({
  title: 'With emoji',
  component: {
    render(h) {
      return h('button', null, ['😄🎉😎👻'])
    }
  }
})

aimer.start('#app')
