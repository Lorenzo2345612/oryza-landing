"use client"

import type React from "react"

import { useState, useCallback } from "react"
import type { FormData } from "@/models/types"
import { ValidationService } from "@/models/business-logic"

export const useFormController = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = useCallback((data: FormData): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!ValidationService.validateRequired(data.nombre)) {
      newErrors.nombre = "El nombre es requerido"
    }

    if (!ValidationService.validateRequired(data.email)) {
      newErrors.email = "El email es requerido"
    } else if (!ValidationService.validateEmail(data.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!ValidationService.validateRequired(data.mensaje)) {
      newErrors.mensaje = "El mensaje es requerido"
    } else if (!ValidationService.validateMinLength(data.mensaje, 10)) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))

      // Clear error when user starts typing
      if (errors[name as keyof FormData]) {
        setErrors((prev) => ({
          ...prev,
          [name]: undefined,
        }))
      }
    },
    [errors],
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      if (!validateForm(formData)) {
        return
      }

      setIsSubmitting(true)

      try {
        // Simulación de envío
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log("Formulario enviado:", formData)
        setSubmitStatus("success")
        setFormData({ nombre: "", email: "", mensaje: "" })
        setErrors({})
      } catch (error) {
        setSubmitStatus("error")
      } finally {
        setIsSubmitting(false)
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    },
    [formData, validateForm],
  )

  return {
    formData,
    isSubmitting,
    submitStatus,
    errors,
    handleChange,
    handleSubmit,
  }
}
