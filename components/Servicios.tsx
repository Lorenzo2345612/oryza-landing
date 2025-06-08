"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { servicios } from "@/models/data"
import { IconService } from "@/models/business-logic"
import { useCarouselController } from "@/controllers/carousel-controller"
import CarouselNavigation from "@/views/CarouselNavigation"

const Servicios = () => {
  const shouldRender = useMemo(() => servicios.length > 0, [])
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarouselController(servicios.length)

  if (!shouldRender) return null

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios digitales diseñados para impulsar tu negocio hacia el éxito.
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 1)}%)`,
              }}
            >
              {servicios.map((servicio, index) => {
                const IconComponent = IconService.getIcon(servicio.icono)
                return (
                  <motion.div
                    key={servicio.id}
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                      <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="text-black" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{servicio.titulo}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{servicio.descripcion}</p>
                      {servicio.precio && <div className="text-black font-semibold">{servicio.precio}</div>}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          <CarouselNavigation
            currentIndex={currentIndex}
            totalItems={servicios.length}
            onPrevious={prevSlide}
            onNext={nextSlide}
            onGoToSlide={goToSlide}
            ariaLabel="servicio"
          />
        </div>
      </div>
    </section>
  )
}

export default Servicios
