<template>
  <div class="aimer-icons">
    <a class="aimer-icon" target="_blank" :href="getUrl(github, 'github.com')" v-if="github">
      <git-hub></git-hub>
    </a>
    <a class="aimer-icon" target="_blank" :href="getUrl(twitter, 'twitter.com')" v-if="twitter">
      <twitter></twitter>
    </a>
  </div>
</template>

<script>
import GitHub from '!svg-to-component-loader!../svg/github.svg'
import Twitter from '!svg-to-component-loader!../svg/twitter.svg'

export default {
  props: {
    github: String,
    twitter: String
  },

  methods: {
    getUrl(url, domain) {
      return /^https?:/.test(url) ? url : `https://${domain}/${url}`
    }
  },

  components: {
    GitHub,
    Twitter
  }
}
</script>

<style>
.aimer-icons {
  display: flex;
}

.aimer-icon {
  color: #000;
  display: flex;
  margin-left: 20px;
}

.aimer-icon:hover {
  color: #106ba3;
}

.aimer-icon svg {
  width: 20px;
  height: 20px;
}
</style>
