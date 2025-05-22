import { client, urlFor } from "@/sanity/client";

const query = `*[_type == "team"]`;
const data = await client.fetch(query);

export default function Team() {

    return (
        <section id="team" className="py-20 px-5 xl:px-20">
            <h2>Thành viên HomieBand</h2>
            <div className="relative grid grid-cols-3">
                {data.map((team: any) => (
                    <div className="team-item group relative card-wrapper w-full md:px-2.5 py-3">
                        <img className="w-full object-cover" src={team.photo ? urlFor(team.photo).url() : '/placeholder.jpg'} />
                        <div className="tean-content px-6 py-4">
                            <div className="title">
                                <p className="text-base">{team.name}</p>
                                <p className="text-base">{team.role}</p>
                            </div>
                            <p className="text-base">{team.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
    // return (
    //     <ul className="flex flex-col gap-y-4">
    //         {data.map((team: any) => (
    //             <li className="hover:underline">
    //                 <img src={urlFor(team.photo).url()} />
    //                 <h2 className="text-xl font-semibold">{team.name}</h2>
    //                 <p>{team.role}</p>
    //                 <p>{team.description}</p>
    //             </li>
    //         ))}
    //     </ul>
    // );
}