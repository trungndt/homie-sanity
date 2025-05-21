import { client, urlFor } from '@/sanity/client'
// import { useEffect, useState, useCallback, useRef } from 'react'
// import Image from 'next/image'
// import useEmblaCarousel from 'embla-carousel-react'


const query = `*[_type == "project"]`;
const data = await client.fetch(query);

export default function Projects() {
  return (
    <div className="flex">
      {data.map((proj: any) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={proj.photo ? urlFor(proj.photo).url() : '/placeholder.jpg'} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{proj.name}</div>
            <p className="text-gray-700 text-base">{proj.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// export default function Projects() {
//   const [projects, setProjects] = useState<any[]>([])
//   const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1, containScroll: 'trimSnaps' })

//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

//   useEffect(() => {
//     const fetchData = async () => {
//       const query = `*[_type == "project"]{_id, name, photo, date}`
//       const result = await client.fetch(query)
//       setProjects(result)
//     }
//     fetchData()
//   }, [])

//   return (
//     <div className="relative w-full py-10">
//       <h2 className="text-3xl font-bold mb-6">Projects</h2>

//       <div className="flex justify-between items-center mb-4">
//         <button onClick={scrollPrev} className="px-4 py-2 bg-gray-300 rounded">◀</button>
//         <button onClick={scrollNext} className="px-4 py-2 bg-gray-300 rounded">▶</button>
//       </div>

//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {projects.map((proj) => (
//             <div
//               key={proj._id}
//               className="min-w-[25%] px-2"
//             >
//               <div className="bg-white rounded shadow p-4">
//                 {proj.photo && (
//                   <Image
//                     src={urlFor(proj.photo).url()}
//                     alt={proj.name}
//                     width={400}
//                     height={300}
//                     className="rounded"
//                   />
//                 )}
//                 <h3 className="mt-2 font-semibold">{proj.name}</h3>
//                 <p className="text-sm text-gray-600">{proj.date}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
