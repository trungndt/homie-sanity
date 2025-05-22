import { client, urlFor } from "@/sanity/client";

const heroQuery = `*[_type == "hero"][0]`;
const heroData = await client.fetch(heroQuery);

export default function Hero() {

  return (
    <section id="top" className="relative h-screen bg-cover bg-center"
    style={{
        backgroundImage: `url(${urlFor(heroData.background).url()})`,
      }}
    >
      <div className="hidden relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold">{heroData.title}</h1>
        <p className="mt-2 text-xl">{heroData.headline}</p>
      </div>
    </section>
  );
}