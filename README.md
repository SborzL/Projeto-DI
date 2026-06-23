# X Control — Site Institucional

Site institucional da **X Control**, empresa de controladoria e consultoria financeira sediada em Brasília, desenvolvido como projeto final da disciplina de Design de Interfaces.

***

## Sobre o Projeto

A X Control é uma consultoria financeira fundada em 2009 que atende mais de 1.000 clientes em todo o Brasil. Este site foi criado do zero usando apenas HTML, CSS e JavaScript puros — sem frameworks ou bibliotecas externas — com foco em boas práticas de desenvolvimento, acessibilidade e identidade visual consistente.

***

## Páginas

| Arquivo | Descrição |
|---|---|
| `index.html` | Página principal com todas as seções do site |
| `login.html` | Página de login com modal de recuperação de senha |

***

## Estrutura de Arquivos

```
xcontrol/
├── index.html
├── login.html
├── style.css
├── script.js
├── Control.png         ← Logo principal
├── MiniLogo.png        ← Logo reduzida para favicon/mobile
├── lupa.png            ← Ícone de busca
├── lupa-hover.png      ← Ícone de busca (hover)
├── lua.png             ← Ícone modo escuro
├── lua-hover.png       ← Ícone modo escuro (hover)
├── sol.png             ← Ícone modo claro
└── sol-hover.png       ← Ícone modo claro (hover)
```

***

## Seções do Site

- **Início** — Hero com card flutuante, estatísticas animadas e botões de ação
- **Serviços** — Grade com 6 serviços oferecidos e seção de resultados de impacto com contadores
- **Sobre** — História e missão da empresa com carrossel de depoimentos de clientes
- **Agendamento** — Formulário de contato com validação de e-mail
- **Contato** — Endereço, e-mails e telefones da empresa

***

## Funcionalidades

### Navegação
- Cabeçalho fixo com link ativo automático conforme a seção visível na tela
- Sombra no cabeçalho que aparece apenas ao rolar a página

### Busca
- Barra de busca deslizante no cabeçalho
- Destaca todos os termos encontrados no conteúdo da página
- Contador de resultados e navegação entre eles com `Enter`
- Fecha com `Esc` e limpa os destaques automaticamente

### Modo Escuro
- Alternância entre modo claro e escuro com ícones de sol/lua
- Todas as seções, incluindo o login, têm suporte completo ao modo escuro

### Animações
- Contadores animados nas seções de estatísticas e impacto (com suporte a prefixo e sufixo)
- Cards de serviço entram na tela com transição suave ao serem visualizados
- Carrossel de depoimentos com navegação por botões

### Formulário e Login
- Validação de e-mail em tempo real no formulário de agendamento
- Mensagem de confirmação após envio do formulário
- Página de login com modal de recuperação de senha

***

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura e semântica das páginas |
| CSS3 | Estilização, modo escuro, animações e responsividade |
| JavaScript (ES6+) | Interatividade, busca, carrossel, contadores e dark mode |
| Canva | Criação do logotipo e de todas as imagens do site |

***

## Acessibilidade

As cores do site foram verificadas seguindo as diretrizes **WCAG (Web Content Accessibility Guidelines)**, garantindo contraste mínimo de 4,5:1 para textos normais tanto no modo claro quanto no modo escuro.

***

## Como Abrir

Não é necessária nenhuma instalação. Basta abrir o arquivo `index.html` diretamente no navegador, ou usar a extensão **Live Server** do VS Code para visualização com atualização em tempo real.

***

## Referências e Ferramentas Usadas

- [W3Schools](https://www.w3schools.com) — referência de HTML, CSS e JavaScript
- [Canva](https://www.canva.com) — criação do logotipo e imagens
- [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) — diretrizes de acessibilidade
- YouTube — vídeos de aprendizado sobre CSS e JavaScript
- Claude e Google Gemini — suporte e aprendizado durante o desenvolvimento

***

## Autor
Luís André Sborz
Desenvolvido como projeto final da disciplina de Design de Interfaces — 2026.