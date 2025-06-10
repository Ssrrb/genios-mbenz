import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  date: string;
  text: string;
  rating: number;
  likes: number;
  dislikes: number;
  avatarSrc: string;
  avatarFallback: string;
}

export default function TestimonialCard({ name, date, text, rating, likes, dislikes, avatarSrc, avatarFallback }: TestimonialCardProps) {
  return (
    <div className="border-b py-6">
      <div className="flex items-start gap-4">
        <Avatar>
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold">{name}</p>
              <p className="text-sm text-gray-500">{date}</p>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
          </div>
          <p className="mt-4 text-gray-700">{text}</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsDown className="h-4 w-4" />
              <span>{dislikes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

