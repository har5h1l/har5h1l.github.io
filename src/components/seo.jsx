import { useEffect } from 'react'

const DEFAULT_IMAGE = 'https://www.harshils.com/favicon.ico'

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

export function Seo({ title, description, keywords, image = DEFAULT_IMAGE }) {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    if (description) {
      upsertMeta('meta[name="description"]', { name: 'description', content: description })
      upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
      upsertMeta('meta[property="twitter:description"]', { property: 'twitter:description', content: description })
    }

    if (keywords) {
      upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords })
    }

    if (title) {
      upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
      upsertMeta('meta[property="twitter:title"]', { property: 'twitter:title', content: title })
    }

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="twitter:card"]', { property: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: window.location.href })
    upsertMeta('meta[property="twitter:url"]', { property: 'twitter:url', content: window.location.href })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })
    upsertMeta('meta[property="twitter:image"]', { property: 'twitter:image', content: image })
  }, [description, image, keywords, title])

  return null
}
