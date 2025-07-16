import { MessageCircle, Phone, Facebook, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+52 1 445 135 9723',
      href: 'tel:+524451359723',
      description: 'Llámanos directamente'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+52 1 445 135 9723',
      href: 'https://wa.me/524451359723?text=Hola! Me interesa conocer más sobre las playeras JM',
      description: 'Chat directo y rápido'
    },
    {
      icon: Facebook,
      title: 'Facebook',
      value: 'JM Urban Fashion',
      href: 'https://www.facebook.com/share/1CHWfSh6fh/?mibextid=wwXIfr',
      description: 'Síguenos en Facebook'
    },
    {
      icon: Clock,
      title: 'Horarios',
      value: 'Lun–Sab, 10:00 a.m. – 8:00 p.m.',
      href: null,
      description: 'Horarios de atención'
    }
  ];

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-inter font-700 text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ¿Tienes preguntas sobre nuestras playeras? Estamos aquí para ayudarte. Contáctanos por WhatsApp para atención inmediata.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-inter font-600 text-lg text-foreground mb-2">
                    {contact.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {contact.description}
                  </p>
                  
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm font-medium text-primary hover:text-accent transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">
                      {contact.value}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="text-center bg-gradient-dark rounded-2xl p-8 lg:p-12">
          <h3 className="font-inter font-700 text-2xl lg:text-3xl text-white mb-4">
            ¿Listo para encontrar tu playera perfecta?
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
            Escríbenos por WhatsApp y te ayudaremos a elegir el modelo ideal para ti.
          </p>
          
          <Button
            asChild
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp-hover text-white font-inter font-600 text-base px-8 py-6 h-auto"
          >
            <a
              href="https://wa.me/524451359723?text=Hola! Me interesa conocer más sobre las playeras JM"
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
    </section>
  );
};

export default Contact;