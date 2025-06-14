import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Team from "../components/Team"
import Performance from "../components/Performance"
import Contact from "../components/Contact"
import { getProjects } from '@/lib/getProjects'
import { getPerformances } from '@/lib/getPerformances'

export default async function IndexPage() {
  const projects = await getProjects() // ✅ fetch from server
  const perfs = await getPerformances() // ✅ fetch from server
  console.log('Performance data:', perfs);

  return (
    <main className="min-h-screen max-w-screen overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Projects data={projects || []} />
      <Team />
      <Performance data={perfs||[]} />

      <Contact />
    </main>
  )
}
