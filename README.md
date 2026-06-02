# X Control — Landing Page de Controladoria

> Projeto Final da matéria de **Desenvolvimento de Interfaces**  
> Curso: Tecnologia da Informação | Universidade de Brasília  
> Apresentação Final: **23 de Junho de 2026**

---

## 📋 Sobre o Projeto

A **X Control** é uma landing page institucional de uma empresa fictícia de controladoria financeira, desenvolvida como projeto final da matéria de Desenvolvimento de Interfaces.

O site apresenta os serviços oferecidos pela empresa, sua história, um formulário de agendamento de consultoria e informações de contato. O desenvolvimento segue os princípios de **UI/UX**, as diretrizes de acessibilidade **WCAG 2.1 AA** e utiliza a stack obrigatória da matéria.

---

## 🗂️ Estrutura de Arquivos

```
projeto/
├── index.html       # Estrutura e conteúdo da página
├── style.css        # Toda a estilização visual
├── script.js        # Comportamentos e interatividade
├── Control.png      # Logo principal
└── MiniLogo.png     # Favicon (ícone da aba do navegador)
```

> Os três arquivos principais são mantidos **separados** intencionalmente:
> cada um tem uma responsabilidade única — estrutura, estilo e comportamento.

---

## 🖥️ Seções do Site

| Seção | Descrição |
|-------|-----------|
| **Início** | Hero com título, subtítulo e 3 cards de estatísticas |
| **Serviços** | Grid 3x2 com os 6 serviços oferecidos pela empresa |
| **Sobre** | História, missão e diferenciais da X Control |
| **Agendamento** | Formulário de contato para agendar uma consultoria |
| **Contato** | Endereço, e-mail e telefone da empresa |

---

## 🗓️ Cronograma de Desenvolvimento

### ✅ Sprint 1 — 02/06/2026 (Versão 1 — Entregue)
**Foco: Base, identidade visual e estrutura HTML + CSS**

- [x] Definição do tema: Landing page de controladoria (X Control)
- [x] Criação dos arquivos separados: `index.html`, `style.css`, `script.js`
- [x] Escolha da paleta de cores verde com conformidade WCAG AA
- [x] Estrutura semântica HTML (`header`, `section`, `footer`, `nav`)
- [x] Header fixo com logo à esquerda e navbar centralizada
- [x] Âncoras internas na navbar (`href="#secao"`)
- [x] Favicon configurado no `<head>`
- [x] `lang="pt-BR"` no `<html>`
- [x] Seção Início: hero com `<h1>` e 3 stats cards (Flexbox)
- [x] Seção Serviços: 6 cards em grid 3x2 (CSS Grid)
- [x] Seção Sobre: texto institucional com história e missão
- [x] Seção Agendamento: formulário com campos e validação HTML5
- [x] Seção Contato: endereço, e-mail e telefone em cards
- [x] Footer com copyright
- [x] Hierarquia de headings correta (`h1` único, demais `h2`)
- [x] Labels vinculados aos inputs (`for`/`id`) — acessibilidade

**Entregável:** Site estruturado com HTML semântico e CSS aplicado

---

### 🔲 Sprint 2 — 09/06/2026
**Foco: JavaScript e responsividade**

- [ ] Sombra no header ao rolar a página (`scroll` event)
- [ ] Validação de formulário com JS (feedback de erro/sucesso)
- [ ] Animações de entrada ao rolar a página (scroll reveal)
- [ ] Responsividade mobile (375px) e tablet (768px)
- [ ] Menu hamburguer para telas pequenas
- [ ] Imagens com atributos `alt`, `width` e `height`

**Entregável:** Site interativo e responsivo em múltiplos dispositivos

---

### 🔲 Sprint 3 — 16/06/2026
**Foco: Tailwind CSS, acessibilidade e polimento**

- [ ] Integração do Tailwind CSS
- [ ] Revisão geral de contraste (mínimo 4.5:1 — WCAG AA)
- [ ] Navegação completa por teclado
- [ ] Adição de `aria-label` onde necessário
- [ ] Testes em múltiplos navegadores (Chrome, Firefox, Edge)
- [ ] Polimento visual e micro-interações finais

**Entregável:** Site acessível, com Tailwind integrado e refinado

---

### 🎓 Apresentação Final — 23/06/2026
**Foco: QA final e apresentação para a turma**

- [ ] Correção de bugs finais
- [ ] Testes em múltiplos dispositivos (mobile, tablet, desktop)
- [ ] Preparação do roteiro: problema → solução → demonstração ao vivo
- [ ] Apresentação destacando escolhas de UI/UX e conformidade WCAG

**Entregável:** Projeto final apresentado ✓

---

## 🎨 Paleta de Cores

| Papel | Hex | Uso |
|-------|-----|-----|
| Verde Escuro | `#14532d` | Hero, footer, títulos principais |
| Verde Acento | `#16a34a` | Botões, hover, bordas de destaque |
| Verde Hover | `#15803d` | Estado hover dos botões |
| Verde Gelo | `#dcfce7` | Fundo do header |
| Fundo Suave | `#f0fdf4` | Fundo de seções alternadas |
| Verde Escurinho | `#bbf7d0` | Bordas de inputs e separadores |
| Texto Principal | `#14532d` | Títulos em fundo claro |
| Texto Secundário | `#4b7a5e` | Parágrafos e descrições |

> **Base WCAG:** `#14532d` sobre `#ffffff` → ratio **10.2:1** (AAA) ✅  
> **Base WCAG:** `#16a34a` sobre `#ffffff` → ratio **4.6:1** (AA) ✅

---

## 🧩 Organograma do Projeto

```
X Control — Landing Page
│
├── 📄 Estrutura HTML (index.html)
│   ├── <header> — Logo + Navbar com âncoras
│   ├── <section id="inicio"> — Hero + Stats
│   ├── <section id="servicos"> — Grid de 6 cards
│   ├── <section id="sobre"> — Texto institucional
│   ├── <section id="agendamento"> — Formulário
│   ├── <section id="contato"> — Cards de contato
│   └── <footer> — Copyright
│
├── 🎨 Estilização CSS (style.css)
│   ├── Reset e base (body, html)
│   ├── Header e navbar
│   ├── Seção Início (hero, stats flex)
│   ├── Seção Serviços (CSS Grid 3x2)
│   ├── Seção Sobre
│   ├── Formulário de agendamento
│   ├── Seção Contato
│   └── Footer
│
├── ⚡ Interatividade JS (script.js)
│   ├── Sombra no header ao rolar
│   ├── Validação do formulário
│   └── Animações de scroll (Sprint 2)
│
└── ♿ Acessibilidade WCAG 2.1 AA
    ├── Contraste mínimo 4.5:1
    ├── HTML semântico
    ├── Hierarquia de headings
    ├── alt text em imagens
    └── Labels vinculados a inputs
```

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Papel |
|-----------|--------|-------|
| HTML5 | — | Estrutura e semântica |
| CSS3 | — | Estilização e layout |
| JavaScript | ES6+ | Interatividade |
| Tailwind CSS | 3.x | Utilitários (Sprint 3) |

---

## 📐 Princípios de UI/UX Aplicados

1. **Hierarquia visual** — Um `<h1>` por página; demais títulos em `<h2>`
2. **Contraste** — Paleta verde com ratio mínimo 4.5:1 conforme WCAG AA
3. **Consistência** — Mesma estrutura de card em todas as seções
4. **Feedback visual** — Hover nos cards (`translateY`) e links (cor)
5. **Psicologia das cores** — Verde transmite crescimento e estabilidade; azul-marinho, confiança
6. **Semântica HTML** — Tags corretas para cada tipo de conteúdo
7. **Acessibilidade** — `label` + `for/id`, `alt` em imagens, `lang` no HTML, `:focus` visível

---

*Desenvolvido por **Luis Andre Correia Sborz** — Desenvolvimento de Interfaces · 2026*
