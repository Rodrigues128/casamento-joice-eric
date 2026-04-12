# 💍 Casamento Joicilene & Eric

Site oficial do casamento de **Joicilene e Eric**, desenvolvido para facilitar o acesso às informações do evento, confirmação de presença (RSVP) e lista de presentes.

## ✨ Funcionalidades

- **💌 Convite Interativo:** Experiência imersiva com animações e elementos flutuantes.
- **⏳ Contagem Regressiva:** Timer em tempo real até o grande dia.
- **📍 Detalhes do Evento:** Informações completas sobre local, data e horário, com integração ao Google Maps.
- **✅ RSVP (Confirmação de Presença):** Formulário integrado diretamente a uma Planilha do Google (Google Sheets).
- **🎁 Lista de Presentes:** Acesso rápido ao link da lista de presentes externa.
- **🎵 Player de Música:** Música ambiente controlável pelo usuário.
- **📖 Nossa História:** Seção dedicada a compartilhar a jornada do casal.
- **📸 Galeria:** Espaço para fotos do casal.

## 🛠️ Tecnologias Utilizadas

- **Core:** [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/) + [Lucide React](https://lucide.dev/)
- **Gerenciamento de Estado/Dados:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) + [TanStack Query](https://tanstack.com/query/latest)
- **Visual:** [Three.js](https://threejs.org/) + [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Linter:** ESLint

## 📁 Estrutura do Projeto

```text
src/
├── api/          # Integração com serviços externos (Google Sheets)
├── assets/       # Imagens, fontes e arquivos de áudio
├── components/   # Componentes React (UI e Seções do Casamento)
├── lib/          # Configurações globais, utilitários e validações
└── pages/        # Páginas principais (Home)
```

## ⚙️ Configuração Centralizada

A maioria das informações do site (nomes, data, local, links) pode ser alterada em um único arquivo:
`src/lib/wedding-config.js`.

### Integração RSVP (Google Sheets)
O formulário de RSVP envia os dados para um Google Apps Script, que os registra em uma planilha. A URL do script deve ser configurada em `WEDDING_CONFIG.links.googleSheetsApi`.

## 🚀 Como Rodar Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse o site:**
   Abra o navegador em [http://localhost:5173](http://localhost:5173)

## 📦 Deployment

O projeto está configurado para deploy automático no **GitHub Pages** via GitHub Actions.
Toda vez que um `push` é feito na branch `main`, o workflow em `.github/workflows/deploy.yml` é disparado para realizar o build e a publicação.

---
Desenvolvido com ❤️ para o casamento de Joicilene e Eric.
