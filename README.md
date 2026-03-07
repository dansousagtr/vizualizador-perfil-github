# 🔍 Visualizador de Perfil do GitHub

Uma aplicação web desenvolvida para facilitar a consulta de perfis de desenvolvedores no GitHub. O projeto consome a API REST oficial do GitHub para extrair dados em tempo real e exibi-los em uma interface moderna e responsiva.

## 🎯 Objetivo do Projeto
Este projeto foi desenvolvido com foco em consolidar conhecimentos fundamentais de Front-end, incluindo:
- **Consumo de APIs Assíncronas:** Uso de `fetch`, `async` e `await`.
- **Manipulação do DOM:** Atualização dinâmica do HTML com base nos dados recebidos.
- **Módulos JavaScript:** Organização do código em arquivos separados (`ES6 Modules`).
- **CSS Avançado:** Implementação de animações e design adaptável para dispositivos móveis.

## 🚀 Funcionalidades Detalhadas
- **Busca por Nome de Usuário:** Retorna dados públicos como nome, foto, bio, número de seguidores e quem o usuário segue.
- **Listagem de Repositórios:** Exibe os repositórios públicos, incluindo o nome e o link para acesso direto.
- **Tratamento de Erros:** Exibição de alertas caso o usuário não seja encontrado ou ocorra algum problema na conexão.
- **Experiência de Usuário (UX):** Feedback visual de "Carregando..." enquanto os dados são processados.

## 🛠️ Tecnologias e Ferramentas
- **Linguagens:** HTML5, CSS3 e JavaScript (ES6+).
- **Ícones:** [Devicon](https://devicon.dev/) (para a marca do GitHub e tecnologias).
- **API Externa:** [GitHub REST API](https://docs.github.com/en/rest).

## 📁 Organização de Pastas
O projeto segue uma estrutura modular para facilitar a manutenção:
- `src/css/animations.css`: Contém as regras de animações de entrada dos elementos.
- `src/css/responsive.css`: Define os estilos para telas menores (Media Queries).
- `src/js/githubApi.js`: Responsável exclusivamente pelas chamadas de rede (Fetch).
- `src/js/profileView.js`: Responsável por gerar o HTML que exibe os dados na tela.
- `src/js/index.js`: O arquivo central que coordena os eventos e a lógica principal.

## ⚙️ Como Rodar Localmente
1. **Clonagem:**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. **Execução:**
   - Como o projeto utiliza **Módulos JavaScript**, você precisa rodá-lo através de um servidor local (como a extensão *Live Server* do VS Code) para que as importações funcionem corretamente.
   - Basta abrir o `index.html` através do servidor local no seu navegador.

## 💡 Próximas Melhorias (Roadmap)
- [ ] Exibir os 10 últimos eventos do usuário (commits, pushes, etc).
- [ ] Listar as linguagens de programação mais utilizadas em cada repositório.
- [ ] Adicionar modo escuro (Dark Mode).

---
⌨️ Desenvolvido por [Daniel] durante estudos de desenvolvimento Web.
