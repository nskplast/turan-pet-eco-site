import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Package, Wrench, Settings } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "ПЭТ-лента",
      description: "Основная продукция для упаковки и стяжки грузов",
      features: ["Ширина: 9-32 мм", "Толщина: 0.5-1.27 мм", "Различные цвета", "Рулоны 200-2000 м"],
      applications: ["Металлургия", "Стройматериалы", "Логистика"],
      popular: true
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Джамбо-рулоны",
      description: "Большие рулоны для промышленного использования",
      features: ["Длина до 9000 м", "Экономия на перемотке", "Специальная упаковка", "Оптовые скидки"],
      applications: ["Крупные производства", "Автоматические линии"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Инструменты и оборудование",
      description: "Скобы, пряжки и упаковочные машины",
      features: ["Ручные инструменты", "Пневматические машины", "Скобы и пряжки", "Запчасти и сервис"],
      applications: ["Комплексные решения", "Техническая поддержка"]
    }
  ];

  return (
    <section id="products" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наша продукция
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный ассортимент ПЭТ-ленты, инструментов и оборудования для упаковки. 
            Качественные решения для всех отраслей промышленности.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow bg-card">
              {product.popular && (
                <Badge className="absolute -top-3 left-4 bg-primary text-primary-foreground">
                  Хит продаж
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="text-primary mb-4 flex justify-center">
                  {product.icon}
                </div>
                <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Характеристики:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Применение:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button variant="default" className="w-full bg-primary hover:bg-primary-dark">
                    Запросить цену
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Посмотреть весь каталог
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;