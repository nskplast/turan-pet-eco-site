import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Hammer, TreePine, Truck, Wheat, Factory } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: <Factory className="h-12 w-12" />,
      title: "Металлургия",
      description: "Упаковка металлопроката, труб, арматуры",
      details: ["Стальные листы и рулоны", "Трубы различного диаметра", "Арматура и проволока", "Цветные металлы"],
      color: "text-slate-600"
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Стройматериалы",
      description: "Упаковка кирпича, блоков, изоляционных материалов",
      details: ["Строительные блоки", "Кирпич и плитка", "Изоляционные материалы", "Сыпучие материалы"],
      color: "text-amber-600"
    },
    {
      icon: <TreePine className="h-12 w-12" />,
      title: "Деревообработка",
      description: "Упаковка пиломатериалов, фанеры, мебели",
      details: ["Доски и брус", "Фанера и OSB", "Готовая мебель", "Паркет и ламинат"],
      color: "text-green-600"
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Логистика",
      description: "Крепление грузов при транспортировке",
      details: ["Паллетные грузы", "Контейнерные перевозки", "Сборные грузы", "Крупногабаритные товары"],
      color: "text-blue-600"
    },
    {
      icon: <Wheat className="h-12 w-12" />,
      title: "Сельское хозяйство",
      description: "Упаковка кормов, удобрений, сельхозпродукции",
      details: ["Мешки с зерном", "Упаковка кормов", "Минеральные удобрения", "Тюки сена и соломы"],
      color: "text-yellow-600"
    },
    {
      icon: <Hammer className="h-12 w-12" />,
      title: "Промышленность",
      description: "Общепромышленное применение",
      details: ["Машиностроение", "Химическая промышленность", "Пищевое производство", "Текстильная отрасль"],
      color: "text-purple-600"
    }
  ];

  return (
    <section id="industries" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Отрасли применения
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ПЭТ-лента TURAN используется в различных отраслях промышленности для надёжной упаковки 
            и крепления грузов. Высокая прочность и универсальность применения.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group border border-border hover:border-primary/20 bg-card">
              <CardHeader className="text-center pb-4">
                <div className={`${industry.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                  {industry.icon}
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {industry.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {industry.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-2">
                  {industry.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0 group-hover:bg-primary-dark transition-colors"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-accent/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Не нашли свою отрасль?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            ПЭТ-лента подходит для большинства задач упаковки и крепления. 
            Свяжитесь с нами, и мы подберём оптимальное решение для вашей отрасли.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+99312345678" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors font-medium"
            >
              Позвонить нам
            </a>
            <a 
              href="mailto:info@turanpet.tm" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
            >
              Написать письмо
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;