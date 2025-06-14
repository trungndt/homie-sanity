'use client';

import { useState } from 'react';
import { teamSetValues, TeamSet } from '@/constants/teamSet';

interface TeamSetPerformance {
  teamSet: TeamSet;
  videos: string[];
}

export default function Performance({ data }: { data: TeamSetPerformance[] }) {
  const [activeTab, setActiveTab] = useState<TeamSet>('Full Band');

  const sorted = teamSetValues
    .map(set => data.find(item => item.teamSet === set))
    .filter(Boolean) as TeamSetPerformance[];

  const activeSet = sorted.find(set => set.teamSet === activeTab);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="performances">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">🎥 Our Performances</h2>

      {/* Tab buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {teamSetValues.map((set) => (
          <button
            key={set}
            onClick={() => setActiveTab(set)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              activeTab === set
                ? 'bg-black text-white'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            {set}
          </button>
        ))}
      </div>

      {/* Video grid */}
      {activeSet ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {activeSet.videos.map((url, idx) => (
            <div key={idx} className="aspect-video">
              <iframe
                src={url}
                title={`Performance ${activeSet.teamSet} ${idx + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl shadow-md"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No videos available for {activeTab}</p>
      )}
    </section>
  );
}
