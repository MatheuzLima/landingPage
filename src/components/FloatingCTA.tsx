// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";

// export function FloatingCTA() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       // Mostra o botão após rolar 100px
//       if (window.pageYOffset > 100) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const handleBuyClick = () => {
//     window.open('https://pay.kiwify.com.br/seu-link-de-pagamento', '_blank');
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-4 sm:w-auto">
//       <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-lg p-4 shadow-2xl">
//         <div className="flex items-center justify-between gap-4 sm:flex-col sm:text-center">
//           <div className="flex-1 sm:mb-3">
//             <p className="font-bold text-sm">Guia Emagreça Comendo</p>
//             <p className="text-primary font-bold text-xl">R$ 29,90</p>
//           </div>
          
//           <Button 
//             onClick={handleBuyClick}
//             className="btn-primary px-6 py-3 text-sm sm:w-full"
//           >
//             COMPRAR AGORA
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }