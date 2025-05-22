import { client, urlFor } from "@/sanity/client";
import { PortableText } from "@portabletext/react";

const query = `*[_type == "about"][0]`;
const data = await client.fetch(query);

export default function About() {
  return (
    <section id="about" className="py-20 px-5 xl:px-20 w-full overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Image - full width on mobile, 1/3 on desktop */}
        <div className="order-2 md:order-1 md:col-span-1">
          <div className="aspect-square w-full overflow-hidden rounded">
            <img
              src={urlFor(data.image).url()}
              alt="Descriptive alt"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content - first on mobile, 2/3 width on desktop */}
        <div className="order-1 md:order-2 md:col-span-2 md:pl-30">
          <div className="section-title align-left">
            <h2>Về HomieBand</h2>
            <span>IT’S HOMIE</span>
          </div>
          <div className="wysiwyg text-xl">
            <PortableText value={data.description} />
          </div>
        </div>
      </div>
    </section>
  );
}
