# Aimer Preact

Demonstrate your Preact components with Aimer.

## Install

```bash
yarn add aimer-preact --dev
```

## Usage

```js
import Aimer from 'aimer'
import 'aimer/dist/aimer.css'
import AimerPreact from 'aimer-preact'

// Import the component you wanna demonstrate
import MyButton from './path/to/button'

const aimer = new Aimer({
  // Magic happens here...
  adapter: AimerPreact
})

aimer.add({
  title: 'with text',
  // Use a function that returns a Preact element 
  component: () => <MyButton>Hello World</MyButton>
})

aimer.start()
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)
