import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="font-inter font-800 text-6xl text-primary mb-4">404</h1>
          <h2 className="font-inter font-600 text-2xl text-foreground mb-4">
            Página no encontrada
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            La página que buscas no existe o ha sido movida. Regresa al catálogo para encontrar nuestras playeras urbanas.
          </p>
          
          <div className="space-y-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/">
                Volver al Inicio
              </Link>
            </Button>
            
            <div className="text-center">
              <Link 
                to="/" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                ← Ir al catálogo de playeras
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
