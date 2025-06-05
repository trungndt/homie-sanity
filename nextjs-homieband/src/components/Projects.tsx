'use client'

import { urlFor } from '@/sanity/client'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Projects({ data }: { data: any[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    containScroll: 'trimSnaps',
  })
  const [prevEnabled, setPrevEnabled] = useState(false)
  const [nextEnabled, setNextEnabled] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevEnabled(emblaApi.canScrollPrev())
    setNextEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <section id="projects" className="py-20 px-5 xl:px-20">
      <div className="container mx-auto">
        <div className="col-span-4 flex items-center justify-between mb-4">
          {/* Arrows on the left */}
          <div className="flex gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!prevEnabled}
              className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-md shadow-md hover:bg-gray-200 disabled:opacity-40 cursor-pointer"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!nextEnabled}
              className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-md shadow-md hover:bg-gray-200 disabled:opacity-40 cursor-pointer"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
            </button>
          </div>

          {/* Section title on the right */}
          <div className="section-title align-right">
            <h2>Các dự án nổi bật</h2>
            <span>PROJECTS</span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex snap-x">
              {data.map((proj, index) => (
                <div
                  key={proj._id || index}
                  className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2 snap-start"
                >
                  <div className="rounded-lg overflow-hidden bg-[#1a1a1a]">
                    <div className="aspect-[4/3]">
                      <img
                        src={proj.photo ? urlFor(proj.photo).url() : '/placeholder.jpg'}
                        alt={proj.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="proj-content px-4 py-4 h-[120px]">
                      <div className="proj-date">{proj.date}</div>
                      <div className="proj-name">{proj.name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
