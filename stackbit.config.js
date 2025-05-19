import { ContentfulContentSource } from '@stackbit/cms-contentful'

export default {
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '16',
  contentSources: [],
  models: {
    page: { type: 'page', urlPath: '/{slug}' },
  },
}
