import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

interface TestimonialFormProps {
  userId: number;
  onSubmitSuccess: () => void;
}

export default function TestimonialForm({ userId, onSubmitSuccess }: TestimonialFormProps) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (text.trim() === "") {
      setError("Por favor, ingresa tu comentario");
      return;
    }
    
    if (rating === 0) {
      setError("Por favor, selecciona una calificación");
      return;
    }
    
    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          text,
          rating,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Error al enviar el testimonio");
      }
      
      setText("");
      setRating(0);
      onSubmitSuccess();
    } catch (err) {
      setError("Ocurrió un error al enviar tu testimonio. Inténtalo de nuevo.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-bold text-lg">Deja tu opinión</h3>
      
      <div className="space-y-2">
        <label htmlFor="rating" className="block font-medium">
          Calificación
        </label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-7 w-7 cursor-pointer ${star <= (hoveredRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
            />
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="text" className="block font-medium">
          Tu comentario
        </label>
        <Textarea
          id="text"
          placeholder="Comparte tu experiencia con nosotros..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-32"
        />
      </div>
      
      {error && <p className="text-red-500 text-sm">{error}</p>}
      
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Enviando..." : "Enviar testimonio"}
      </Button>
    </form>
  );
}
