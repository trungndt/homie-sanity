// ./schemas/teamSetPerformance.ts

export default {
    name: 'performance',
    title: 'Team Set Performance',
    type: 'document',
    fields: [
      {
        name: 'teamSet',
        title: 'Team Set',
        type: 'string',
        options: {
          list: ['Trio', 'Quartet', 'Quintet', 'Full Band'],
        },
        validation: (Rule: any) => Rule.required().min(1)

      },
      {
        name: 'videos',
        title: 'YouTube Video Embeds',
        type: 'array',
        of: [{ type: 'url' }],
        validation: (Rule: any) => Rule.required().min(1)

      },
    ],
    preview: {
      select: {
        title: 'teamSet',
      },
    },
  };
  