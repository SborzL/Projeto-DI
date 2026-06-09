# X Control — Landing Page

> Projeto Final · Desenvolvimento de Interfaces · UnB · Apresentação: 23/06/2026

***

## Sobre

Landing page institucional da **X Control**, empresa fictícia de controladoria financeira.
Desenvolvida com HTML5, CSS3 e JavaScript puro, seguindo princípios de UI/UX e acessibilidade WCAG 2.1 AA.

***

## Arquivos

```
projeto/
├── index.html    # Estrutura e conteúdo
├── style.css     # Estilização visual
├── script.js     # Interatividade
├── Control.png   # Logo principal
└── MiniLogo.png  # Favicon
```

***

## Seções

| Seção | Conteúdo |
|-------|----------|
| Início | Hero, badge, título, botão CTA, stats animados e diferenciais |
| Serviços | Grid 3×2 com os 6 serviços da empresa |
| Sobre | História, missão e diferenciais da X Control |
| Agendamento | Formulário de contato para agendar consultoria |
| Contato | Endereço, e-mail e telefone |

***

## Cronograma

### ✅ Sprint 1 — 02/06/2026 (Entregue)
Foco: HTML semântico + CSS base

- [x] Estrutura semântica completa (`header`, `section`, `footer`, `nav`)
- [x] Header fixo com logo e navbar centralizada
- [x] Paleta de cores verde com conformidade WCAG AA
- [x] Todas as 5 seções construídas
- [x] Formulário com validação HTML5
- [x] Hierarquia de headings correta
- [x] Labels vinculados aos inputs

### ✅ Sprint 2 — 09/06/2026 (Entregue)
Foco: JavaScript e interatividade

- [x] Header e `#inicio` com mesma cor, criando continuidade visual
- [x] Sombra no header ao rolar a página
- [x] Link ativo na navbar por seção visível (`IntersectionObserver`)
- [x] Seção início completa: badge, título, CTA, stats e diferenciais
- [x] Animação de entrada nos cards de serviço (fade + cascata)
- [x] Scrollbar personalizada

### 🔲 Sprint 3 — 16/06/2026
Foco: Tailwind CSS, responsividade e acessibilidade

- [ ] Integração do Tailwind CSS
- [ ] Responsividade mobile (375px) e tablet (768px)
- [ ] Revisão de contraste (mínimo 4.5:1 — WCAG AA)
- [ ] Navegação por teclado e `aria-label`
- [ ] Testes em Chrome, Firefox e Edge

### 🎓 Apresentação Final — 23/06/2026

- [ ] QA final em múltiplos dispositivos
- [ ] Roteiro: problema → solução → demonstração ao vivo

***

## Tecnologias

| Tecnologia | Papel |
|-----------|-------|
| HTML5 | Estrutura e semântica |
| CSS3 | Estilização e layout |
| JavaScript ES6+ | Interatividade |
| Tailwind CSS | Utilitários (Sprint 3) |

***

## Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Verde Escuro | `#14532d` | Hero, header, footer, títulos |
| Verde Acento | `#16a34a` | Botões e bordas de destaque |
| Verde Hover | `#15803d` | Estado hover dos botões |
| Fundo Suave | `#f0fdf4` | Fundo de seções alternadas |
| Texto Secundário | `#4b7a5e` | Parágrafos e descrições |

> `#14532d` sobre `#ffffff` → **10.2:1** (AAA) ✅  
> `#16a34a` sobre `#ffffff` → **4.6:1** (AA) ✅

***

*Desenvolvido por **Luis Andre Correia Sborz** — Desenvolvimento de Interfaces · 2026*