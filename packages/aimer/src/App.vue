<template>
  <div id="aimer">
    <header class="aimer-header">
      <h1 class="aimer-brand">Aimer</h1>
      <select
        @change="handleRender"
        v-model="currentStoryIndex">
        <option
          v-for="(story, index) in stories"
          :key="story.title"
          :value="index">
          {{ story.title }}
        </option>
      </select>
    </header>
    <section class="aimer-main">
      <div class="aimer-cell aimer-component">
        <div class="aimer-target-wrapper" ref="targetWrapper"></div>
      </div>
      <div class="aimer-cell aimer-example" v-if="currentStory.example">
        <pre><code>{{ currentStory.example }}</code></pre>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'aimer',

  props: {
    adapter: {
      type: Object,
      required: true
    },
    stories: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      currentStoryIndex: 0
    }
  },

  computed: {
    currentStory() {
      return this.stories[this.currentStoryIndex]
    }
  },

  mounted() {
    this.handleRender()
  },

  methods: {
    handleRender() {
      const { targetWrapper } = this.$refs
      if (this.__mounted) {
        this.adapter.unmount(this.__mounted)
        targetWrapper.removeChild(targetWrapper.firstChild)
      }
      const target = document.createElement('div')
      targetWrapper.appendChild(target)
      this.__mounted = this.adapter.mount(this.currentStory.component, target)
    }
  }
}
</script>

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
  padding: 0 10px;

}

.aimer-brand {
  font-weight: 300;
  margin-right: 10px;
  height: 31px;
  width: 93px;
  background-size: cover;
  background-position: center;
  background-image: url(./assets/Aimer.png);
  text-indent: -9999em;
}

.aimer-main {
  display: flex;
  padding: 10px;
  height: calc(100% - 44px);
}

.aimer-cell {
  flex-basis: 100%;
}

.aimer-example pre {
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  margin: 0;
  padding-left: 10px;
}

.aimer-example pre code {
  font-size: 100%;
  word-break: normal;
  white-space: pre;
  background: transparent;
  color: #bd10e0;
  font-family: Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;
}
</style>
