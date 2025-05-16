import { client, urlFor } from "@/sanity/client";

const query = `*[_type == "team"]`;
const data = await client.fetch(query);

export default function Team() {
    return (
        <ul className="flex flex-col gap-y-4">
            {data.map((team: any) => (
                <li className="hover:underline">
                    <img src={urlFor(team.photo).url()} />
                    <h2 className="text-xl font-semibold">{team.name}</h2>
                    <p>{team.role}</p>
                    <p>{team.description}</p>
                </li>
            ))}
        </ul>
    );
}