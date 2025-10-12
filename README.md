# 💡 Speak AI

Plataforma de flashcards inteligentes para aprender inglês com IA.

## 🚀 Tecnologias

- **Angular 18** - Framework frontend
- **TypeScript** - Linguagem de programação
- **SCSS** - Estilização
- **Jest + Testing Library** - Testes unitários

## 📦 Instalação

```bash
# Instalar dependências
npm install
# ou
yarn install
```

## 🔧 Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm start
# ou
yarn start

# Aplicação rodará em http://localhost:4200
```

## 🧪 Testes

```bash
# Executar testes
npm test

# Modo watch
npm run test:watch

# Com cobertura
npm run test:coverage
```

## 🏗️ Build

```bash
# Build de produção
npm run build
# ou
yarn build
```

## 🎯 Funcionalidades

- ✅ Autenticação (Login/Cadastro)
- ✅ Login com Google
- ✅ Interface minimalista
- 🚧 Gerenciamento de Decks (em desenvolvimento)
- 🚧 Geração de exemplos com IA (em desenvolvimento)
- 🚧 Áudio gerado por IA (em desenvolvimento)
- 🚧 Sistema de repetição espaçada (em desenvolvimento)


## 🔄 CI/CD

O projeto utiliza GitHub Actions para integração e deploy contínuos:

- **CI Pipeline**: Roda em PRs e pushs para `main` e `development`
  - Instala dependências
  - Executa linter
  - Build da aplicação
  - Roda testes unitários
  - Upload de cobertura de testes

- **Deploy Pipeline**: Roda apenas em pushs para `main`
  - Build de produção
  - Deploy automático

## 📝 Licença

Todos os direitos reservados - Speak AI © 2025
