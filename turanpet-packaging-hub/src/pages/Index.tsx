import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Package, Recycle, ShieldCheck, Truck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/pet-strapping-hero.jpg";
import stretchFilm from "@/assets/stretch-film.jpg";
import corrugatedBoxes from "@/assets/corrugated-boxes.jpg";
import productionFacility from "@/assets/production-facility.jpg";

const Index = () => {
  const products = [
    {
      title: "ПЭТ-лента",
      description: "Высокопрочная полиэстеровая упаковочная лента для надёжной фиксации грузов",
      image: heroImage,
      link: "/products/pet-strapping",
    },
    {
      title: "Стрейч-плёнка",
      description: "Эластичная упаковочная плёнка для защиты и стабилизации паллетированных грузов",
      image: stretchFilm,
      link: "/products/stretch-film",
    },
    {
      title: "Гофрокоробки",
      description: "Прочные картонные коробки различных размеров для транспортировки и хранения",
      image: corrugatedBoxes,
      link: "/products/corrugated-boxes",
    },
  ];

  const features = [
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Экологичное производство",
      description: "Полный цикл переработки ПЭТ-бутылок от сбора до готовой продукции",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Контроль качества",
      description: "Строгий контроль на всех этапах производства",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Доставка по России",
      description: "Поставляем продукцию во все регионы России и Европу",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Полный ассортимент",
      description: "Комплексные упаковочные решения для любых задач",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary/50" />
        
        <div className="container-wide relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                    Высокое качество упаковки
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                  Упаковочные решения для вашего бизнеса
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Производство ПЭТ-ленты и стрейч-плёнки высшего качества. Поставки по всей России и Европе.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/products">
                    Каталог продукции <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contacts">Связаться с нами</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Собственное производство</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Сертифицировано</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="ПЭТ-лента TuranPET"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современное предприятие с полным циклом производства упаковочных материалов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Наша продукция
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент упаковочных материалов для любых задач
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <span className="text-primary text-sm font-semibold inline-flex items-center">
                    Подробнее <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/products">
                Весь каталог продукции <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Production CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={productionFacility}
            alt="Производство TuranPET"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/90" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Современное производство
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Полный цикл переработки ПЭТ-бутылок с контролем качества на каждом этапе
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/production">
                Узнать о производстве <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
