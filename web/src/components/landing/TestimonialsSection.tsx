"use client";

import { useState, useEffect } from "react";
import TestimonialCard from "@/components/landing/TestimonialCard";
import TestimonialForm from "@/components/landing/TestimonialForm";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  text: string;
  rating: number;
  likes: number;
  dislikes: number;
  createdAt: string;
  user?: {
    name: string;
    email: string;
  };
}

// Mock user ID for demo purposes - in a real app, this would come from authentication
const MOCK_USER_ID = 1;

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  const fetchTestimonials = async () => {
    setIsLoading(true);
    setError("");
    
    try {
      const response = await fetch("/api/testimonials");
      
      if (!response.ok) {
        throw new Error("Error al cargar los testimonios");
      }
      
      const data = await response.json();
      setTestimonials(data);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
      setError("No se pudieron cargar los testimonios. Por favor, inténtalo de nuevo más tarde.");
      
      // Fall back to mock data if API fails
      setTestimonials([
        {
          id: 1,
          text: "El servicio en Genios MBenz es excepcional. El personal es conocedor y amable, y cuidaron muy bien de mi coche.",
          rating: 5,
          likes: 5,
          dislikes: 1,
          createdAt: "2023-08-15T14:30:00Z",
          user: {
            name: "Sebastian Rojas",
            email: "sebastian@example.com"
          }
        },
        {
          id: 2,
          text: "He estado trayendo mi Mercedes aquí durante años, y siempre me impresiona la calidad del servicio y la atención al detalle.",
          rating: 5,
          likes: 3,
          dislikes: 0,
          createdAt: "2023-07-22T10:15:00Z",
          user: {
            name: "Martha Barrios",
            email: "martha@example.com"
          }
        },
        {
          id: 3,
          text: "Buen servicio en general, pero la sala de espera podría ser más cómoda.",
          rating: 4,
          likes: 2,
          dislikes: 1,
          createdAt: "2023-06-10T16:45:00Z",
          user: {
            name: "Diego Fernandez",
            email: "diego@example.com"
          }
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleTestimonialSubmitSuccess = () => {
    setShowForm(false);
    fetchTestimonials(); // Refresh the testimonials list
  };

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Testimonios de Clientes</h2>
          <p className="mt-2 text-lg text-gray-600">Lo que dicen nuestros clientes sobre nosotros</p>
        </div>
        
        {!showForm ? (
          <div className="mt-8 text-center">
            <Button onClick={() => setShowForm(true)}>
              Deja tu opinión
            </Button>
          </div>
        ) : (
          <div className="mt-8 max-w-2xl mx-auto">
            <TestimonialForm 
              userId={MOCK_USER_ID} 
              onSubmitSuccess={handleTestimonialSubmitSuccess} 
            />
            <div className="mt-4 text-center">
              <Button variant="outline" onClick={() => setShowForm(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        )}
        
        <div className="mt-12 max-w-3xl mx-auto">
          {isLoading ? (
            <p className="text-center text-gray-500">Cargando testimonios...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : testimonials.length === 0 ? (
            <p className="text-center text-gray-500">No hay testimonios todavía. ¡Sé el primero en compartir tu experiencia!</p>
          ) : (
            testimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                id={testimonial.id}
                name={testimonial.user?.name || "Usuario Anónimo"}
                date={testimonial.createdAt}
                text={testimonial.text}
                rating={testimonial.rating}
                likes={testimonial.likes}
                dislikes={testimonial.dislikes}
                avatarFallback={(testimonial.user?.name || "UA").substring(0, 2)}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
