import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

interface TestimonialCardProps {
  id: number;
  name: string;
  date: string; // ISO string or Date object
  text: string;
  rating: number;
  likes: number;
  dislikes: number;
  avatarSrc?: string;
  avatarFallback: string;
}

export default function TestimonialCard({ id, name, date, text, rating, likes, dislikes, avatarSrc, avatarFallback }: TestimonialCardProps) {
  const [likesCount, setLikesCount] = useState(likes);
  const [dislikesCount, setDislikesCount] = useState(dislikes);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userVote, setUserVote] = useState<'like' | 'dislike' | null>(null);
  
  // Format the date as "X time ago" (e.g., "2 days ago")
  const formattedDate = formatDistanceToNow(new Date(date), { addSuffix: true, locale: es });
  
  const handleVote = async (isLike: boolean) => {
    if (isSubmitting) return;
    
    // Prevent double voting
    if ((isLike && userVote === 'like') || (!isLike && userVote === 'dislike')) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`/api/testimonials/${id}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isLike }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setLikesCount(data.likes);
        setDislikesCount(data.dislikes);
        setUserVote(isLike ? 'like' : 'dislike');
      }
    } catch (error) {
      console.error("Error voting on testimonial:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="border-b py-6">
      <div className="flex items-start gap-4">
        <Avatar>
          {avatarSrc ? <AvatarImage src={avatarSrc} alt={name} /> : null}
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold">{name}</p>
              <p className="text-sm text-gray-500">{formattedDate}</p>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
          </div>
          <p className="mt-4 text-gray-700">{text}</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            <button
              onClick={() => handleVote(true)}
              disabled={isSubmitting}
              className={`flex items-center gap-1 ${userVote === 'like' ? 'text-blue-500 font-medium' : ''}`}
            >
              <ThumbsUp className={`h-4 w-4 ${userVote === 'like' ? 'fill-blue-500' : ''}`} />
              <span>{likesCount}</span>
            </button>
            <button
              onClick={() => handleVote(false)}
              disabled={isSubmitting}
              className={`flex items-center gap-1 ${userVote === 'dislike' ? 'text-red-500 font-medium' : ''}`}
            >
              <ThumbsDown className={`h-4 w-4 ${userVote === 'dislike' ? 'fill-red-500' : ''}`} />
              <span>{dislikesCount}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

