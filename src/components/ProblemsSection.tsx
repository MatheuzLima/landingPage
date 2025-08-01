export function ProblemsSection() {
  const problems = [
    "Você sente que precisa parar tudo pra ver resultado?",
    "Vive na luta entre comer com prazer ou seguir uma dieta que você odeia?",
    "Já perdeu peso mas não conseguiu manter?",
    "Sente que não tem tempo, disposição ou motivação para uma alimentação saudável?"
  ];

  return (
    <section className="py-20 px-4" id="problemas">
      <div className="container mx-auto text-center">
        <div className="card-glass p-8 md:p-12 max-w-4xl mx-auto fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Se você já tentou de tudo pra emagrecer e sempre acaba no mesmo lugar...
          </h2>
          
          <p className="text-xl mb-8 text-muted-foreground">
            Essa pode ser o pontão de virada que você estava procurando
          </p>
          
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="bg-secondary/10 p-6 rounded-lg text-left fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-lg">
                  <span className="text-primary font-bold">✓</span> {problem}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-primary/20 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Você não está sozinha.</h3>
            <p className="text-lg">
              É por isso que eu criei o Guia Emagreça Comendo. 
              <br />
              <strong>O problema é o caminho que te ensinaram a seguir.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}