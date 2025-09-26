import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Recycle, Shield, Zap, Globe, Award } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Экологичность",
      description: "Производство из 100% переработанных ПЭТ-бутылок. Вклад в сохранение окружающей среды и циркулярную экономику.",
      highlight: "100% вторичное сырьё"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Высокая прочность",
      description: "Прочность на разрыв до 400 кг. Устойчивость к погодным условиям, УФ-излучению и температурным перепадам.",
      highlight: "До 400 кг на разрыв"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Универсальность",
      description: "Совместимость с любыми автоматическими и ручными машинами. Эластичность и надёжное соединение скобами.",
      highlight: "Любые типы машин"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Полный цикл",
      description: "Собственное производство от переработки бутылок до готовой ленты. Контроль качества на всех этапах.",
      highlight: "Собственное производство"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Гибкие условия",
      description: "Индивидуальный подход к каждому клиенту. Гибкие условия оплаты и доставки для оптовых покупателей.",
      highlight: "Индивидуальный подход"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Сертифицированное качество",
      description: "Соответствие всем техническим требованиям и стандартам. Полная документация и сертификаты качества.",
      highlight: "Полная сертификация"
    }
  ];

  return (
    <section id="advantages" className="py-16 bg-primary-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Преимущества ПЭТ-ленты TURAN
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Почему более 200 компаний в СНГ выбирают нашу продукцию для упаковки 
            и крепления грузов. Качество, проверенное временем.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {advantages.map((advantage, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group bg-card border-border hover:border-primary/30">
              <CardContent className="p-6">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {advantage.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  {advantage.title}
                </h3>
                <div className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  {advantage.highlight}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical specifications */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Технические характеристики
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">9-32</div>
              <div className="text-sm text-muted-foreground">мм ширина ленты</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">0.5-1.27</div>
              <div className="text-sm text-muted-foreground">мм толщина</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">200-9000</div>
              <div className="text-sm text-muted-foreground">м длина рулона</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">≤400</div>
              <div className="text-sm text-muted-foreground">кг прочность</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;