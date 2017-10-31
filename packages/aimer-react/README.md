# Aimer React

Demonstrate your React components with Aimer.

## Install

```bash
yarn add aimer-react --dev
```

## Usage

```js
import Aimer from 'aimer'
import 'aimer/dist/aimer.css'
import AimerReact from 'aimer-react'

// Import the component you wanna demonstrate
import MyButton from './path/to/button'

const aimer = new Aimer({
  // Magic happens here...
  adapter: AimerReact
})

aimer.add({
  title: 'with text',
  // Use a function that returns a React element 
  component: () => <MyButton>Hello World</MyButton>
})

aimer.start()
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)
