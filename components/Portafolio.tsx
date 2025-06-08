"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { proyectos } from "@/models/data"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { useCarouselController } from "@/controllers/carousel-controller"
import CarouselNavigation from "@/views/CarouselNavigation"

const Portafolio = () => {
  const shouldRender = useMemo(() => proyectos.length > 0, [])
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarouselController(proyectos.length)

  if (!shouldRender) return null

  return (
    <section id="portafolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestro Portafolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre algunos de los proyectos que hemos desarrollado para nuestros clientes y cómo hemos ayudado a
            transformar sus ideas en realidad.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {proyectos.map((proyecto, index) => (
                <motion.div
                  key={proyecto.id}
                  className="w-full flex-shrink-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-4">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        <Image
                          src={proyecto.imagen || "/placeholder.svg"}
                          alt={proyecto.titulo}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{proyecto.titulo}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{proyecto.descripcion}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {proyecto.tecnologias.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        {proyecto.url && (
                          <a
                            href={proyecto.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-black hover:text-gray-700 font-medium"
                          >
                            Ver proyecto
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <CarouselNavigation
            currentIndex={currentIndex}
            totalItems={proyectos.length}
            onPrevious={prevSlide}
            onNext={nextSlide}
            onGoToSlide={goToSlide}
            ariaLabel="proyecto"
          />
        </div>
      </div>
    </section>
  )
}

export default Portafolio
