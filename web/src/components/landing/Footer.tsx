import Link from "next/link";
import { Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex gap-4 text-sm text-gray-600">
          <Link href="#" className="hover:underline" prefetch={false}>
            Política de Privacidad
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Términos de Servicio
          </Link>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" prefetch={false}>
            <Twitter className="h-6 w-6 text-gray-600 hover:text-gray-900" />
          </Link>
          <Link href="#" prefetch={false}>
            <Instagram className="h-6 w-6 text-gray-600 hover:text-gray-900" />
          </Link>
          <Link href="#" prefetch={false}>
            <Facebook className="h-6 w-6 text-gray-600 hover:text-gray-900" />
          </Link>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Genios MBenz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

