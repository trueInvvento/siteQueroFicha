---
name: QueroFicha Landing Page
overview: Criar um site de divulgação (landing page) para o QueroFicha, apresentando o produto, suas funcionalidades para Clientes e Comerciantes, e direcionando para o download do app.
todos:
  - id: estrutura-html
    content: Criar estrutura HTML base do site com todas as seções planejadas
    status: pending
  - id: estilo-css
    content: "Criar CSS com o design system: cores, tipografia, cards, botões"
    status: pending
  - id: hero
    content: Implementar seção Hero com tagline, CTAs e mockup do app
    status: pending
  - id: como-funciona
    content: Implementar seção 'Como Funciona' com os 3 passos visuais
    status: pending
  - id: funcionalidades
    content: Implementar seções de funcionalidades para Clientes e Comerciantes
    status: pending
  - id: download
    content: Implementar seção de download com botões App Store / Google Play
    status: pending
  - id: footer
    content: Implementar footer com links e redes sociais
    status: pending
isProject: false
---

# Plano: Site de Divulgação do QueroFicha

## Objetivo

Landing page estática para divulgar o QueroFicha. Foco em conversão: visitante entende o produto rapidamente e é direcionado para baixar o app ou cadastrar seu evento.

---

## Proposta de Valor Principal

> **"Compre no evento sem filas, sem dinheiro físico, sem complicação."**

O QueroFicha digitaliza a experiência de compra em eventos — bares, festas, feiras, festivais — com QR codes, pagamento online e entrega instantânea dos pedidos.

---

## Estrutura de Seções

### 1. Hero (topo)
- Logo + nome "QueroFicha"
- Tagline principal: *"Facilite a compra de produtos em eventos"*
- Sub-tagline: *"Para quem vai curtir e para quem vai vender"*
- Dois CTAs: **"Baixar o App"** (cliente) e **"Cadastrar meu evento"** (comerciante)
- Imagem/mockup do app em um smartphone

### 2. Como Funciona (fluxo visual em 3 passos)
- Passo 1: Encontre o evento ou escaneie o QR Code
- Passo 2: Escolha os produtos no cardápio digital
- Passo 3: Pague online e apresente seu QR Code para retirar

### 3. Para Clientes (funcionalidades)
- Descubra eventos perto de você
- Cardápio digital com fotos e preços
- Pague com PIX, cartão ou saldo pré-carregado
- Receba QR Code para retirar sem fila
- Presenteie amigos com itens do evento
- Histórico completo de compras

### 4. Para Comerciantes (funcionalidades)
- Crie e gerencie eventos facilmente
- Monte cardápios com fotos, preços e descontos
- Valide pedidos escaneando QR Codes
- Dashboard com relatórios de vendas em tempo real
- Exporte relatórios em PDF ou CSV
- Compartilhe o evento nas redes sociais

### 5. Depoimentos / Prova Social
- 3 cards com depoimentos (clientes e comerciantes)
- Números de impacto: ex. "X eventos realizados", "Y pedidos processados"

### 6. Download do App
- Botões para App Store e Google Play
- QR Code para baixar diretamente

### 7. Footer
- Links: Sobre, Contato, Termos de Uso, Privacidade
- Redes sociais
- Copyright

---

## Visual & Design System

### Paleta de Cores
Baseado nos tokens do app (`constants/Colors.ts` e assets SVG):

- **Primária (Roxo):** `#5C4EE5` — botões principais, destaques, tabs
- **Primária Light:** `#7F6DF2` — gradientes, hovers
- **Primária Dark:** `#4A3DB7` — texto sobre fundo claro
- **Acento (Coral):** `#FF6B6B` — logo, ícones SVG do app; usar em badges e highlights
- **Acento Rosa:** `#FF4081` — detalhes secundários, tags
- **Fundo Claro:** `#FFFFFF` / `#F5F5F5`
- **Fundo Escuro:** `#121212` — footer ou seção hero com contraste
- **Texto Principal:** `#212121`
- **Texto Secundário:** `#757575`

Sugestão: Hero com fundo escuro (`#121212`) e elementos em roxo/coral, restante do site em fundo branco.

### Tipografia
- **Títulos:** `Space Mono` (já presente no app em `assets/fonts/SpaceMono-Regular.ttf`) — dá identidade técnica/moderna
- **Corpo:** Font sans-serif do sistema (Inter, ou fonte padrão do navegador)
- Hierarquia: H1 40px bold, H2 32px, H3 24px, body 16px — alinhado ao `theme.ts`

### Estilo Visual
- Cards arredondados com sombras suaves (elevation do app)
- Ícones em formato de ticket/ficha (identidade do produto)
- Gradiente sutil de `#5C4EE5` para `#7F6DF2` em seções de destaque
- Mockups do smartphone com screenshots do app real
- Badges com o acento coral `#FF6B6B` para destacar benefícios
- Layout limpo, espaçamento generoso, visual mobile-first

---

## Stack Técnica do Site

- **HTML + CSS + JavaScript** puro — ou **Next.js** (mais fácil para SEO e deploy no Firebase Hosting, que já é usado no projeto)
- **Deploy:** Firebase Hosting (já configurado no `firebase.json`)
- **Assets:** usar logo.svg, customer-icon.svg, merchant-icon.svg já existentes em `assets/images/`

---

## Arquivos-chave de referência

- [`assets/images/logo.svg`](assets/images/logo.svg) — logo principal
- [`assets/images/customer-icon.svg`](assets/images/customer-icon.svg) — ícone de cliente
- [`assets/images/merchant-icon.svg`](assets/images/merchant-icon.svg) — ícone de comerciante
- [`constants/Colors.ts`](constants/Colors.ts) — paleta de cores
- [`constants/theme.ts`](constants/theme.ts) — tipografia e espaçamentos


## Use os screenshots (pasta screenshots) das telas para ilustrar o site e para entender o look and feel do aplicativo que deve ser replicado no site web.