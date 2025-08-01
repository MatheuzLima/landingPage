import { Button } from "@/components/ui/button";
import guiaMockup from "@/assets/guia-mockup.jpg";

export function HeroSection() {
  const scrollToBuy = () => {
    document.getElementById('compra')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Descubra Como{" "}
            <span className="text-gradient">Emagrecer com Leveza</span>, Prazer e
            Sem Dietas Restritivas
          </h1>
          
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl">
            Com o Guia Emagreça Comendo, você aprende como montar pratos inteligentes, 
            organizar sua rotina alimentar e emagrecer comendo de forma prazerosa, 
            prática e sustentável.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={scrollToBuy}
              className="btn-primary text-lg px-8 py-4"
            >
              QUERO EMAGRECER COMENDO BEM
            </Button>
            
            <div className="text-center sm:text-left">
              <p className="text-sm text-muted-foreground">
                🔒 Guia Emagreça Comendo + 2 Bônus Exclusivos por apenas
              </p>
              <p className="price-highlight">R$ 29,90</p>
            </div>
          </div>
        </div>
        
        <div className="relative fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <img 
              src={guiaMockup} 
              alt="Guia Emagreça Comendo - Mockup do Produto"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold animate-pulse">
              Acesso Vitalício
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}