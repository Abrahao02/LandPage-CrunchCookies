# Instruções de Setup

## Passo a Passo

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Configure as variáveis de ambiente:**
   
   Crie um arquivo `.env.local` na raiz do projeto:
   ```bash
   # Copie o arquivo de exemplo
   cp .env.example .env.local
   ```
   
   Ou crie manualmente o arquivo `.env.local` com:
   ```
   NEXT_PUBLIC_WHATSAPP_NUMBER=5521972422373
   ```
   
   O formato deve ser: `5521XXXXXXXXX` (código do país + DDD + número, sem espaços ou caracteres especiais)
   
   **Importante:** O arquivo `.env.local` não será commitado no Git (já está no .gitignore)

3. **Personalize os produtos (opcional):**
   
   Edite os produtos em `lib/constants.ts` conforme necessário:
   - Nomes dos produtos
   - Descrições
   - Tags ("MAIS VENDIDO", "NOVIDADE")
   - Imagens (certifique-se de que estão em `public/img/`)

4. **Execute o projeto:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

## Estrutura de Imagens

Certifique-se de que todas as imagens estão em `public/img/`:
- `logo.jpeg` - Logo da marca
- `cookies empilhados.png` - Imagem do hero
- `cookies bandeja.png` - Imagem da seção sobre
- `oreo.png` - Produto Oreo
- `redvelvet.png` - Produto Red Velvet
- `cookeis recheados.png` - Produto Cookies Recheados
- `cookeis super.png` - Produto Cookies Super

## Personalização de Textos

Todos os textos podem ser editados em `lib/constants.ts`:
- Headlines
- Descrições
- Textos das seções
- Depoimentos
- Estatísticas

## Deploy

Para fazer deploy na Vercel:

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático será feito

Ou use o CLI da Vercel:
```bash
npm i -g vercel
vercel
```
