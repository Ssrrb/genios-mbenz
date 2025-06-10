import ServiceCard from "@/components/landing/ServiceCard";
import CarSeatIcon from "@/components/icons/CarSeatIcon";
import PackageIcon from "@/components/icons/PackageIcon";
import PaintBrushIcon from "@/components/icons/PaintBrushIcon";
import PlugIcon from "@/components/icons/PlugIcon";
import SunIcon from "@/components/icons/SunIcon";
import WrenchIcon from "@/components/icons/WrenchIcon";

const services = [
  { 
    icon: <PaintBrushIcon />, 
    title: "Chapería & Pintura", 
    description: "Reparación de carrocería y pintura de alta calidad."
  },
  { 
    icon: <CarSeatIcon />, 
    title: "Tapicería", 
    description: "Reparación y restauración de tapicería."
  },
  { 
    icon: <PlugIcon />, 
    title: "Electricidad", 
    description: "Servicios de reparación eléctrica y electrónica."
  },
  { 
    icon: <WrenchIcon />, 
    title: "Mecánica", 
    description: "Mantenimiento y reparación mecánica general."
  },
  { 
    icon: <SunIcon />, 
    title: "Techo Corredizo", 
    description: "Reparación y mantenimiento de techos corredizos."
  },
  { 
    icon: <PackageIcon />, 
    title: "Repuestos (nuevos y usados)", 
    description: "Venta de repuestos nuevos y usados para Mercedes Benz."
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Nuestros Servicios</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Desde el mantenimiento de rutina hasta reparaciones complejas, ofrecemos una gama completa de servicios para mantener tu Mercedes Benz en óptimas condiciones.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

