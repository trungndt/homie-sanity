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
  const projects = await getProjects()
  const perfs = await getPerformances()

  return (
    <div>
      <main className="min-h-screen max-w-screen overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Projects data={projects || []} />
        <Team />
        <Performance data={perfs || []} />
        <Contact />
      </main>
    </div>
  )
}
