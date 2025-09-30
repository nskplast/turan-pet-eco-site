import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/pet-strapping-hero.jpg";
import stretchFilm from "@/assets/stretch-film.jpg";
import corrugatedBoxes from "@/assets/corrugated-boxes.jpg";
import staples from "@/assets/staples.jpg";
import tools from "@/assets/tools.jpg";

const Products = () => {
  const categories = [
    {
      title: "ПЭТ-лента",
      description: "Высокопрочная полиэстеровая упаковочная лента для промышленной упаковки",
      image: heroImage,
      link: "/products/pet-strapping",
      features: ["Различная ширина и толщина", "Высокая прочность", "Устойчивость к растяжению"],
    },
    {
      title: "Стрейч-плёнка",
      description: "Эластичная полиэтиленовая плёнка для упаковки и защиты паллетированных грузов",
      image: stretchFilm,
      link: "/products/stretch-film",
      features: ["Ручная и машинная намотка", "Различная толщина", "Высокая прозрачность"],
    },
    {
      title: "Гофрокоробки",
      description: "Картонная упаковка различных размеров для транспортировки и хранения товаров",
      image: corrugatedBoxes,
      link: "/products/corrugated-boxes",
      features: ["Стандартные и нестандартные размеры", "Различная прочность", "Возможна печать"],
    },
    {
      title: "Скобы",
      description: "Металлические скобы для крепления ПЭТ-ленты различных типов и размеров",
      image: staples,
      link: "/products/staples",
      features: ["Различные размеры", "Высокая прочность", "Совместимость со всеми типами лент"],
    },
    {
      title: "Инструмент",
      description: "Профессиональный инструмент для упаковки: натяжители, закаточные устройства",
      image: tools,
      link: "/products/tools",
      features: ["Ручной и пневматический инструмент", "Высокая надёжность", "Простота использования"],
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
              Каталог продукции
            </h1>
            <p className="text-xl text-muted-foreground">
              Широкий ассортимент упаковочных материалов высокого качества для различных отраслей промышленности
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>

                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={category.link}
                    className="inline-flex items-center text-primary font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Подробнее <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Не нашли нужный продукт?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Свяжитесь с нами, и мы подберём оптимальное решение для ваших задач
            </p>
            <a
              href="mailto:sbs@turanpet.ru"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-[0_0_30px_hsl(150_100%_45%/0.5)] hover:scale-105 transition-all duration-300"
            >
              Связаться с нами <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
