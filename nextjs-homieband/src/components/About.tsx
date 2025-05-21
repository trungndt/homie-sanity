import { client, urlFor } from "@/sanity/client";

const query = `*[_type == "about"][0]`;
const data = await client.fetch(query);

export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="container">
            <div className="mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="md:col-span-1">
                    <img src={urlFor(data.image).url()} alt="Descriptive alt" className="w-auto h-[500px] rounded" />
                </div>

                <div className="md:col-span-1 space-y-4">
                    <h2>{data.title}</h2>
                    <p className="mt-2 text-xl">{data.description}</p>
                </div>
            </div>
            </div>
        </section>
    );
}