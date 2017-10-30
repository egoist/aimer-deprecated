import Vue from 'vue'
import App from './App.vue'

export default class Aimer {
  constructor({ adapter: Adapter } = {}) {
    this.adapter = new Adapter()
    this.stories = []
  }

  add(story) {
    this.stories.push(story)
    return this
  }

  start(target) {
    if (typeof target === 'string') {
      target = document.querySelector(target)
    }

    this.vm = new Vue({
      el: target,
      render: h => h(App, {
        props: {
          adapter: this.adapter,
          stories: this.stories
        }
      })
    })
  }
}
