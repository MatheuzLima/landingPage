export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      result: "Perdi 8kg em 3 meses",
      text: "Finalmente encontrei um método que funciona! Consegui emagrecer sem passar fome e sem dietas malucas.",
      avatar: "👩‍💼"
    },
    {
      name: "Ana Costa",
      result: "12kg em 5 meses",
      text: "O guia mudou completamente minha relação com a comida. Agora como com prazer e ainda assim emagreço!",
      avatar: "👩‍🏫"
    },
    {
      name: "Carla Santos",
      result: "6kg em 2 meses",
      text: "Prático, fácil de seguir e realmente funciona. Recomendo para todas as minhas amigas!",
      avatar: "👩‍⚕️"
    }
  ];

  return (
    <section className="py-20 px-4" id="depoimentos">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Depoimentos Reais de <span className="text-gradient">Pessoas Reais</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que quem já transformou sua vida está dizendo
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-glass p-8 hover:scale-105 transition-transform duration-300 fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-primary font-semibold">{testimonial.result}</p>
                </div>
              </div>
              
              <blockquote className="text-lg italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex text-primary text-xl mt-4">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}