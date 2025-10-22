# 🚀 Instruções para Deploy na Vercel

## ❌ Problema Atual
A Vercel está detectando o projeto como React/Vite por causa do arquivo `App.tsx` antigo na raiz.

## ✅ Solução - Siga estes passos:

### **Passo 1: Limpar o Repositório GitHub**

No seu terminal local (ou no GitHub web):

```bash
# 1. Navegue até o diretório do projeto
cd seu-projeto

# 2. Remove o arquivo App.tsx antigo
git rm App.tsx

# 3. Adicione os novos arquivos
git add .

# 4. Commit das mudanças
git commit -m "Migração para Next.js - Remove App.tsx antigo"

# 5. Push para o GitHub
git push origin main
```

**OU** se preferir fazer pelo GitHub Web:
1. Acesse seu repositório no GitHub
2. Clique no arquivo `App.tsx` na raiz
3. Clique no ícone de lixeira para deletar
4. Commit: "Remove App.tsx antigo"

---

### **Passo 2: Configurar a Vercel**

Agora você tem 2 opções:

#### **Opção A: Re-deploy Automático (Recomendado)**
1. A Vercel deve detectar o push e fazer redeploy automaticamente
2. Aguarde alguns minutos
3. ✅ Pronto!

#### **Opção B: Reconfigurar Manualmente na Vercel**
1. Acesse: https://vercel.com/dashboard
2. Vá no seu projeto
3. **Settings** → **General**
4. Em **Build & Development Settings**:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build` (deixe vazio para usar o padrão)
   - **Output Directory**: `.next` (deixe vazio para usar o padrão)
   - **Install Command**: `npm install` (deixe vazio para usar o padrão)
5. Salve as configurações
6. Vá em **Deployments** → Clique nos 3 pontinhos do último deploy → **Redeploy**

---

### **Passo 3: Verificar o Deploy**

Após o deploy bem-sucedido:

1. ✅ Acesse seu site na URL fornecida pela Vercel
2. ✅ Verifique se todas as seções estão carregando
3. ✅ Teste os botões de WhatsApp
4. ✅ Verifique o sitemap: `seu-site.vercel.app/sitemap.xml`
5. ✅ Verifique o robots: `seu-site.vercel.app/robots.txt`

---

## 📋 Checklist de Arquivos Importantes

Certifique-se que esses arquivos estão no repositório:

- ✅ `/vercel.json` - Configuração da Vercel
- ✅ `/.gitignore` - Ignora arquivos desnecessários
- ✅ `/app/layout.tsx` - Layout com SEO
- ✅ `/app/page.tsx` - Página principal
- ✅ `/app/sitemap.ts` - Sitemap
- ✅ `/next.config.js` - Config do Next.js
- ✅ `/package.json` - Dependências
- ✅ `/tsconfig.json` - Config do TypeScript
- ✅ `/public/robots.txt` - Robots.txt
- ❌ `/App.tsx` - **DEVE SER DELETADO**

---

## 🐛 Se ainda houver erro

### Erro: "No Output Directory named 'dist'"

**Solução:**
```bash
# No seu projeto local
rm -rf .next node_modules
git add .
git commit -m "Clean build files"
git push
```

Então na Vercel:
1. Settings → General → Build & Development Settings
2. Limpe todos os campos (deixe vazios)
3. Framework Preset: **Next.js**
4. Redeploy

---

## 📞 Comandos Úteis

```bash
# Testar localmente antes de fazer push
npm run build    # Verifica se o build funciona
npm start        # Testa a versão de produção

# Ver estrutura de arquivos
ls -la           # Linux/Mac
dir              # Windows

# Status do Git
git status
```

---

## 🎯 Resultado Final Esperado

Após o deploy bem-sucedido:
- ✅ Site acessível via URL da Vercel
- ✅ Todas as animações funcionando
- ✅ Botões de WhatsApp funcionando
- ✅ Sitemap acessível
- ✅ Google pode indexar o site

---

## ⚠️ Importante

**NÃO** use o arquivo `App.tsx` na raiz. Ele é do projeto React antigo e conflita com o Next.js.

O projeto Next.js usa:
- `/app/page.tsx` → Página principal
- `/app/layout.tsx` → Layout e metadados
