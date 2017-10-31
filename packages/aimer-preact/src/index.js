import { render } from 'preact'

export default class Adapter {
  mount(component, target) {
    render(component, target)
    this._mounted = true
    return this
  }

  unmount(target) {
    render(null, target, target.firstChild)
    return this
  }

  isMount() {
    return this._mounted
  }
}
