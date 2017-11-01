<template>
  <div id="aimer">
    <header class="aimer-header">
      <div class="aimer-header__left">
        <a href="https://github.com/egoist/aimer" v-if="!config.title" target="_blank">
          <h1 class="aimer-brand">
            Aimer
          </h1>
        </a>
        <h1 class="aimer-title" v-else>
          <a href="./">{{ config.title }}</a>
        </h1>
        <select
          @change="handleRender"
          v-model="currentStorySlug">
          <option
            v-for="(story, index) in stories"
            :key="story.title"
            :value="story.slug">
            {{ story.title }}
          </option>
        </select>
        </div>
      <div class="aimer-header__right">
        <icons :github="config.github" :twitter="config.twitter"></icons>
      </div>
    </header>
    <section class="aimer-main">
      <div class="aimer-cell aimer-component">
        <div class="aimer-target-wrapper" ref="targetWrapper"></div>
      </div>
      <div class="aimer-cell aimer-tabs" v-if="currentStory.example">
        <div class="aimer-tab-headers">
          <div
            class="aimer-tab-header"
            :class="{'aimer-tab-header__active': currentTab === 'readme'}"
            v-if="currentStory.readme"
            @click="chooseTab('readme')">
            README
          </div>
          <div
            class="aimer-tab-header"
            :class="{'aimer-tab-header__active': currentTab === 'example'}"
            v-if="currentStory.example"
            @click="chooseTab('example')">
            Example
          </div>
        </div>
        <div
          class="aimer-tab-readme markdown-body"
          v-if="currentStory.readme && currentTab === 'readme'"
          v-html="currentStory.readme">
        </div>
        <div
          class="aimer-tab-example"
          v-if="currentStory.example && currentTab === 'example'">
          <pre><code>{{ currentStory.example }}</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import qs from 'nanoquery'
import Icons from './components/Icons.vue'

function getCurrentTab({ readme }) {
  return readme ? 'readme' : 'example'
}

function updateURL({ title, story }) {
  const { host, protocol, pathname } = window.location
  const newUrl = `${protocol}//${host}${pathname}?story=${story}`
  // Update URL
  window.history.pushState({
    path: newUrl
  }, title, newUrl)
  // Update document title
  document.title = title
}

function mountComponent(adapter, targetWrapper, component) {
  if (adapter.isMount()) {
    adapter.unmount(targetWrapper.firstChild)
    targetWrapper.removeChild(targetWrapper.firstChild)
  }
  const target = document.createElement('div')
  targetWrapper.appendChild(target)
  adapter.mount(component, target)
}

function getStoryBySlug(stories, slug) {
  return stories.filter(story => story.slug === slug)[0]
}

export default {
  name: 'aimer',

  props: {
    Adapter: {
      type: Function,
      required: true
    },
    stories: {
      type: Array,
      required: true
    },
    config: {
      type: Object
    }
  },

  data() {
    const kv = qs(window.location.search)
    const currentStorySlug = kv.story || this.stories[0].slug
    return {
      currentTab: getCurrentTab(getStoryBySlug(this.stories, currentStorySlug)),
      currentStorySlug
    }
  },

  computed: {
    currentStory() {
      return getStoryBySlug(this.stories, this.currentStorySlug)
    }
  },

  watch: {
    currentStory(story) {
      this.currentTab = getCurrentTab(story)
    }
  },

  mounted() {
    this.adapter = new this.Adapter()
    this.handleRender()
  },

  methods: {
    handleRender() {
      const { targetWrapper } = this.$refs
      let { component } = this.currentStory
      component = typeof component === 'function' ? component() : component
      mountComponent(this.adapter, targetWrapper, component)

      updateURL({
        title: `${this.currentStory.title} - ${this.config.title || 'Aimer'}`,
        story: this.currentStory.slug
      })
    },

    chooseTab(tab) {
      this.currentTab = tab
    }
  },

  components: {
    Icons
  }
}
</script>

<style src="github-markdown-css/github-markdown.css"></style>

<style>
html, body, #aimer {
  height: 100%;
}

body {
  font: 14px/1.6 -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin: 0;
}

* {
  box-sizing: border-box;
}

.aimer-header {
  border-bottom: 1px solid #e2e2e2;
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
}

.aimer-header__left, .aimer-header__right {
  display: flex;
  align-items: center;
}

.aimer-brand {
  font-weight: 300;
  margin-right: 20px;
  height: 31px;
  width: 93px;
  background-size: cover;
  background-position: center;
  background-image: url(./assets/Aimer.png);
  text-indent: -9999em;
}

.aimer-title {
  font-weight: 300;
  font-size: 1.4rem;
  margin-right: 20px;
}

.aimer-title a {
  color: #000;
  text-decoration: none;
}

.aimer-main {
  display: flex;
  padding: 20px;
  height: calc(100% - 44px);
}

.aimer-cell {
  flex-basis: 100%;
}

.aimer-tabs {
  padding-left: 20px;
}

.aimer-tabs pre {
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  margin: 0;
  border: 1px solid rgb(234, 234, 234);
  background-color: transparent;
  border-radius: 0;
  padding: 20px;
}

.aimer-tabs pre code {
  font-size: 100%;
  word-break: normal;
  white-space: pre;
  background: transparent;
  color: #bd10e0;
  font-family: Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;
}

.aimer-tab-headers {
  display: flex;
  padding-bottom: 20px;
  font-size: 13px;
}

.aimer-tab-header {
  background-color: rgba(167, 182, 194, 0.3);
  border-radius: 4px;
  padding: 3px 10px;
  cursor: pointer;
  margin-right: 10px;
}

.aimer-tab-header__active {
  background-color: #106ba3;
  color: white;
  cursor: default;
}
</style>
