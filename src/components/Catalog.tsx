import ProductCard from './ProductCard';
import designerTshirt from '@/assets/designer-tshirt.jpg';
import trendyTshirt from '@/assets/trendy-tshirt.jpg';
import oversizeTshirt from '@/assets/oversize-tshirt.jpg';

const Catalog = () => {
  const categories = [
    {
      id: 'designer',
      title: 'Playera Minimalista Pro',
      category: 'Playeras de Diseñador',
      image: designerTshirt,
      description: 'Diseño exclusivo con corte premium y acabados de lujo. Perfecta para un look sofisticado.',
      sizes: ['CH', 'M', 'G', 'XL'],
      linkTo: '/categoria/diseñador'
    },
    {
      id: 'trending',
      title: 'Playera Urban Street',
      category: 'Playeras en Tendencia',
      image: trendyTshirt,
      description: 'Las últimas tendencias en moda urbana. Diseños actuales que marcan la diferencia.',
      sizes: ['CH', 'M', 'G', 'XL'],
      linkTo: '/categoria/tendencia'
    },
    {
      id: 'oversize',
      title: 'Playera Oversize Comfort',
      category: 'Playeras Oversize Mujer',
      image: oversizeTshirt,
      description: 'Comodidad y estilo en un corte relajado. Ideal para un look casual y moderno.',
      sizes: ['CH', 'M', 'G', 'XL'],
      linkTo: '/categoria/oversize'
    }
  ];

  return (
    <section id="catalogo" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-inter font-700 text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Nuestro Catálogo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubre nuestras tres líneas principales de playeras urbanas. Cada diseño refleja calidad y estilo único.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {categories.map((category) => (
            <ProductCard
              key={category.id}
              {...category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;