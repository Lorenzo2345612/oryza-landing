"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Globe, Users } from "lucide-react";

const QueHacemos = () => {
  const serviciosDestacados = [
    {
      icono: Code,
      titulo: "Desarrollo Web",
      descripcion: "Sitios web modernos y responsivos",
    },
    {
      icono: Smartphone,
      titulo: "Apps Móviles",
      descripcion: "Aplicaciones nativas e híbridas",
    },
    {
      icono: Users,
      titulo: "Consultoría",
      descripcion: "Asesoramiento estratégico digital",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ¿Qué hacemos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En Oryza nos especializamos en crear soluciones digitales
            innovadoras que ayudan a las empresas a crecer y destacar en el
            mundo digital. Combinamos creatividad, tecnología y estrategia para
            entregar resultados excepcionales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviciosDestacados.map((servicio, index) => {
            const IconComponent = servicio.icono;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-black" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {servicio.titulo}
                </h3>
                <p className="text-gray-600">{servicio.descripcion}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QueHacemos;
