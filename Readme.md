## 📱 Aplicativo de Gerenciamento de Turmas com Times

Este projeto é um aplicativo desenvolvido com Expo, voltado para o gerenciamento de turmas em competições, onde os usuários podem organizar e gerenciar dois times. A estrutura do aplicativo é bem organizada, apresentando uma variedade de componentes, telas e recursos que facilitam a interação do usuário.

## 💻 Tecnologias Utilizadas

- **Expo**: Framework para desenvolvimento rápido de aplicativos móveis.
- **React Native**: Biblioteca para construir interfaces de usuário nativas.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript.
- **Styled Components**: Biblioteca para estilizar componentes React.
- **React Native AsyncStorage**: Biblioteca para armazenamento local.

## 📂 Arquitetura do Projeto

### 📁 src/

O código-fonte principal da aplicação está organizado da seguinte forma:

- **`@types/`**: Definições de tipos para TypeScript.
  - `global.d.ts`, `navigation.d.ts`, `png.d.ts`, `styled.d.ts`: Tipos globais, de navegação, para imagens PNG e componentes estilizados.
- **`assets/`**: Recursos estáticos como imagens.
  - `logo.png`, `logo@2x.png`, `logo@3x.png`: Versões do logo em diferentes resoluções.
- **`components/`**: Componentes reutilizáveis da interface.
  - `Button/`, `ButtonIcon/`, `Filter/`, `GroupCard/`, `Header/`, `Highlight/`, `Input/`, `ListEmpty/`, `Loading/`, `PlayerCard/`: Cada pasta contém um componente com seu código (`index.tsx`) e estilos (`styles.ts`).
- **`routes/`**: Definição das rotas de navegação do aplicativo.
  - `app.routes.tsx`, `index.tsx`: Arquivos de configuração das rotas.
- **`screens/`**: Telas principais do aplicativo.
  - `Groups/`, `NewGroup/`, `Players/`: Cada pasta representa uma tela com seu código e estilos.
- **`storage/`**: Lógica de armazenamento de dados.
  - **`group/`**: Funções relacionadas ao armazenamento de grupos.
    - `groupCreate.ts`, `groupRemoveByName.ts`, `groupsGetAll.ts`
  - **`player/`**: Funções relacionadas ao armazenamento de jogadores.
    - `PlayerStorageDTO.ts`, `playerAddByGroup.ts`, `playerGetByGroup.ts`, `playerGetByGroupAndTeams.ts`, `playerRemoveByGroup.ts`
  - `storageConfig.ts`: Configurações gerais de armazenamento.
- **`theme/`**: Define o tema visual do aplicativo.
  - `index.ts`
- **`utils/`**: Utilitários diversos.
  - `AppError.ts`: Classe para tratamento de erros.

### 📄 Arquivos da raiz

- `.expo/`: Configurações específicas do Expo.
  - `README.md`: Documentação interna para o Expo.
  - `devices.json`: Informações sobre os dispositivos de desenvolvimento.
- **`App.tsx`** 🚀: Ponto de entrada principal do aplicativo React Native.
- **`app.json`**: Configurações principais do aplicativo Expo.
- **`assets/`**: Recursos estáticos adicionais, como ícones e splash screen.
  - `adaptive-icon.png`, `favicon.png`, `icon.png`, `splash.png`
- **`babel.config.js`**: Configurações do Babel para transpilação de código.
- **`package-lock.json`, `package.json`** 📦: Gerenciamento de dependências.
- **`README.md`** 📄: Este arquivo detalhado sobre o projeto.
- **`tsconfig.json`** ⚙️: Configurações do compilador TypeScript.

  **Instruções de Instalação e Execução**:

  ```bash
  # Para instalar as dependências
  npm install

  # Para iniciar o aplicativo
  expo start
  ```
