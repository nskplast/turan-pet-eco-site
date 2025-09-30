import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-primary/20">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">TP</span>
              </div>
              <div>
                <div className="text-lg font-bold text-primary">TuranPET</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Современное российско-туркменское предприятие по производству упаковочной продукции высшего качества.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Продукция
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/production" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Производство
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="text-primary mt-1 flex-shrink-0" />
                <a href="mailto:sbs@turanpet.ru" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  sbs@turanpet.ru
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  г. Новосибирск,<br />ул. Мира 63а/1, оф.5
                </span>
              </li>
            </ul>
          </div>

          {/* Production */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Производство</h3>
            <div className="flex items-start space-x-2">
              <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">
                г. Мары, Туркменистан
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TuranPET. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
