import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Target, Leaf, ArrowRight } from "lucide-react";

const About = () => {
  const stats = [
    { value: "2018", label: "Год основания", icon: <Building className="h-6 w-6" /> },
    { value: "200+", label: "Клиентов в СНГ", icon: <Users className="h-6 w-6" /> },
    { value: "1000+", label: "Тонн в месяц", icon: <Target className="h-6 w-6" /> },
    { value: "100%", label: "Экологично", icon: <Leaf className="h-6 w-6" /> }
  ];

  const process = [
    {
      step: "01",
      title: "Сбор сырья",
      description: "Сбор и сортировка ПЭТ-бутылок различных цветов и размеров"
    },
    {
      step: "02", 
      title: "Переработка",
      description: "Измельчение и очистка с получением качественного ПЭТ-флекса"
    },
    {
      step: "03",
      title: "Производство",
      description: "Экструзия и формовка ленты с заданными характеристиками"
    },
    {
      step: "04",
      title: "Контроль качества",
      description: "Проверка прочности, размеров и упаковка готовой продукции"
    }
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Company intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            О компании TURAN PET
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Лидер производства ПЭТ-ленты в Туркменистане
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Мы создали полный цикл переработки ПЭТ-отходов в качественную упаковочную ленту. 
            Наша миссия — обеспечить промышленность надёжными экологичными решениями, 
            одновременно заботясь об окружающей среде.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-card">
              <CardContent className="p-6">
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Production process */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Полный цикл производства
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                    <h4 className="font-bold text-lg mb-3 text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow connector for desktop */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mission and values */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Наша миссия и ценности
            </h3>
            <div className="space-y-4">
              <div className="bg-accent/30 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">🌱 Экологическая ответственность</h4>
                <p className="text-muted-foreground text-sm">
                  Каждый день мы перерабатываем тонны ПЭТ-отходов, предотвращая их попадание на свалки.
                </p>
              </div>
              <div className="bg-accent/30 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">🔧 Качество продукции</h4>
                <p className="text-muted-foreground text-sm">
                  Строгий контроль на всех этапах обеспечивает стабильность характеристик нашей ленты.
                </p>
              </div>
              <div className="bg-accent/30 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">🤝 Партнёрство</h4>
                <p className="text-muted-foreground text-sm">
                  Долгосрочные отношения с клиентами строятся на взаимной выгоде и доверии.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-light to-accent rounded-2xl p-8 text-center">
            <h4 className="text-xl font-bold text-foreground mb-4">
              Хотите посетить наше производство?
            </h4>
            <p className="text-muted-foreground mb-6">
              Приглашаем партнёров и потенциальных клиентов на экскурсию по заводу. 
              Увидите процесс производства своими глазами.
            </p>
            <Button className="bg-primary hover:bg-primary-dark">
              Запланировать визит
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;