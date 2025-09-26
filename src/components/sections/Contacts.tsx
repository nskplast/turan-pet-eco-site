import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send, Building, Users, FileText } from "lucide-react";

const Contacts = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Адрес производства",
      value: "г. Ашхабад, Туркменистан",
      description: "Промышленная зона, ул. Производственная, 15"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Телефон",
      value: "+993 12 34 56 78",
      description: "Отдел продаж (пн-пт 9:00-18:00)"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "info@turanpet.tm",
      description: "Коммерческие предложения и вопросы"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Режим работы",
      value: "Пн-Пт: 9:00-18:00",
      description: "Суббота: 9:00-14:00, Воскресенье: выходной"
    }
  ];

  const departments = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Отдел продаж",
      phone: "+993 12 34 56 78",
      email: "sales@turanpet.tm"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Техническая поддержка", 
      phone: "+993 12 34 56 79",
      email: "support@turanpet.tm"
    },
    {
      icon: <Building className="h-5 w-5" />,
      title: "Общие вопросы",
      phone: "+993 12 34 56 77",
      email: "info@turanpet.tm"
    }
  ];

  return (
    <section id="contacts" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Свяжитесь с нами
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Контакты TURAN PET
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Готовы ответить на ваши вопросы и предоставить персональное коммерческое предложение. 
            Работаем с клиентами по всей России и СНГ.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Наши контакты
            </h3>
            
            <div className="grid gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-primary mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <div className="text-lg font-bold text-primary mb-1">{info.value}</div>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Departments */}
            <h4 className="text-lg font-bold text-foreground mb-4">Отделы компании:</h4>
            <div className="space-y-3">
              {departments.map((dept, index) => (
                <div key={index} className="bg-card rounded-lg p-4 border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary">
                      {dept.icon}
                    </div>
                    <span className="font-medium text-foreground">{dept.title}</span>
                  </div>
                  <div className="ml-8 space-y-1">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Тел: </span>
                      <a href={`tel:${dept.phone}`} className="text-primary hover:underline">
                        {dept.phone}
                      </a>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Email: </span>
                      <a href={`mailto:${dept.email}`} className="text-primary hover:underline">
                        {dept.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Запросить коммерческое предложение
              </CardTitle>
              <CardDescription>
                Заполните форму, и мы подготовим персональное предложение с ценами и условиями поставки
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Ваше имя *
                  </label>
                  <Input placeholder="Иван Петров" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Компания *
                  </label>
                  <Input placeholder="ООО 'Ваша компания'" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Телефон *
                  </label>
                  <Input placeholder="+7 (XXX) XXX-XX-XX" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input type="email" placeholder="email@company.com" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Интересующая продукция
                </label>
                <Input placeholder="ПЭТ-лента 12мм, инструменты..." />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Объём потребления в месяц
                </label>
                <Input placeholder="100 кг, 1 тонна, 5 тонн..." />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Дополнительная информация
                </label>
                <Textarea 
                  placeholder="Укажите город доставки, особые требования, вопросы..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary-dark" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Отправить запрос
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                * Обязательные поля. Мы ответим в течение 24 часов в рабочие дни.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company details */}
        <div className="mt-12 bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Реквизиты компании
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-3">TURAN PET LLC</h4>
              <div className="space-y-2 text-muted-foreground">
                <div><span className="font-medium">Адрес:</span> г. Ашхабад, Туркменистан</div>
                <div><span className="font-medium">Регистрация:</span> № 123456789</div>
                <div><span className="font-medium">НДС:</span> TM123456789</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Банковские реквизиты</h4>
              <div className="space-y-2 text-muted-foreground">
                <div><span className="font-medium">Банк:</span> Государственный банк Туркменистана</div>
                <div><span className="font-medium">SWIFT:</span> TBANKTMLY</div>
                <div><span className="font-medium">Счёт:</span> 123456789012345</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;