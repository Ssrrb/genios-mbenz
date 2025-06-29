export default function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Contáctanos</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Visita nuestro centro de servicio en Asunción o contáctanos para
            programar tu cita.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-bold text-lg">Dirección</h3>
            <p className="text-gray-600">Solano Lopez 1024, Esq. Amistad</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Teléfono</h3>
            <p className="text-gray-600">+595 981 555966</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Correo Electrónico</h3>
            <p className="text-gray-600">bernardo.peyrat@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
