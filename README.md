# Aimer

The UI Development Framework, it's so simple that you'll fall in love with.

## Install

```bash
yarn add aimer --dev
```

## How to use

Assume you have a component `Button.vue` and you wanna demonstrate it: (it doesn't matter if it's a Vue component or a React component)

```js
import Aimer from 'aimer'
import 'aimer/dist/aimer.css'
// In this case we're using `Button.vue` which is a Vue component
import AimerVue from 'aimer-vue'
import MyButton from './path/to/Button.vue'

const aimer = new Aimer({
  adapter: AimerVue
})

aimer.add({
  title: 'With text',
  component: {
    template: '<my-button>hello world</my-button',
    components: {
      MyButton
    }
  }
})

aimer.add({
  title: 'With emoji',
  component: {
    template: '<my-button>😄🎉😎👻</my-button',
    components: {
      MyButton
    }
  }
})

// Start Aimer instance at given node
aimer.start('#app')
```

Run this script with your favoite bundler of choice, maybe webpack? And you can preview it in the browser:

<img src="https://i.loli.net/2017/10/30/59f6fee9b4c2b.png" width="500" alt="preview">

## License

MIT &copy; [EGOIST](https://github.com/egoist)
