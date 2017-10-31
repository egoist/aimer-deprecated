import Vue from 'vue'

export default class AimerVue {
  mount(component, target) {
    this.$el = new Vue({
      el: target,
      render: h => h(component)
    })
    return this
  }

  unmount() {
    this.$el.$destroy()
    return this
  }

  isMount() {
    return this.$el
  }
}
