"use client"

import { useState, useCallback } from "react"
import { CarouselService } from "@/models/business-logic"

export const useCarouselController = (totalItems: number) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex(CarouselService.getNextIndex(currentIndex, totalItems))
  }, [currentIndex, totalItems])

  const prevSlide = useCallback(() => {
    setCurrentIndex(CarouselService.getPrevIndex(currentIndex, totalItems))
  }, [currentIndex, totalItems])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
  }
}
