'use client';

type TeamSet = 'Trio' | 'Quartet' | 'Quintet' | 'Full Band';

interface TeamSetPerformance {
  teamSet: TeamSet;
  videos: string[];
}

const teamOrder: TeamSet[] = ['Trio', 'Quartet', 'Quintet', 'Full Band'];

export default function Performance({ data }: { data: TeamSetPerformance[] }) {
  const sorted = teamOrder
    .map(set => data.find(item => item.teamSet === set))
    .filter(Boolean) as TeamSetPerformance[];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="performances">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">🎥 Our Performances</h2>

      {sorted.map(({ teamSet, videos }) => (
        <div key={teamSet} className="mb-12">
          <h3 className="text-xl font-semibold mb-4">{teamSet}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((url, idx) => (
              <div key={idx} className="aspect-video">
                <iframe
                  src={url}
                  title={`Performance ${teamSet} ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
