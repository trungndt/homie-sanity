import Link from "next/link";
import { type SanityDocument } from "next-sanity";


import { client } from "@/sanity/client";

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Team from "../components/Team";


const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <div className="custom-title">Check if this is red</div>
      <Hero/>
      <About/>
      <Projects/>
      <Team/>
    </main>
  );
}