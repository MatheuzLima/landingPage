import { Button } from "@/components/ui/button";

export function PricingSection() {
  const handleBuyClick = () => {
    // Aqui você pode integrar com o seu gateway de pagamento
    window.open('https://pay.kiwify.com.br/seu-link-de-pagamento', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-muted/20" id="compra">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Oferta Especial - <span className="text-gradient">Últimas Vagas!</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Garante sua vaga com desconto especial por tempo limitado
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="card-glass p-6 lg:p-8 md:p-12 text-center border-2 border-primary/50 fade-up">
            <div className="mb-8">
              <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full inline-block mb-4 font-bold">
                🔥 OFERTA LIMITADA
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Guia Emagreça Comendo</h3>
              
              <div className="mb-6">
                <p className="text-lg text-muted-foreground mb-2">De <span className="line-through">R$ 97,00</span> por apenas:</p>
                <p className="price-highlight text-5xl lg:text-6xl">R$ 29,90</p>
                <p className="text-sm text-muted-foreground">pagamento único</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span>Guia Emagreça Comendo completo</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span>2 Bônus Exclusivos (valor R$ 47,00)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span>Acesso imediato e vitalício</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span>Garantia de 7 dias</span>
              </div>
            </div>
            
            <Button 
              onClick={handleBuyClick}
              className="btn-primary w-full text-lg lg:text-xl py-6 mb-6"
            >
              QUERO COMEÇAR AGORA - R$ 29,90
            </Button>
            
            <div className="text-sm text-muted-foreground space-y-2">
              <p>🔒 Compra 100% segura</p>
              <p>⚡ Acesso imediato após confirmação do pagamento</p>
              <p>💳 Parcelamento disponível no cartão</p>
            </div>
          </div>
          
          <div className="text-center mt-8 fade-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg font-semibold text-secondary">
              ⏰ Restam apenas 7 vagas com esse preço especial!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}