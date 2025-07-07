// lib/getProjects.ts
import { client } from '@/sanity/client'
export async function getProjects(isPreview = false) {
  const query = `*[_type == "project"]`
  return client.fetch(query, {}, {
    perspective: isPreview ? 'previewDrafts' : 'published',
  })
}
