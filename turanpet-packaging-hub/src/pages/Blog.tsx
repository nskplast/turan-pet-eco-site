import { Calendar, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const posts = [
    {
      title: "Преимущества ПЭТ-ленты для промышленной упаковки",
      excerpt: "ПЭТ-лента — это современное решение для надёжной фиксации грузов. Рассказываем о главных преимуществах и областях применения.",
      date: "15 марта 2025",
      category: "Продукция",
    },
    {
      title: "Как выбрать стрейч-плёнку: руководство для покупателей",
      excerpt: "Выбор стрейч-плёнки зависит от типа груза и способа упаковки. Разбираем основные характеристики и критерии выбора.",
      date: "10 марта 2025",
      category: "Рекомендации",
    },
    {
      title: "Экологичность производства: полный цикл переработки ПЭТ",
      excerpt: "Наше производство — это пример экологически ответственного подхода. Полный цикл переработки от бутылки до готовой ленты.",
      date: "5 марта 2025",
      category: "Экология",
    },
    {
      title: "Расширение географии поставок: новые регионы России",
      excerpt: "TuranPET продолжает развиваться и расширять географию своих поставок. Теперь наша продукция доступна ещё в большем количестве регионов.",
      date: "28 февраля 2025",
      category: "Новости компании",
    },
    {
      title: "Контроль качества на производстве: как мы это делаем",
      excerpt: "Качество продукции — наш главный приоритет. Рассказываем о многоступенчатой системе контроля на всех этапах производства.",
      date: "20 февраля 2025",
      category: "Производство",
    },
    {
      title: "Инновации в упаковочной индустрии: тренды 2025 года",
      excerpt: "Упаковочная индустрия стремительно развивается. Обзор главных трендов и инноваций текущего года.",
      date: "15 февраля 2025",
      category: "Тренды",
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
              Блог и новости
            </h1>
            <p className="text-xl text-muted-foreground">
              Актуальные статьи о продукции, производстве и новости компании TuranPET
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <button className="inline-flex items-center text-primary text-sm font-semibold hover:gap-3 transition-all duration-300">
                  Читать далее <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </article>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold">
                1
              </button>
              <button className="px-4 py-2 rounded-md border border-border hover:border-primary/50 transition-colors">
                2
              </button>
              <button className="px-4 py-2 rounded-md border border-border hover:border-primary/50 transition-colors">
                3
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
