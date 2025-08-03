
# Landing Page - "Emagreça com Estilo"

Repositório do projeto **Emagreça com Estilo**, uma aplicação web desenvolvida em React com Vite e Tailwind CSS. O protótipo inicial foi gerado por IA, e desde então o desenvolvimento e manutenção do projeto são feitos por mim.

---

## 🚀 Tecnologias utilizadas

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

---

## 🛠️ Como rodar o projeto localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados. Recomenda-se o uso do [nvm](https://github.com/nvm-sh/nvm) para gerenciar versões do Node.js.

### Passos:

```bash
# 1. Clone o repositório
git clone <YOUR_GIT_URL>

# 2. Acesse a pasta do projeto
cd <nome-do-projeto>

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

---

## 🌍 Deploy

O projeto está configurado para deploy em várias plataformas:

### Netlify
1. Faça login em [netlify.com](https://netlify.com)
2. Clique em **"Add new site"** > **"Import an existing project"**
3. Conecte seu repositório do GitHub
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Clique em **"Deploy site"**

### Vercel
1. Faça login em [vercel.com](https://vercel.com)
2. Clique em **"New Project"**
3. Conecte seu repositório do GitHub
4. O projeto será detectado automaticamente como Vite
5. Clique em **"Deploy"**

### Outras plataformas
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18.x ou superior

---

## 🌐 Domínio personalizado

Para usar seu próprio domínio:

1. No painel da Netlify, vá em **"Domain settings"**
2. Clique em **"Add custom domain"**
3. Adicione seu domínio e atualize os registros DNS no provedor
4. Após a propagação, o projeto estará acessível no novo domínio

---

## 🔧 Troubleshooting

### Problemas comuns de build:

1. **Erro de binding nativo**: 
   - Execute `npm run clean` antes do build
   - Verifique se está usando Node.js 18+ 
   - Reinstale as dependências: `rm -rf node_modules && npm install`

2. **Erro de TypeScript**:
   - Execute `npm run lint` para verificar erros
   - Verifique se todos os arquivos estão importados corretamente

3. **Erro de deploy**:
   - Certifique-se de que o `dist/` está sendo gerado
   - Verifique se o comando de build está correto na plataforma

## ✏️ Edição e contribuição

Você pode editar os arquivos diretamente no seu ambiente local ou via GitHub:

- Edite normalmente e envie os commits com `git push`
- Use GitHub Codespaces para editar direto no navegador, se preferir

---

Projeto livre.
