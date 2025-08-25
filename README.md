<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://ik.imagekit.io/Victorliradev/github/angular-logo_ma3uN7TuE.png?updatedAt=1752626403736" width="120" alt="Nest Logo" /></a>
</p>

# E-commerce Microfrontends

Este projeto implementa uma arquitetura de microfrontends para um e-commerce usando Angular 18.

## Estrutura do Projeto

O projeto está organizado em microfrontends independentes:

```
ecommerce-frontend/
├── projects/
│   ├── shell/           # Aplicação principal (container)
│   ├── catalog/         # Microfrontend do catálogo de produtos
│   ├── cart/           # Microfrontend do carrinho de compras
│   ├── checkout/       # Microfrontend do processo de checkout
│   └── user/           # Microfrontend da área do usuário
├── angular.json         # Configuração do workspace Angular
├── package.json         # Dependências do projeto
└── README.md           # Este arquivo
```

## Microfrontends

### 🏠 Shell
- **Função**: Container principal que orquestra os microfrontends
- **Responsabilidades**: 
  - Navegação entre microfrontends
  - Header e Footer compartilhados
  - Gerenciamento de rotas

### 📦 Catalog
- **Função**: Exibição do catálogo de produtos
- **Responsabilidades**:
  - Listagem de produtos
  - Filtros e busca
  - Detalhes do produto
  - Adicionar ao carrinho

### 🛒 Cart
- **Função**: Gerenciamento do carrinho de compras
- **Responsabilidades**:
  - Lista de itens no carrinho
  - Controle de quantidade
  - Remoção de itens
  - Cálculo de totais

### 💳 Checkout
- **Função**: Processo de finalização da compra
- **Responsabilidades**:
  - Formulário de entrega
  - Seleção de pagamento
  - Confirmação do pedido

### 👤 User
- **Função**: Área do usuário
- **Responsabilidades**:
  - Perfil do usuário
  - Histórico de pedidos
  - Endereços salvos
  - Configurações

## Scripts Disponíveis

### Desenvolvimento
```bash
# Iniciar o shell (aplicação principal)
npm start

# Iniciar microfrontends individuais
npm run start:shell
npm run start:catalog
npm run start:cart
npm run start:checkout
npm run start:user
```

### Build
```bash
# Build do shell
npm run build

# Build de microfrontends individuais
npm run build:shell
npm run build:catalog
npm run build:cart
npm run build:checkout
npm run build:user

# Build de todos os microfrontends
npm run build:all
```

### Testes
```bash
# Testes de todos os microfrontends
npm test

# Testes de microfrontends individuais
npm run test:shell
npm run test:catalog
npm run test:cart
npm run test:checkout
npm run test:user
```

## Como Executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar o desenvolvimento**:
   ```bash
   npm start
   ```

3. **Acessar a aplicação**:
   - Shell: http://localhost:4200
   - Catalog: http://localhost:4201
   - Cart: http://localhost:4202
   - Checkout: http://localhost:4203
   - User: http://localhost:4204

## Tecnologias Utilizadas

- **Angular 18**: Framework principal
- **TypeScript**: Linguagem de programação
- **SCSS**: Pré-processador CSS
- **Angular Router**: Roteamento entre microfrontends
- **Standalone Components**: Arquitetura moderna do Angular

## Arquitetura de Microfrontends

Este projeto implementa uma arquitetura de microfrontends onde:

- Cada microfrontend é uma aplicação Angular independente
- O Shell atua como container principal
- Comunicação entre microfrontends via rotas
- Cada microfrontend pode ser desenvolvido e deployado independentemente
- Compartilhamento de dependências através do workspace Angular

## Próximos Passos

- [ ] Implementar comunicação entre microfrontends via eventos
- [ ] Adicionar autenticação e autorização
- [ ] Implementar estado global compartilhado
- [ ] Adicionar testes unitários e de integração
- [ ] Configurar CI/CD para cada microfrontend
- [ ] Implementar lazy loading dos microfrontends
