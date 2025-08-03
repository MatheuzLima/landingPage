import happyWoman from "@/assets/happy-woman.jpg";

export function SolutionSection() {
  const benefits = [
    "Lista um pela um todos os componentes de um emagrecer inteligente",
    "O Guia Emagreça Comendo foi criado pra quem quer perder peso de forma consistente e prazerosa, sem dietas malucas nem regras impossíveis",
    "Baseado em estratégias científicas, alimentação acessível e organização alimentar realista",
    "Até mesmo como você pode moldar um novo reflexo de delivery"
  ];

  return (
    <section className="py-20 px-4" id="solucao">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="fade-up order-2 lg:order-1">
            <img 
              src={happyWoman} 
              alt="Mulher feliz com alimentação saudável"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="fade-up order-1 lg:order-2 text-center lg:text-left" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              O Guia Emagreça Comendo foi criado para que você aprenda a perder peso de forma 
              <span className="text-gradient"> consistente e prazerosa</span>
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex flex-col sm:flex-row items-start gap-4 fade-up text-center sm:text-left"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="bg-primary rounded-full p-2 flex-shrink-0 mt-1 mx-auto sm:mx-0">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}