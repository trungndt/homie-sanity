import { client } from '@/sanity/client'
import { TeamSet } from '@/constants/teamSet';

export interface TeamSetPerformance {
  teamSet: TeamSet;
  videos: string[];
}

const query = `
  *[_type == "performance"]{
    teamSet,
    videos
  }
`;

export async function getPerformances(): Promise<TeamSetPerformance[]> {
  return await client.fetch(query);
}