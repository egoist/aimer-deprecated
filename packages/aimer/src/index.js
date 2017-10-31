// eslint-disable-next-line import/no-unassigned-import
import './polyfills'
import Vue from 'vue'
import slugo from 'slugo'
import AimerVue from './AimerVue'
import App from './App.vue'

window.AIMER_VERSION = process.env.AIMER_VERSION

export default class Aimer {
  constructor({ adapter: Adapter = AimerVue, title } = {}) {
    this.adapter = new Adapter()
    this.stories = []
    this.config = {
      title
    }
  }

  add(story) {
    this.stories.push({
      ...story,
      slug: slugo(story.title)
    })
    return this
  }

  start(target) {
    if (typeof target === 'string') {
      target = document.querySelector(target)
    }

    this.vm = new Vue({
      el: target,
      render: h =>
        h(App, {
          props: {
            adapter: this.adapter,
            stories: this.stories,
            config: this.config
          }
        })
    })

    return this.vm
  }
}
