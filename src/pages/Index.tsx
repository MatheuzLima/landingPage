import { useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProblemsSection } from "@/components/ProblemsSection";
import { SolutionSection } from "@/components/SolutionSection";
import { IncludesSection } from "@/components/IncludesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
// Import comentado do componente de CTA flutuante (não está sendo usado atualmente)
// import { FloatingCTA } from "@/components/FloatingCTA";

// Componente principal da página inicial que organiza todas as seções
const Index = () => {
  // Hook useEffect que executa apenas uma vez quando o componente é montado
  useEffect(() => {
    // Configuração das opções do Intersection Observer para detectar quando elementos entram na viewport
    const observerOptions = {
      threshold: 0.1, // Dispara quando 10% do elemento está visível
      rootMargin: "0px 0px -50px 0px" // Margem de 50px na parte inferior
    };

    // Cria um Intersection Observer que monitora quando elementos entram na tela
    const observer = new IntersectionObserver((entries) => {
      // Para cada elemento observado que entra na viewport
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Adiciona a classe "animate-in" para ativar a animação
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Seleciona todos os elementos com a classe "fade-up" para aplicar animações
    const elements = document.querySelectorAll(".fade-up");
    // Observa cada elemento para detectar quando entra na viewport
    elements.forEach((el) => observer.observe(el));

    // Função de limpeza que desconecta o observer quando o componente é desmontado
    return () => observer.disconnect();
  }, []); // Array vazio significa que o useEffect executa apenas uma vez

  // Retorna a estrutura principal da página com todas as seções
  return (
    // Container principal com altura mínima de tela cheia e cor de fundo
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Seção principal com título, descrição e CTA principal */}
      <HeroSection />
      {/* Seção que apresenta os problemas que o usuário enfrenta */}
      <ProblemsSection />
      {/* Seção que apresenta como o produto resolve esses problemas */}
      <SolutionSection />
      {/* Seção que lista o que está incluído no produto */}
      <IncludesSection />
      {/* Seção com depoimentos de clientes satisfeitos */}
      <TestimonialsSection />
      {/* Seção com preços, ofertas e botões de compra */}
      <PricingSection />
      {/* Seção que apresenta a garantia do produto */}
      <GuaranteeSection />
      {/* Seção de perguntas frequentes para esclarecer dúvidas */}
      <FAQSection />
      {/* Seção final com call-to-action para conversão */}
      <FinalCTASection />
      {/* Componente de CTA flutuante comentado (não está sendo usado) */}
      {/* <FloatingCTA /> */}
    </div>
  );
};

// Exporta o componente Index como padrão para ser usado no roteamento
export default Index;
