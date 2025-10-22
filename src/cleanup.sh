#!/bin/bash

echo "🧹 Limpando projeto para deploy Next.js..."

# Remove o arquivo App.tsx antigo se existir
if [ -f "App.tsx" ]; then
    echo "❌ Removendo App.tsx antigo..."
    git rm App.tsx
else
    echo "✅ App.tsx já foi removido"
fi

# Adiciona todos os novos arquivos
echo "📦 Adicionando arquivos ao Git..."
git add .

# Commit
echo "💾 Fazendo commit..."
git commit -m "Migração completa para Next.js - Remove App.tsx e adiciona configurações"

# Push
echo "🚀 Enviando para GitHub..."
git push origin main

echo ""
echo "✅ Concluído! Aguarde alguns minutos para a Vercel fazer o redeploy automático."
echo "📊 Acesse: https://vercel.com/dashboard para ver o progresso"
