// src/sanity/clientWithWrite.ts
import { createClient } from 'next-sanity';

export const clientWithWrite = createClient({
  projectId: 'ipjfioh1',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // <-- no Cdn for write
  token: process.env.SANITY_API_WRITE_TOKEN, // <-- safe to use in server API only
});
