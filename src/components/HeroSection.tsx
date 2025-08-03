import { Button } from "@/components/ui/button";
import guiaMockup from "@/assets/guia-mockup.jpg";

export function HeroSection() {
  const scrollToBuy = () => {
    document.getElementById('compra')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left fade-up order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Descubra Como{" "}
              <span className="text-gradient">Emagrecer com Leveza</span>, Prazer e
              Sem Dietas Restritivas
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Com o Guia Emagreça Comendo, você aprende como montar pratos inteligentes, 
              organizar sua rotina alimentar e emagrecer comendo de forma prazerosa, 
              prática e sustentável.
            </p>
            
            <div className="flex flex-col gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToBuy}
                className="btn-primary text-lg px-6 sm:px-8 py-4 w-full sm:w-auto"
              >
                QUERO EMAGRECER COMENDO BEM
              </Button>
              
              <div className="text-center lg:text-left">
                <p className="text-sm text-muted-foreground">
                  🔒 Guia Emagreça Comendo + 2 Bônus Exclusivos por apenas
                </p>
                <p className="price-highlight">R$ 29,90</p>
              </div>
            </div>
          </div>
          
          <div className="relative fade-up order-1 lg:order-2 flex justify-center" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <img 
                src={guiaMockup} 
                alt="Guia Emagreça Comendo - Mockup do Produto"
                className="w-full h-auto drop-shadow-2xl rounded-lg"
              />
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 bg-secondary text-secondary-foreground px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full font-bold animate-pulse text-xs sm:text-sm">
                Acesso Vitalício
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}