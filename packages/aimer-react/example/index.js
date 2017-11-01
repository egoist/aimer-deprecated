import Aimer from 'aimer'
import 'aimer/dist/aimer.css'
import AimerReact from '../src'
import React from 'react'

const aimer = new Aimer({
  adapter: AimerReact
})

class Button extends React.Component {
  render() {
    return <button>{ this.props.children }</button>
  }

  componentWillUnmount() {
    console.log('bye')
  }
}

aimer.add({
  title: 'With text',
  component: () => <Button>Hello World</Button>
})

aimer.add({
  title: 'With emoji',
  component: () => <Button>😮☔️</Button>
})

aimer.start('#app')
