import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Главная", href: "/" },
    { name: "Продукция", href: "#products" },
    { name: "Отрасли", href: "#industries" },
    { name: "Преимущества", href: "#advantages" },
    { name: "О компании", href: "#about" },
    { name: "Контакты", href: "#contacts" }
  ];

  const products = [
    { name: "ПЭТ-лента стандартная", href: "#" },
    { name: "Джамбо-рулоны", href: "#" },
    { name: "Ручные инструменты", href: "#" },
    { name: "Пневматические машины", href: "#" },
    { name: "Скобы и пряжки", href: "#" },
    { name: "Запчасти", href: "#" }
  ];

  const industries = [
    { name: "Металлургия", href: "#" },
    { name: "Стройматериалы", href: "#" },
    { name: "Деревообработка", href: "#" },
    { name: "Логистика", href: "#" },
    { name: "Сельское хозяйство", href: "#" },
    { name: "Промышленность", href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
          {/* Company info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              TURAN <span className="text-primary">PET</span>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Производство экологичной ПЭТ-ленты из вторичного сырья. 
              Полный цикл переработки в Туркменистане.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/70">г. Ашхабад, Туркменистан</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+99312345678" className="text-background/70 hover:text-primary transition-colors">
                  +993 12 34 56 78
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@turanpet.tm" className="text-background/70 hover:text-primary transition-colors">
                  info@turanpet.tm
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Продукция</h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <a 
                    href={product.href} 
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Отрасли</h3>
            <ul className="space-y-2">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a 
                    href={industry.href} 
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {industry.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter subscription */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-lg mb-2">Будьте в курсе новостей</h3>
            <p className="text-background/70 text-sm mb-4">
              Подписывайтесь на новости о продукции и специальных предложениях
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="default" className="bg-primary hover:bg-primary-dark px-6">
                Подписаться
              </Button>
            </div>
          </div>
        </div>

        {/* Social links and copyright */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/70 text-sm">
              © 2024 TURAN PET. Все права защищены.
            </div>
            
            {/* Social media */}
            <div className="flex items-center gap-4">
              <span className="text-background/70 text-sm mr-2">Мы в соцсетях:</span>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            
            <div className="flex gap-4 text-background/70 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;