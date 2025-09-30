import { MapPin, Mail, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contacts = () => {
  const locations = [
    {
      name: "Производство",
      address: "г. Мары, Туркменистан",
      coords: [37.6, 61.8] as [number, number],
      type: "production",
    },
    {
      name: "Офис",
      address: "г. Новосибирск, ул. Мира 63а/1, оф.5",
      coords: [55.0415, 82.9346] as [number, number],
      type: "office",
    },
    {
      name: "Склад 1 (ПЭТ-лента и стрейч-плёнка)",
      address: "г. Новосибирск, ул. Толмачевское шоссе, д.21",
      coords: [55.0082, 82.9346] as [number, number],
      type: "warehouse",
    },
    {
      name: "Склад 2 (Гофрокартон и упаковка)",
      address: "г. Новосибирск, ул. Сибиряков-Гвардейцев, 49Б, корпус 12",
      coords: [54.9847, 82.8976] as [number, number],
      type: "warehouse",
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
              Контакты
            </h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить на ваши вопросы
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:sbs@turanpet.ru"
                      className="text-primary hover:underline"
                    >
                      sbs@turanpet.ru
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Часы работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб-Вс: Выходной</p>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div key={index} className="p-6 rounded-xl bg-card border border-border">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{location.name}</h3>
                        <p className="text-muted-foreground">{location.address}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Отправить сообщение</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Ваше сообщение"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-[0_0_30px_hsl(150_100%_45%/0.5)] hover:scale-105 transition-all duration-300"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px] border border-border">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=82.8576%2C54.9547%2C82.9746%2C55.0815&layer=mapnik&marker=55.0415%2C82.9346"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Карта офисов и складов TuranPET"
            />
          </div>
          
          {/* Location Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {locations.map((location, index) => (
              <a
                key={index}
                href={`https://www.openstreetmap.org/?mlat=${location.coords[0]}&mlon=${location.coords[1]}&zoom=15`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{location.address}</p>
                    <span className="text-primary text-xs mt-2 inline-block">Открыть на карте →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
