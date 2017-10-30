import Vue from 'vue'

export default class Adapter {
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
