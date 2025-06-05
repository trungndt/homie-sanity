import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Team from "../components/Team"
import Contact from "../components/Contact"
import { getProjects } from '@/lib/getProjects'

export default async function IndexPage() {
  const projects = await getProjects() // ✅ fetch from server

  return (
    <main className="min-h-screen max-w-screen overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Projects data={projects || []} /> {/* ✅ pass as prop */}
      <Team />
      <Contact />
    </main>
  )
}
