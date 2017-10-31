# Aimer

[![NPM version](https://img.shields.io/npm/v/aimer.svg?style=flat-square)](https://npmjs.com/package/aimer) [![NPM downloads](https://img.shields.io/npm/dm/aimer.svg?style=flat-square)](https://npmjs.com/package/aimer) [![Build Status](https://img.shields.io/circleci/project/egoist/aimer/master.svg?style=flat-square)](https://circleci.com/gh/egoist/aimer) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat-square)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat-square)](https://chat.egoist.moe)

The UI Development Framework, it's so simple that you'll fall in love with.

## Install

```bash
yarn add aimer --dev
```

## How to use

Assume you have a component `Button.vue` and you wanna demonstrate it:

```js
import Aimer from 'aimer'
import 'aimer/dist/aimer.css'

// And the button you wanna demonstrate
import MyButton from './path/to/Button.vue'

const aimer = new Aimer({
  title: 'optional header title'
})

aimer.add({
  title: 'With text',
  component: {
    template: '<my-button>hello world</my-button>',
    components: {
      MyButton
    }
  },
  readme: '<p>some html</p>',
  example: '...some example code'
})

aimer.add({
  title: 'With emoji',
  component: {
    template: '<my-button>😄🎉😎👻</my-button>',
    components: {
      MyButton
    }
  }
})

// Start Aimer instance at given node
aimer.start('#app')
```

Run this script with your favoite bundler of choice, maybe webpack? And you can preview it in the browser:

<img src="https://i.loli.net/2017/10/31/59f826060ee6f.png" width="500" alt="preview">

See it [in action](https://aimer-button.egoist.moe). 🚀

## Work with other frameworks

- [React](./packages/aimer-react)

## Examples

- [button](https://aimer-button.egoist.moe/)

## API

### new Aimer([options])

#### options

##### title

Default: `<Aimer Logo>`<br>
Type: `string`

Header title.


##### Adapter

Default: `AimerVue`

Aimer adapter, check out the [default one](./packages/aimer/src/AimerVue.js) for reference.

##### github

Type: `string`

GitHub repo slug or URL.

##### twitter

Type: `string`

Twitter handle or URL.

### aimer.add(story)

#### story

##### title

Type: `string`<br>
Required: `true`

Story title.

##### component

Type: `any`<br>
Required: `true`

The component.

##### example

Type: `string`

Example code.

##### readme

Type: `HTMLString`

Use as README.

## License

MIT &copy; [EGOIST](https://github.com/egoist)
