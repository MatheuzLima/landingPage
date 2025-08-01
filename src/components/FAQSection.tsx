import { useState } from "react";
import { Button } from "@/components/ui/button";

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que você vai Receber (começando do 0° módulo) FÍSICA",
      answer: "Você receberá o guia completo em formato digital (PDF), com acesso imediato após a confirmação do pagamento. O guia contém estratégias práticas, receitas e um plano alimentar sustentável."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os primeiros resultados podem ser vistos já na primeira semana aplicando as estratégias. Resultados mais significativos aparecem entre 2-4 semanas de aplicação consistente."
    },
    {
      question: "É adequado para qualquer idade?",
      answer: "Sim! O guia foi desenvolvido com base em princípios nutricionais saudáveis e pode ser aplicado por pessoas adultas de qualquer idade. Sempre recomendamos consultar um profissional de saúde antes de mudanças significativas na alimentação."
    },
    {
      question: "Funciona para vegetarianos/veganos?",
      answer: "Absolutamente! O guia inclui opções e adaptações para diferentes estilos alimentares, incluindo vegetarianos e veganos."
    },
    {
      question: "Tenho garantia?",
      answer: "Sim! Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeita, devolvemos 100% do seu dinheiro."
    },
    {
      question: "Como recebo o acesso?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá um email com o link de acesso ao material. O acesso é vitalício."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-muted/20" id="faq">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas antes de começar sua transformação
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="card-glass overflow-hidden fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Button
                variant="ghost"
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left justify-between hover:bg-primary/10"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className="text-2xl text-primary">
                  {openFAQ === index ? '−' : '+'}
                </span>
              </Button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}