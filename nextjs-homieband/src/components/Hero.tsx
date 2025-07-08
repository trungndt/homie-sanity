'use client';
import { useEffect, useState } from 'react';
import { client, urlFor } from '@/sanity/client';
import groq from 'groq';

const heroQuery = groq`*[_type == "hero"][0]`;

export default function Hero() {
  const [heroData, setHeroData] = useState<any>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(heroQuery);
        setHeroData(data);
      } catch (err) {
        console.error('Sanity fetch error:', err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        heroData?.backgrounds?.length ? (prev + 1) % heroData.backgrounds.length : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroData]);

  if (!heroData) {
    return (
      <section id="top" className="relative h-screen w-full overflow-hidden bg-black">
        <div className="shader z-1"></div>
      </section>
    );
  }

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">
      <div className="shader z-1"></div>
      <div className="relative w-full h-full z-0">
        {heroData.backgrounds?.map((img: any, i: number) => (
          <div
            key={img._key}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-[3000ms] ease-in-out ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            style={{ backgroundImage: `url(${urlFor(img).quality(100).url()})` }}
          />
        ))}
      </div>
    </section>
  );
}
