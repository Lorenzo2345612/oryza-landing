"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { contactoInfo } from "@/models/data";
import { useFormController } from "@/controllers/form-controller";
import FormField from "@/views/FormField";

const ContactForm = () => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    errors,
    handleChange,
    handleSubmit,
  } = useFormController();

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a transformar
            tus ideas en soluciones digitales exitosas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="text-black" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">{contactoInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormField
                label="Nombre completo"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                error={errors.nombre}
                required
                placeholder="Tu nombre completo"
              />

              <FormField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
                placeholder="tu@email.com"
              />

              <FormField
                label="Mensaje"
                name="mensaje"
                type="textarea"
                value={formData.mensaje}
                onChange={handleChange}
                error={errors.mensaje}
                required
                placeholder="Cuéntanos sobre tu proyecto..."
                rows={5}
              />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send size={20} />
                  </>
                )}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-center font-medium"
                >
                  ¡Mensaje enviado correctamente! Te contactaremos pronto.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-center font-medium"
                >
                  Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
