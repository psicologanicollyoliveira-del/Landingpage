# Landing Page Nicolly Oliveira - Next.js

Este projeto foi convertido para Next.js com otimização para SEO e indexação em mecanismos de busca.

## 🚀 Estrutura do Projeto Next.js

```
├── app/
│   ├── layout.tsx          # Layout raiz com metadados SEO
│   ├── page.tsx            # Página principal (Client Component)
│   └── sitemap.ts          # Sitemap gerado automaticamente
├── components/             # Componentes reutilizáveis
├── public/
│   └── robots.txt         # Configuração para crawlers
├── styles/
│   └── globals.css        # Estilos globais
├── next.config.js         # Configuração do Next.js
├── package.json
└── tsconfig.json
```

## 📦 Como Executar

### Desenvolvimento:
```bash
npm install
npm run dev
```

### Build de Produção:
```bash
npm run build
npm start
```

## 🔍 Otimizações de SEO Implementadas

### 1. **Metadados Completos** (`/app/layout.tsx`)
- Título otimizado com palavras-chave
- Descrição detalhada para mecanismos de busca
- Keywords relevantes para psicologia e terapia
- Open Graph tags para compartilhamento em redes sociais
- Twitter Cards para melhor visualização no Twitter
- Configuração de robots para indexação

### 2. **Sitemap Automático** (`/app/sitemap.ts`)
- Sitemap XML gerado automaticamente
- Facilita a descoberta de páginas pelos crawlers
- Acesse em: `https://seudominio.com/sitemap.xml`

### 3. **Robots.txt** (`/public/robots.txt`)
- Instrui os crawlers sobre quais páginas indexar
- Referência ao sitemap
- Acesse em: `https://seudominio.com/robots.txt`

### 4. **Fontes Otimizadas**
- Google Fonts carregadas via Next.js Font Optimization
- Fontes Fraunces e Quicksand com display swap
- Reduz CLS (Cumulative Layout Shift)

### 5. **HTML Semântico**
- Tags alt descritivas em todas as imagens
- Estrutura adequada de headings (h1, h2, h3)
- Links com atributos aria-label para acessibilidade

## 🌐 Próximos Passos para Deploy

### 1. **Substitua as URLs Placeholder**
No arquivo `/app/layout.tsx`, substitua:
```typescript
// Linha 62: Adicione seu código do Google Search Console
verification: {
  google: "seu-codigo-de-verificacao-aqui",
}

// Linha 76: Adicione seu domínio real
<link rel="canonical" href="https://seusite.com.br" />
```

No arquivo `/app/sitemap.ts`:
```typescript
// Linha 5: Substitua pelo seu domínio
url: 'https://seusite.com.br',
```

No arquivo `/public/robots.txt`:
```txt
# Linha 5: Substitua pelo seu domínio
Sitemap: https://seusite.com.br/sitemap.xml
```

### 2. **Configure o Google Search Console**
1. Acesse: https://search.google.com/search-console
2. Adicione sua propriedade (domínio ou URL)
3. Verifique a propriedade usando a meta tag fornecida
4. Envie o sitemap: `https://seudominio.com/sitemap.xml`

### 3. **Plataformas de Deploy Recomendadas**

#### **Vercel** (Recomendado para Next.js)
```bash
npm i -g vercel
vercel
```
- Deploy automático
- SSL gratuito
- CDN global
- Otimizações automáticas para Next.js

#### **Netlify**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### 4. **Adicione Schema Markup (JSON-LD)**
Para melhorar ainda mais o SEO, adicione dados estruturados no `layout.tsx`:

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Nicolly Oliveira - Psicóloga",
      "image": "https://seusite.com.br/logo.png",
      "@id": "https://seusite.com.br",
      "url": "https://seusite.com.br",
      "telephone": "+55-41-99159-9013",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BR"
      },
      "priceRange": "$$",
      "description": "Psicóloga oferecendo espaço seguro para autoconhecimento e crescimento emocional."
    })
  }}
/>
```

### 5. **Analytics**
Adicione Google Analytics ou outras ferramentas de análise no `layout.tsx`.

## 📱 Performance

O Next.js oferece:
- ✅ **Server-Side Rendering (SSR)** - Conteúdo renderizado no servidor
- ✅ **Static Generation** - Páginas geradas em build time
- ✅ **Image Optimization** - Otimização automática de imagens
- ✅ **Code Splitting** - Carregamento apenas do código necessário
- ✅ **Font Optimization** - Fontes otimizadas automaticamente

## 🎯 Checklist de SEO

- [x] Metadados completos (title, description, keywords)
- [x] Open Graph tags
- [x] Sitemap XML
- [x] Robots.txt
- [x] URLs semânticas
- [x] Imagens com alt text descritivo
- [x] Estrutura HTML semântica
- [x] Links com aria-labels
- [x] Responsive design
- [ ] Schema markup (JSON-LD) - Para implementar
- [ ] Google Search Console - Configurar após deploy
- [ ] Google Analytics - Adicionar se necessário

## 📞 Contato

Para dúvidas sobre a implementação técnica, consulte a documentação do Next.js:
- https://nextjs.org/docs
- https://nextjs.org/docs/app/building-your-application/optimizing/metadata
