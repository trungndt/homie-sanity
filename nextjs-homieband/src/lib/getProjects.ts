import { client } from '@/sanity/client'

export const getProjects = async () => {
  return await client.fetch(`*[_type == "project"]`)
}