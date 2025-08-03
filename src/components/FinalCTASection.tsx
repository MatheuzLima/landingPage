import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  const handleBuyClick = () => {
    // Integração com gateway de pagamento
    window.open('https://pay.kiwify.com.br/seu-link-de-pagamento', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/20 to-secondary/20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Sua <span className="text-gradient">Nova Vida</span> Começa Agora
          </h2>
          
          <p className="text-xl mb-12 text-muted-foreground max-w-3xl mx-auto">
            Pare de adiar a mulher que você quer se tornar. Comece hoje mesmo sua jornada 
            para emagrecer com prazer, sem dietas restritivas e de forma sustentável.
          </p>
          
          <div className="bg-card/90 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-border/50 mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Último chamado!</h3>
            <p className="price-highlight text-4xl lg:text-5xl mb-4">R$ 29,90</p>
            <p className="text-lg mb-6">Acesso vitalício + 2 bônus exclusivos</p>
            
            <Button 
              onClick={handleBuyClick}
              className="btn-primary text-lg lg:text-xl px-8 lg:px-12 py-6 mb-4 w-full sm:w-auto"
            >
              SIM, QUERO COMEÇAR AGORA!
            </Button>
            
            <p className="text-sm text-muted-foreground">
              ⏰ Oferta válida por tempo limitado
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🔒</div>
              <p className="font-semibold">Compra Segura</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-semibold">Acesso Imediato</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🛡️</div>
              <p className="font-semibold">Garantia 7 Dias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}