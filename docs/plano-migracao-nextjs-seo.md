# Plano de Migração: Vite para Next.js 16 + SEO de Alto Nível (Josi Souza)

## 1. Objetivo
Migrar o projeto de **Vite + React (SPA/JavaScript)** para **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, espelhando a arquitetura robusta do projeto `richarddev`, com foco central em **SEO local de alta performance** (Google João Pessoa - PB).

---

## 2. Diagnóstico da Stack Atual vs. Nova

| Recurso | Anterior (Vite) | Nova Stack (Next.js) | Ganho Prático |
|---|---|---|---|
| **Renderização** | Client-side (HTML vazio até carregar JS) | SSR / Static Site Generation (SSG) | Indexação imediata pelo Google e prévias instantâneas em redes sociais |
| **Linguagem** | JavaScript (`.jsx`) | TypeScript (`.tsx`) | Código tipado, sem erros em runtime e fácil refatoração |
| **Imagens** | `<img>` simples com WebP | `next/image` otimizado | LCP rápido, dimensões automáticas, WebP/AVIF servido sob demanda |
| **Fontes** | Preload manual via `<link>` no HTML | `next/font/local` nativo | Zero layout shift (CLS = 0) e carregamento sem bloqueio |
| **SEO e Meta** | Tags estáticas manuais no `index.html` | Metadata API + `sitemap.ts` + `robots.ts` | Atualização centralizada e sitemap dinâmico na raiz |
| **Dados Estruturados**| JSON-LD inserido estático no HTML | Schema.org tipado (`BeautySalon` + `FAQPage`) | Rich snippets (endereço, telefone, serviços de estética) no Google |

---

## 3. Fases de Execução

### Fase 1: Preparação e Inicialização do Next.js
- [x] Criar branch de trabalho (`feat/migracao-nextjs`).
- [x] Instalar dependências essenciais: `next@16.1.6`, `react@19.2.3`, `react-dom@19.2.3`, `typescript`, `@types/node`, `@types/react`, `@types/react-dom`.
- [x] Ajustar `package.json` com scripts do Next (`dev`, `build`, `start`, `lint`).
- [x] Configurar `tsconfig.json` e `next.config.ts`.
- [x] Limpar arquivos legados do Vite (`vite.config.js`, `index.html`, `postcss.config.js`, `tailwind.config.js`, `eslint.config.js`).

### Fase 2: Estrutura do App Router e Estilos
- [x] Criar `src/app/layout.tsx` e `src/app/page.tsx`.
- [x] Migrar fontes locais via `next/font/local` (Playfair Display & Lato self-hosted).
- [x] Configurar Tailwind CSS v4 (`src/app/globals.css` com `@import "tailwindcss";` / `@theme`).
- [x] Configurar `MotionProvider.tsx` para suporte seguro a Framer Motion no Next.js App Router.

### Fase 3: Migração de Componentes para TypeScript
- [x] Converter `Header.tsx`, `Hero.tsx`, `HeroSplit.tsx`, `About.tsx`, `Services.tsx`, `Experience.tsx`, `Gallery.tsx`, `FAQ.tsx`, `Footer.tsx`, `Rich.tsx`, `CustomIcons.tsx`.
- [x] Tipagem estrita de props e estruturas de dados.
- [x] Integração de `next/image` para LCP e carregamento otimizado.

### Fase 4: Implementação de SEO de Alto Nível
- [x] **Metadata API** (`src/app/layout.tsx`):
  - Títulos e descrições com foco em palavras-chave locais de João Pessoa e Santa Rita.
  - Canonical URL dinâmica (`https://josisouzabeauty.com.br/`).
  - OpenGraph e Twitter Cards completos (imagens 1200x630 com tags alt e secure_url).
- [x] **Schema.org / JSON-LD:**
  - `BeautySalon` / `LocalBusiness` com catálogo de serviços (`OfferCatalog`) e preços.
  - `FAQPage` estruturado para rich snippets no Google.
- [x] **Sitemap e Robots nativos:**
  - `src/app/sitemap.ts` gerando `/sitemap.xml`.
  - `src/app/robots.ts` gerando `/robots.txt`.

### Fase 5: Validação, Build e Testes
- [x] Checagem estática de tipos (`tsc --noEmit`) aprovada com 0 erros.
- [x] ESLint (`npm run lint`) com regras Next Vitals e TypeScript aprovado com 0 erros.
- [x] Build estático de produção (`npm run build`) concluído com sucesso via Turbopack (rotas `/`, `/sitemap.xml`, `/robots.txt` pré-renderizadas estaticamente).
- [x] Merge na branch `main` e deploy em produção verificado no Netlify (`https://josisouzabeauty.com.br/`).
- [x] Validação em produção das rotas `/sitemap.xml` (com tags de imagem dinâmicas) e `/robots.txt`.

---

## 4. Aprendizado Registrado
- **Tailwind CSS v4 + Next.js 16**: dispensa `tailwind.config.js` e centraliza paleta, container e fontes no `@theme` dentro de `globals.css`.
- **Framer Motion no App Router**: isolar o provedor de animações (`LazyMotion`, `MotionConfig`) em um componente cliente dedicado (`MotionProvider.tsx`) viabiliza a execução híbrida SSR sem conflitos de hidratação.
- **Fontes self-hosted**: `next/font/local` elimina downloads externos em tempo de compilação e previne Layout Shift (CLS = 0).
- **Deploy Next.js no Netlify**: a configuração do plugin `@netlify/plugin-nextjs` com `publish = ".next"` no `netlify.toml` assegura a execução automática do runtime sem conflitar com configurações legadas de pasta `dist`.
- **Sitemap Dinâmico**: remover arquivos estáticos legados `sitemap.xml` da pasta `/public` é indispensável para que o Next.js sirva a rota gerada pelo `sitemap.ts`.
