import { MessageCircle, Facebook, Phone, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navigation = [
    { name: 'Inicio', href: '#' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Categorías', href: '#categorias' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="font-inter font-800 text-2xl">JM</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Playeras urbanas que definen tu estilo. Diseños exclusivos, calidad premium y la moda que necesitas para destacar.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="font-inter font-600 text-lg">Navegación</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-inter font-600 text-lg">Contacto</h4>
              <div className="space-y-3">
                <a
                  href="tel:+524451359723"
                  className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+52 1 445 135 9723</span>
                </a>
                
                <a
                  href="https://wa.me/524451359723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                
                <a
                  href="https://www.facebook.com/share/1CHWfSh6fh/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-4">
              <h4 className="font-inter font-600 text-lg">Horarios</h4>
              <div className="flex items-start space-x-2 text-primary-foreground/80 text-sm">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Lunes – Sábado</p>
                  <p>10:00 a.m. – 8:00 p.m.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} JM Urban Fashion. Todos los derechos reservados.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://wa.me/524451359723"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-whatsapp transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              
              <a
                href="https://www.facebook.com/share/1CHWfSh6fh/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;