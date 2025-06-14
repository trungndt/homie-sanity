export const teamSetValues = ['Full Band', 'Band 5', 'Band 4', 'Band 3'] as const;

export type TeamSet = (typeof teamSetValues)[number];
