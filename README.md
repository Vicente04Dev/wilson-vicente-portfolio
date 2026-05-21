# Wilson Vicente — Web Designer & Desenvolvedor Full-Stack

Portfolio e site profissional de Wilson Vicente, especializado em soluções web para o mercado angolano.

## Tecnologias

- [Vite](https://vitejs.dev/)
- [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Desenvolvimento local

**Pré-requisitos:** Node.js 18+ e npm

```sh
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.local.example .env.local
# Editar .env.local com as chaves do EmailJS

# 3. Iniciar servidor de desenvolvimento
npm run dev
```

O site fica disponível em `http://localhost:5173`.

## Variáveis de ambiente

Criar `.env.local` com as seguintes variáveis para o formulário de contacto funcionar:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Build para produção

```sh
npm run build
npm run preview
```

## Estrutura do projeto

```
src/
├── components/     # Secções da landing page
│   └── ui/         # Componentes base (shadcn/ui)
├── pages/          # Rotas (Index, NotFound)
├── hooks/          # Custom hooks
└── lib/            # Utilitários
public/             # Assets estáticos
```
