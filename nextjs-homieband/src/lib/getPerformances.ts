import { client } from '@/sanity/client'

export type TeamSet = 'Trio' | 'Quartet' | 'Quintet' | 'Full Band';

export interface TeamSetPerformance {
  teamSet: TeamSet;
  videos: string[];
}

const query = `
  *[_type == "teamSetPerformance"]{
    teamSet,
    videos
  }
`;

export async function getPerformances(): Promise<TeamSetPerformance[]> {
  return await client.fetch(query);
}