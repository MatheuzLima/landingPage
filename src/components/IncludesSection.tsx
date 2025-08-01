export function IncludesSection() {
  const includes = [
    {
      icon: "📖",
      title: "Guia Completo",
      description: "Estratégias científicas para emagrecer comendo"
    },
    {
      icon: "🍽️",
      title: "Montagem de Pratos",
      description: "Como montar pratos inteligentes que saciam"
    },
    {
      icon: "⏰",
      title: "Organização Alimentar",
      description: "Rotinas práticas e sustentáveis"
    },
    {
      icon: "🥗",
      title: "Receitas Práticas",
      description: "Opções deliciosas e nutritivas"
    },
    {
      icon: "📱",
      title: "Acesso Mobile",
      description: "Leia em qualquer dispositivo"
    },
    {
      icon: "♾️",
      title: "Acesso Vitalício",
      description: "Para sempre, sem mensalidade"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20" id="conteudo">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que Está Incluso no <span className="text-gradient">Guia Emagreça Comendo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O que você vai receber (começando do 0? módulo) FÍSICA
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {includes.map((item, index) => (
            <div 
              key={index}
              className="card-glass p-8 text-center hover:scale-105 transition-transform duration-300 fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="card-glass p-8 max-w-2xl mx-auto fade-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold mb-4">Foca explicações simples e práticas sobre:</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div>
                <p>✓ Como montar um prato inteligente</p>
                <p>✓ Organização da rotina alimentar</p>
                <p>✓ Estratégias para manter o foco</p>
              </div>
              <div>
                <p>✓ Como quebrar ciclos restritivos</p>
                <p>✓ Alimentação consciente e prazerosa</p>
                <p>✓ Sustentabilidade a longo prazo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}