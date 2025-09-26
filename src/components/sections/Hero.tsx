import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Recycle, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/turan-pet-factory.jpg";

const Hero = () => {
  const advantages = [
    {
      icon: <Recycle className="h-6 w-6" />,
      title: "Полный цикл переработки",
      description: "От ПЭТ-бутылок до готовой упаковочной ленты"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Высокая прочность",
      description: "Выдерживает нагрузки до 400 кг на разрыв"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Доставка по СНГ",
      description: "Прямые поставки из Туркменистана"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Производственный комплекс TURAN PET в Туркменистане - завод по переработке ПЭТ-бутылок в упаковочную ленту"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-light/90 via-accent/80 to-secondary/70"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-card/90 text-primary border-primary/20 backdrop-blur-sm">
            <CheckCircle className="h-4 w-4 mr-2" />
            Экологично. Надёжно. Выгодно.
          </Badge>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Производство <span className="text-primary">ПЭТ-ленты</span>
            <br />
            из вторичного сырья
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            Полный цикл переработки ПЭТ-бутылок в качественную упаковочную ленту. 
            Производство в Туркменистане с доставкой по России и странам СНГ.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-lg px-8 shadow-primary">
              Запросить прайс-лист
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-foreground/20 text-foreground hover:bg-card/90 hover:text-primary backdrop-blur-sm">
              Скачать каталог
            </Button>
          </div>

          {/* Advantages */}
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-card/90 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-card hover:shadow-primary transition-shadow">
                <div className="text-primary mb-4 flex justify-center">
                  {advantage.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-2xl -z-10"></div>
    </section>
  );
};

export default Hero;