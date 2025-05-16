import { client, urlFor } from "@/sanity/client";

const query = `*[_type == "about"][0]`;
const data = await client.fetch(query);

export default function About() {
    return (
        <section className="relative h-screen bg-cover bg-center">
            {/* <img src={urlFor(data.image).url()} /> */}
            <img src={urlFor(data.image).url()} />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <h2 className="text-5xl font-bold">{data.title}</h2>
                <p className="mt-2 text-xl">{data.description}</p>
            </div>
        </section>
    );
}