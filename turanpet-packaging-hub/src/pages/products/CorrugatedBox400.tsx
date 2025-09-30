import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import corrugatedBoxes from "@/assets/corrugated-boxes.jpg";

const CorrugatedBox400 = () => {
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
            <Link to="/products/corrugated-boxes" className="hover:text-primary transition-colors">
              Гофрокоробки
            </Link>
            <span>/</span>
            <span className="text-foreground">Коробка 400x300x300</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Коробка 400x300x300
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Универсальная гофрокоробка среднего размера для различных товаров
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
                src={corrugatedBoxes}
                alt="Коробка 400x300x300 TuranPET"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Технические характеристики
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-xl border border-border">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-foreground">Параметр</th>
                    <th className="text-left p-4 font-semibold text-foreground">Значение</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-foreground">Размер</td>
                    <td className="p-4 text-muted-foreground">400x300x300 мм</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-foreground">Тип гофры</td>
                    <td className="p-4 text-muted-foreground">Т23</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-foreground">Плотность</td>
                    <td className="p-4 text-muted-foreground">400 г/м²</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-foreground">Допнагрузка</td>
                    <td className="p-4 text-muted-foreground">до 25 кг</td>
                  </tr>
                  <tr className="border-b border-border last:border-0">
                    <td className="p-4 font-medium text-foreground">Цвет</td>
                    <td className="p-4 text-muted-foreground">Бурый</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-card rounded-xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Применение</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                  Упаковка товаров для отправки
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                  Переезды и перевозки
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                  Упаковка электроники
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-wide">
          <div className="p-12 rounded-2xl bg-secondary text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Заказать коробку 400x300x300
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

export default CorrugatedBox400;
