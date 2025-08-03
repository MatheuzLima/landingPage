import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Cria uma nova instância do QueryClient para gerenciar cache e estado das queries
const queryClient = new QueryClient();

// Componente principal da aplicação que configura todos os providers e rotas
const App = () => (
  // Provider do React Query que envolve toda a aplicação para gerenciar estado
  <QueryClientProvider client={queryClient}>
    {/* Provider de tooltips que habilita tooltips em todos os componentes filhos */}
    <TooltipProvider>
      {/* Componente Toaster do shadcn/ui para exibir notificações */}
      <Toaster />
      {/* Componente Sonner para exibir notificações toast alternativas */}
    <Sonner />    
      {/* Router principal que gerencia a navegação baseada em URL */}
      <BrowserRouter>
        {/* Container que define todas as rotas da aplicação */}
        <Routes>
          {/* Rota para a página inicial - renderiza o componente Index quando acessar "/" */}
          <Route path="/" element={<Index />} />
          {/* Comentário importante: todas as rotas customizadas devem ser adicionadas acima desta rota catch-all */}
          {/* Rota catch-all que captura qualquer URL não definida e renderiza a página NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Exporta o componente App como padrão para ser usado em outros arquivos
export default App;
