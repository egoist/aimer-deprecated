import GitHub from '!svg-to-component-loader!../../svg/github.svg'
import Twitter from '!svg-to-component-loader!../../svg/twitter.svg'

import './Icons.css'

const getUrl = (url, domain) => {
  return /^https?:/.test(url) ? url : `https://${domain}/${url}`
}

export default {
  name: 'aimer-icons',

  functional: true,

  props: {
    github: String,
    twitter: String
  },

  render(h, ctx) {
    const { github, twitter } = ctx.props

    return (
      <div class="aimer-icons">
        {github && <a class="aimer-icon" target="_blank" href={getUrl(github, 'github.com')}>
          <git-hub></git-hub>
        </a>}
        {twitter && <a class="aimer-icon" target="_blank" href={getUrl(twitter, 'twitter.com')}>
          <twitter></twitter>
        </a>}
      </div>
    )
  }
}
