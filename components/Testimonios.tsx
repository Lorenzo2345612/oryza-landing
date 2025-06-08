"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { testimonios } from "@/models/data"
import { Star, Quote } from "lucide-react"
import { useCarouselController } from "@/controllers/carousel-controller"
import CarouselNavigation from "@/views/CarouselNavigation"

const Testimonios = () => {
  const shouldRender = useMemo(() => testimonios.length > 0, [])
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarouselController(testimonios.length)

  if (!shouldRender) return null

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} size={16} className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"} />
    ))
  }

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. Aquí tienes algunas de sus experiencias
            trabajando con nosotros.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonios.map((testimonio, index) => (
                <motion.div
                  key={testimonio.id}
                  className="w-full flex-shrink-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mx-4 relative text-center">
                    <Quote className="text-gray-200 absolute top-4 right-4" size={32} />
                    <div className="flex items-center justify-center gap-1 mb-6">{renderStars(testimonio.rating)}</div>
                    <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">"{testimonio.comentario}"</p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-black font-semibold text-xl">{testimonio.nombre.charAt(0)}</span>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900 text-lg">{testimonio.nombre}</h4>
                        <p className="text-gray-600">{testimonio.empresa}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <CarouselNavigation
            currentIndex={currentIndex}
            totalItems={testimonios.length}
            onPrevious={prevSlide}
            onNext={nextSlide}
            onGoToSlide={goToSlide}
            ariaLabel="testimonio"
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonios
