import ReactDOM from 'react-dom'

export default class Adapter {
  mount(component, target) {
    ReactDOM.render(component, target)
    this._mounted = true
    return this
  }

  unmount(target) {
    ReactDOM.unmountComponentAtNode(target)
    return this
  }

  isMount() {
    return this._mounted
  }
}
