import { services } from "@/lib/data";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <section id="services" className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-2 mb-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestros Servicios</h2>
        <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Mantenimiento y Reparación Integral
        </p>
                  <p className="text-[#141414] text-base font-normal leading-normal max-w-[720px]">
          Desde el mantenimiento de rutina hasta reparaciones complejas, ofrecemos una gama completa de servicios para mantener tu Mercedes Benz en óptimas condiciones.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
