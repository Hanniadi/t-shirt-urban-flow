import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const scrollToCatalog = () => {
    const element = document.getElementById('catalogo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modelo urbano con playera JM"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-inter font-800 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
          Playeras que definen
          <span className="block text-white/90">tu estilo</span>
        </h1>
        
        <p className="font-inter font-400 text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Explora nuestra colección urbana y minimalista. Diseños exclusivos que reflejan la moda actual.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToCatalog}
            size="lg"
            className="bg-white text-black hover:bg-white/90 font-inter font-600 text-base px-8 py-6 h-auto"
          >
            Ver Catálogo
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black font-inter font-600 text-base px-8 py-6 h-auto"
          >
            <a
              href="https://wa.me/524451359723?text=Hola! Me interesa conocer más sobre las playeras JM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactar WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToCatalog}
          className="animate-bounce text-white/70 hover:text-white transition-colors"
          aria-label="Scroll to catalog"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;