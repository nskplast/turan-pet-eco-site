import { CheckCircle, Users, Award, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import productionFacility from "@/assets/production-facility.jpg";

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Качество",
      description: "Строгий контроль на всех этапах производства гарантирует высокое качество нашей продукции",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Профессионализм",
      description: "Опытная команда специалистов обеспечивает надёжность и стабильность поставок",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Инновации",
      description: "Современное оборудование и технологии позволяют производить продукцию мирового уровня",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Надёжность",
      description: "Многолетний опыт работы и проверенные партнёрства гарантируют стабильность",
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
              О компании
            </h1>
            <p className="text-xl text-muted-foreground">
              Современное российско-туркменское предприятие по производству упаковочной продукции высшего качества
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                TuranPET — ваш надёжный партнёр в упаковочных решениях
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TuranPET — это современное российско-туркменское предприятие, специализирующееся на производстве 
                  высококачественных упаковочных материалов. Мы осуществляем полный цикл переработки ПЭТ-бутылок: 
                  от сбора и переработки во флекс до изготовления готовой ПЭТ-ленты.
                </p>
                <p>
                  Наше производство оснащено современным оборудованием, что позволяет нам выпускать продукцию, 
                  соответствующую самым высоким стандартам качества. Мы тщательно контролируем каждый этап 
                  производственного процесса — от поступления сырья до отгрузки готовой продукции.
                </p>
                <p>
                  Основное представительство и складские помещения компании находятся в Новосибирске, что позволяет 
                  нам оперативно обслуживать клиентов по всей России. Мы также осуществляем поставки в европейские 
                  страны, обеспечивая своим партнёрам высокий уровень сервиса и надёжность поставок.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={productionFacility}
                alt="Производство TuranPET"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Наши ценности
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 p-12 rounded-2xl bg-secondary">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Контроль качества</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">РФ + Европа</div>
              <div className="text-muted-foreground">География поставок</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
