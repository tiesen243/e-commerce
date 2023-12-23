import { meta } from '@/lib/meta'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${meta.url}/sitemap.xml`,
    host: meta.url,
  }
}
