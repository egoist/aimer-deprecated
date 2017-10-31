import Aimer from 'aimer'
import 'aimer/dist/aimer.css'
import AimerPreact from '../src'
import { h } from 'preact'

const aimer = new Aimer({
  adapter: AimerPreact
})

const Button = props => <button>{ props.children }</button>

aimer.add({
  title: 'With text',
  component: () => <Button>Hello World</Button>,
  example: 'foo'
})

aimer.add({
  title: 'With emoji',
  component: () => <Button>😮☔️</Button>
})

aimer.start('#app')
