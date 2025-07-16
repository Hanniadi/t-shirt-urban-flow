import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import designerTshirt from '@/assets/designer-tshirt.jpg';
import trendyTshirt from '@/assets/trendy-tshirt.jpg';
import oversizeTshirt from '@/assets/oversize-tshirt.jpg';

// Mock data for different categories
const categoryData = {
  diseñador: {
    title: 'Playeras de Diseñador',
    description: 'Diseños exclusivos con corte premium y acabados de lujo.',
    products: [
      {
        id: '1',
        name: 'Playera Minimalista Pro',
        image: designerTshirt,
        description: 'Diseño premium con acabados de lujo'
      },
      {
        id: '2',
        name: 'Playera Geometric Black',
        image: designerTshirt,
        description: 'Estampado geométrico exclusivo'
      },
      {
        id: '3',
        name: 'Playera Classic Elite',
        image: designerTshirt,
        description: 'Elegancia en su máxima expresión'
      },
      {
        id: '4',
        name: 'Playera Modern Art',
        image: designerTshirt,
        description: 'Arte moderno en cada detalle'
      }
    ]
  },
  tendencia: {
    title: 'Playeras en Tendencia',
    description: 'Las últimas tendencias en moda urbana que marcan la diferencia.',
    products: [
      {
        id: '5',
        name: 'Playera Urban Street',
        image: trendyTshirt,
        description: 'Estilo urbano contemporáneo'
      },
      {
        id: '6',
        name: 'Playera Vintage Vibes',
        image: trendyTshirt,
        description: 'Nostalgia con toque moderno'
      },
      {
        id: '7',
        name: 'Playera Retro Wave',
        image: trendyTshirt,
        description: 'Ondas retro para el presente'
      },
      {
        id: '8',
        name: 'Playera City Lights',
        image: trendyTshirt,
        description: 'La energía de la ciudad'
      }
    ]
  },
  oversize: {
    title: 'Playeras Oversize Mujer',
    description: 'Comodidad y estilo en un corte relajado ideal para un look casual.',
    products: [
      {
        id: '9',
        name: 'Playera Oversize Comfort',
        image: oversizeTshirt,
        description: 'Máxima comodidad y estilo'
      },
      {
        id: '10',
        name: 'Playera Relaxed Fit',
        image: oversizeTshirt,
        description: 'Corte relajado perfecto'
      },
      {
        id: '11',
        name: 'Playera Casual Chic',
        image: oversizeTshirt,
        description: 'Elegancia casual para el día a día'
      },
      {
        id: '12',
        name: 'Playera Soft Cotton',
        image: oversizeTshirt,
        description: 'Algodón suave y corte favorecedor'
      }
    ]
  }
};

const sizes = ['CH', 'M', 'G', 'XL'];

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const category = categoryName ? categoryData[categoryName as keyof typeof categoryData] : null;

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Categoría no encontrada</h1>
          <Link to="/" className="text-primary hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const generateWhatsAppMessage = (productName: string) => {
    return `Hola! Me interesa la ${productName} de JM. ¿Podrías darme más información sobre disponibilidad y precios?`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Button
              asChild
              variant="ghost"
              className="mb-4 hover:bg-muted"
            >
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al catálogo</span>
              </Link>
            </Button>
          </div>

          {/* Category Header */}
          <div className="text-center mb-12">
            <h1 className="font-inter font-700 text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
              {category.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {category.products.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </CardHeader>

                <CardContent className="p-4 space-y-3">
                  <h3 className="font-inter font-600 text-lg text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>

                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Tallas disponibles:</p>
                    <div className="flex flex-wrap gap-1">
                      {sizes.map((size) => (
                        <span
                          key={size}
                          className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <Button
                    asChild
                    className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white font-inter font-500"
                  >
                    <a
                      href={`https://wa.me/524451359723?text=${encodeURIComponent(generateWhatsAppMessage(product.name))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Comprar por WhatsApp</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-dark rounded-2xl p-8 lg:p-12">
            <h2 className="font-inter font-700 text-2xl lg:text-3xl text-white mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
              Contáctanos por WhatsApp y te ayudaremos a encontrar la playera perfecta para ti.
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp-hover text-white font-inter font-600 text-base px-8 py-6 h-auto"
            >
              <a
                href="https://wa.me/524451359723?text=Hola! Me gustaría ver más opciones de playeras en la categoría de diseñador"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chatear por WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;