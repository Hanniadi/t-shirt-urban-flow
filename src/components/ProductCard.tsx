import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface ProductCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  sizes: string[];
  linkTo: string;
}

const ProductCard = ({ title, category, image, description, sizes, linkTo }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 bg-card">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
            {category}
          </p>
          <h3 className="font-inter font-600 text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-foreground mb-2">Tallas disponibles:</p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <span
                key={size}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          asChild
          className="w-full bg-primary hover:bg-accent font-inter font-500"
        >
          <Link to={linkTo}>
            Ver Más Modelos
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;