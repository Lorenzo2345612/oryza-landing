"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselNavigationProps {
  currentIndex: number
  totalItems: number
  onPrevious: () => void
  onNext: () => void
  onGoToSlide: (index: number) => void
  ariaLabel?: string
}

const CarouselNavigation = ({
  currentIndex,
  totalItems,
  onPrevious,
  onNext,
  onGoToSlide,
  ariaLabel = "item",
}: CarouselNavigationProps) => {
  return (
    <>
      {/* Navigation Buttons */}
      <button
        onClick={onPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 z-10"
        aria-label={`${ariaLabel} anterior`}
      >
        <ChevronLeft className="text-black" size={24} />
      </button>
      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 z-10"
        aria-label={`Siguiente ${ariaLabel}`}
      >
        <ChevronRight className="text-black" size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalItems }, (_, index) => (
          <button
            key={index}
            onClick={() => onGoToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
            aria-label={`Ir al ${ariaLabel} ${index + 1}`}
          />
        ))}
      </div>
    </>
  )
}

export default CarouselNavigation
