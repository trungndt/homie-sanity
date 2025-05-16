import { client, urlFor } from "@/sanity/client";

const query = `*[_type == "project"]`;
const data = await client.fetch(query);

export default function Projects() {
    return (
        <div className="flex flex-col gap-y-4">
            {data.map((proj: any) => (
                <div>
                    <img src={urlFor(proj.photo).url()} />
                    <h2 className="text-xl font-semibold">{proj.name}</h2>
                    <p>{proj.date}</p>
                </div>
            ))}
        </div>
    );
}