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
            <div className="col-span-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                {/* Title */}
                <div className="section-title align-left">
                    <h2>Video Trình Diễn</h2>
                    <span>OUR PERFORMANCE</span>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 sm:justify-end">
                    {teamSetValues.map((set) => (
                        <button
                            key={set}
                            onClick={() => setActiveTab(set)}
                            className={`px-4 py-2 rounded border text-sm font-medium transition ${activeTab === set
                                    ? 'bg-black text-white'
                                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {set}
                        </button>
                    ))}
                </div>
            </div>

            {/* Video grid */}
            {activeSet ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
