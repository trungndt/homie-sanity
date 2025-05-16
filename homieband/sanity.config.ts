import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'homieband',

  projectId: 'ipjfioh1',
  dataset: 'production',

  studioHost: 'homieband',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
