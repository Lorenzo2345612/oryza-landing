"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { beneficios } from "@/models/data";
import { CheckCircle } from "lucide-react";

const Beneficios = () => {
  const shouldRender = useMemo(() => beneficios.length > 0, []);

  if (!shouldRender) return null;

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Por qué elegir Oryza?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estas son las razones por las que nuestros clientes confían en
            nosotros para sus proyectos digitales más importantes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <CheckCircle
                className="text-green-400 flex-shrink-0 mt-1"
                size={20}
              />
              <span className="text-white font-medium">{beneficio}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
