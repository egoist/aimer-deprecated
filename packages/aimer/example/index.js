import Vue from 'vue'
import Aimer from '../src'
import marked from 'marked3'
import Button from './Button.vue'

const aimer = new Aimer({
  // title: 'Aimer Example'
})

aimer.add({
  title: 'With text',
  component: () => ({
    render(h) {
      return h(Button, null, ['hello world'])
    },
    beforeDestroy() {
      console.log('bye')
    }
  }),
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
  `.trim(),
  readme: marked(`
# this is an example component

> for god's sake

![blow](https://media.giphy.com/media/YhAJHW59JfsNW/giphy.gif)

\`\`\`js
function foo() {
  console.log('write some shitty code')
}
\`\`\`
`)
})

aimer.add({
  title: 'With emoji',
  component: {
    render(h) {
      return h(Button, null, ['😄🎉😎👻'])
    }
  }
})

aimer.start('#app')
