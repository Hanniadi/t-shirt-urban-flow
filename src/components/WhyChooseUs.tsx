import { Palette, TrendingUp, Users, Truck } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Palette,
      title: 'Diseños Exclusivos',
      description: 'Creaciones únicas que no encontrarás en ningún otro lugar. Cada diseño cuenta una historia.'
    },
    {
      icon: TrendingUp,
      title: 'Moda Actual',
      description: 'Siempre al día con las últimas tendencias urbanas. Estilos que marcan la diferencia.'
    },
    {
      icon: Users,
      title: 'Tallas para Todos',
      description: 'Amplia variedad de tallas desde CH hasta XL. Comodidad y estilo para cada cuerpo.'
    },
    {
      icon: Truck,
      title: 'Envío Nacional',
      description: 'Entregamos en toda la República Mexicana de forma segura y rápida.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-inter font-700 text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            En JM no solo vendemos playeras, creamos experiencias de moda que reflejan tu personalidad única.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-6 group-hover:bg-accent transition-colors duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="font-inter font-600 text-xl text-foreground mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;