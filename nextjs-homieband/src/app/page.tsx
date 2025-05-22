import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Team from "../components/Team";
import Contact from "../components/Contact";


const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  return (
    <main className=" min-h-screen">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Team/>
      <Contact/>
    </main>
  );
}