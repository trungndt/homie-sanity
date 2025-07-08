// lib/getProjects.ts
import { client } from '@/sanity/client'
export async function getProjects() {
  const query = `*[_type == "project"]`
  return client.fetch(query, {}, {
    perspective: 'published',
  })
}
