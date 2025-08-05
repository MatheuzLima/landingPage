export function GuaranteeSection() {
  return (
    <section className="py-20 px-4" id="garantia">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-glass p-6 lg:p-8 md:p-12 fade-up">
            <div className="text-6xl mb-6">🛡️</div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Garantia de <span className="text-gradient">7 Dias</span>
            </h2>
            
            <p className="text-xl mb-8 text-muted-foreground">
              Experimente o Guia Emagreça Comendo sem riscos
            </p>
            
            <div className="bg-primary/20 p-6 lg:p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">Como funciona nossa garantia:</h3>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <p className="flex items-start gap-3">
                  <span className="text-primary font-bold">1.</span>
                  Compre o Guia Emagreça Comendo
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary font-bold">2.</span>
                  Teste por 7 dias completos
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary font-bold">3.</span>
                  Se não ficar satisfeito, devolvemos 100% do seu dinheiro
                </p>
              </div>
            </div>
            
            <p className="text-lg">
              Não queremos seu dinheiro se você não estiver completamente satisfeita com os resultados.
              <br />
              <strong>É simples assim.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}