import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Team from "../components/Team"
import Performance from "../components/Performance"
import Contact from "../components/Contact"
import { getProjects } from '@/lib/getProjects'
import { getPerformances } from '@/lib/getPerformances'
import { draftMode } from 'next/headers'

export default async function IndexPage() {
  const { isEnabled: isPreview } = await draftMode()

  const projects = await getProjects(isPreview)
  const perfs = await getPerformances()
  console.log(projects)
  console.log(isPreview)

  return (
    <div>
      {isPreview && (
        <div className="bg-yellow-400 text-black p-2 text-center">
          Preview Mode Enabled
        </div>
      )}
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
