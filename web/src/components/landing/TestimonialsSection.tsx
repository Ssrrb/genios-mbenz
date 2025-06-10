import TestimonialCard from "@/components/landing/TestimonialCard";

const testimonials = [
  {
    name: "Sebastian Rojas",
    date: "2023-08-15",
    text: "El servicio en Genios MBenz es excepcional. El personal es conocedor y amable, y cuidaron muy bien de mi coche.",
    rating: 5,
    likes: 5,
    dislikes: 1,
    avatarSrc: "/avatars/01.png",
    avatarFallback: "SR",
  },
  {
    name: "Martha Barrios",
    date: "2023-07-22",
    text: "He estado trayendo mi Mercedes aquí durante años, y siempre me impresiona la calidad del servicio y la atención al detalle.",
    rating: 5,
    likes: 3,
    dislikes: 0,
    avatarSrc: "/avatars/02.png",
    avatarFallback: "MB",
  },
  {
    name: "Diego Fernandez",
    date: "2023-06-10",
    text: "Buen servicio en general, pero la sala de espera podría ser más cómoda.",
    rating: 4,
    likes: 2,
    dislikes: 1,
    avatarSrc: "/avatars/03.png",
    avatarFallback: "DF",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Testimonios de Clientes</h2>
        </div>
        <div className="mt-8 max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
