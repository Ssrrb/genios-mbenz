export default function HeroSection() {
  return (
    <section id="hero" className="relative h-[80vh] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://lh3.googleusercontent.com/aida-public/AB6AXuASyWCo0RUzD6AkLGJUuQyQ17d92Jg3KtzGLl1_wgFQZEYMkiYllf2jppS771xqOLmoP48A0NS-pkmm5xEB1eCN4DxvW18SX8J5Gyd9ESMheEy_sGbZejIdT8hmWZ0-v5mmXdyqUnU0y4POfShB7Xo4qtJoi1FvM3lSR6aHZjM8l7TtN1b3iMukyY72sZ7eY32qRX_KU9RTsVk0oR8IMPmg5IAvR8DeUCU6SaCbTVvh6GHKA2X54d3RYm7MbVLNYhZdOIU_sBAHUW0)",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Cuidado Experto para tu Mercedes Benz
        </h1>
        <p className="mt-4 max-w-2xl">
          Experimentá un servicio y mantenimiento sin igual para tu Mercedes
          Benz en nuestras instalaciones de vanguardia en Asunción. Nuestros
          técnicos certificados utilizan solo piezas genuinas y el equipo de
          diagnóstico más reciente para asegurar que tu vehículo funcione al
          máximo.
        </p>
      </div>
    </section>
  );
}
