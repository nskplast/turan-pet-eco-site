import { CheckCircle, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import stretchFilm from "@/assets/stretch-film.jpg";

const StretchFilm = () => {
  const specifications = [
    { parameter: "Ширина", value: "500 мм" },
    { parameter: "Толщина", value: "17 мкм, 20 мкм, 23 мкм" },
    { parameter: "Длина в рулоне", value: "от 150 до 300 м" },
    { parameter: "Вес рулона", value: "от 2 до 3 кг" },
    { parameter: "Цвет", value: "Прозрачный, чёрный" },
    { parameter: "Тип намотки", value: "Ручная, машинная" },
  ];

  const applications = [
    "Упаковка паллетированных грузов",
    "Защита товаров от влаги и пыли",
    "Стабилизация грузов при транспортировке",
    "Упаковка мебели при переезде",
    "Защита строительных материалов",
    "Фиксация товаров на складе",
  ];

  const advantages = [
    {
      title: "Высокая эластичность",
      description: "Плотно облегает груз любой формы",
    },
    {
      title: "Прозрачность",
      description: "Позволяет визуально контролировать содержимое",
    },
    {
      title: "Влагозащита",
      description: "Надёжно защищает от влаги и загрязнений",
    },
    {
      title: "Универсальность",
      description: "Подходит для ручной и машинной упаковки",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-secondary hero-pattern">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/products" className="hover:text-primary transition-colors">
              Продукция
            </Link>
            <span>/</span>
            <span className="text-foreground">Стрейч-плёнка</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Стрейч-плёнка
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Эластичная полиэтиленовая плёнка для упаковки и защиты паллетированных грузов
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:sbs@turanpet.ru">
                    Запросить цену <ArrowRight className="ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contacts">Связаться с нами</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={stretchFilm}
                alt="Стрейч-плёнка TuranPET"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="container-wide">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Преимущества стрейч-плёнки
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Технические характеристики
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl border border-border">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-foreground">Параметр</th>
                  <th className="text-left p-4 font-semibold text-foreground">Значение</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="p-4 font-medium text-foreground">{spec.parameter}</td>
                    <td className="p-4 text-muted-foreground">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-20">
        <div className="container-wide">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Каталог стрейч-плёнки
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Стрейч-плёнка 17 мкм", thickness: "17 мкм", type: "Ручная", link: "/products/stretch-film/17" },
              { name: "Стрейч-плёнка 20 мкм", thickness: "20 мкм", type: "Ручная/Машинная", link: "/products/stretch-film/20" },
              { name: "Стрейч-плёнка 23 мкм", thickness: "23 мкм", type: "Машинная", link: "/products/stretch-film/23" },
            ].map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Толщина:</span> {product.thickness}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Тип:</span> {product.type}
                  </p>
                </div>
                <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                  Подробнее <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-wide">
          <div className="p-12 rounded-2xl bg-secondary text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Заказать стрейч-плёнку
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для расчёта стоимости и оформления заказа
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:sbs@turanpet.ru">
                Отправить запрос <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StretchFilm;
