import { Recycle, CheckCircle, Factory, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import productionFacility from "@/assets/production-facility.jpg";

const Production = () => {
  const stages = [
    {
      number: "01",
      title: "Сбор и сортировка",
      description: "Сбор ПЭТ-бутылок и тщательная сортировка по типам пластика",
    },
    {
      number: "02",
      title: "Переработка во флекс",
      description: "Измельчение и очистка пластика с получением высококачественного флекса",
    },
    {
      number: "03",
      title: "Производство ленты",
      description: "Экструзия и формование ПЭТ-ленты на современном оборудовании",
    },
    {
      number: "04",
      title: "Контроль качества",
      description: "Многоступенчатая проверка соответствия всем стандартам качества",
    },
  ];

  const features = [
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Современное оборудование",
      description: "Производственные линии от ведущих европейских производителей",
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Экологичность",
      description: "Полный цикл переработки минимизирует воздействие на окружающую среду",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Контроль качества",
      description: "Строгий контроль на каждом этапе производственного процесса",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Сертификация",
      description: "Продукция соответствует российским и международным стандартам",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-secondary hero-pattern">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Производство
            </h1>
            <p className="text-xl text-muted-foreground">
              Современные технологии и полный цикл переработки ПЭТ для производства качественной упаковочной продукции
            </p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-20">
        <div className="container-wide">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-20">
            <img
              src={productionFacility}
              alt="Производственная линия TuranPET"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <h2 className="text-4xl font-bold text-primary-foreground mb-4">
                Производственный комплекс в г. Мары, Туркменистан
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Современное предприятие с полным циклом производства от переработки сырья до готовой продукции
              </p>
            </div>
          </div>

          {/* Production Process */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Этапы производства
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stages.map((stage, index) => (
                <div
                  key={index}
                  className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-lg">
                    {stage.number}
                  </div>
                  <div className="pt-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">{stage.title}</h3>
                    <p className="text-muted-foreground text-sm">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Преимущества производства
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Control */}
          <div className="p-12 rounded-2xl bg-secondary">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-primary-foreground mb-6">
                Высокие стандарты качества
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Наша цель — стать компанией, открытой для инноваций и сотрудничества в развивающихся странах, 
                способной выдерживать сложную конкурентную среду благодаря расширяющейся рыночной сети и 
                растущему ассортименту продукции. Мы стремимся сохранять это качество, обеспечивая строгий 
                контроль на всех этапах производства.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Входной контроль сырья</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Контроль процесса</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Финальная проверка</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Production;
