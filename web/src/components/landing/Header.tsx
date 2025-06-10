import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CarFront } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <CarFront
            className="h-7 w-7 text-gray-900"
            aria-label="Genios MBenz logo"
          />
          <span className="text-lg font-bold">Genios MBenz</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="#services" className="hover:underline" prefetch={false}>
            Servicios
          </Link>
          <Link href="#contact" className="hover:underline" prefetch={false}>
            Contacto
          </Link>
          <Link
            href="#testimonials"
            className="hover:underline"
            prefetch={false}
          >
            Testimonios
          </Link>
        </nav>
        <a
          href="https://api.whatsapp.com/send/?phone=595981429104&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button asChild>Reservar Servicio</Button>
        </a>
      </div>
    </header>
  );
}
