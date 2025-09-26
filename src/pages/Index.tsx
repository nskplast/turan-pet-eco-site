import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Industries from "@/components/sections/Industries";
import Advantages from "@/components/sections/Advantages";
import About from "@/components/sections/About";
import Contacts from "@/components/sections/Contacts";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <Industries />
        <Advantages />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
