import { client, urlFor } from "@/sanity/client";

const query = `*[_type == "about"][0]`;
const data = await client.fetch(query);

export default function About() {

  return (
    <section className="relative h-screen bg-cover bg-center">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold">{data.title}</h1>
        <p className="mt-2 text-xl">{data.description}</p>
      </div>
    </section>
  );
}