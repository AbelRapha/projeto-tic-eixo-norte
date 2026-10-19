# 🌐 Site do Projeto: TIC Eixo Norte

Site de acesso público sobre a concessão do **Trem Intercidades Eixo Norte**.

| Arquivo | Descrição |
|---|---|
| `index.html` | Página única, com as 4 seções principais |
| `assets/css/style.css` | Folha de estilo completa (responsiva, sem framework) |
| `assets/js/main.js` | Menu móvel, abas, filtro, contadores, scroll-spy, revelação |
| `assets/img/` | Imagens usadas e icones do site (favicon em SVG, PNG e ICO) |
| `CREDITOS-IMAGENS.md` | **Origem e direitos de uso de cada imagem. Leia antes de publicar** |

---

## 🚀 Como abrir

**Opção 1: abrir direto no navegador**

```bash
# a partir da pasta Site/
start index.html
```

**Opção 2: servidor local** (recomendado, evita restrição de `file://`)

```bash
cd Site
python -m http.server 8000
# abra http://localhost:8000
```

---

## 🔗 Links para os documentos

Todos os botões que levam aos documentos públicos usam **URL absoluta do GitHub**:

```html
https://github.com/AbelRapha/projeto-tic-eixo-norte/tree/main/Dados%20P%C3%BAblicos
```

**Vantagem:** funcionam em **qualquer** hospedagem como GitHub Pages, Vercel, Cloudflare Pages, um servidor próprio ou mesmo abrindo o HTML direto do disco. Sem depender de onde o site foi publicado.

| Link | Destino |
|---|---|
| Ver documentos públicos | `Dados Públicos/` (10 pastas) |
| Explorar os dados estruturados | `10 - Dados Estruturados/` (6 arquivos) |
| Abrir o desenho completo | `06 - Plantas do Projeto (CAD)/00 - Consolidado/` |
| Rodapé: Edital e minutas | `01 - Edital e Minutas/` (6 arquivos) |
| Rodapé: Anexos técnicos | `02 - Anexos/` (43 arquivos) |
| Rodapé: Contrato e aditivos | `03 - Contrato e Termos Aditivos/` (7 arquivos) |
| Rodapé: Publicações no DOE | `04 - Publicações Oficiais/` (18 arquivos) |

Todos abrem em nova aba (`target="_blank"`) com `rel="noopener"`, e **foram verificados como HTTP 200** e confirmados pela API do GitHub.

> ⚠️ **Se você renomear ou mover as pastas**, é preciso atualizar essas URLs, pois elas contêm o nome das pastas.

---

## 🎨 Estrutura das seções

| # | Seção | Conteúdo |
|---|---|---|
| 01 | **Sobre** | O que é o projeto, os três serviços, por que este portal existe |
| 02 | **Cidades participantes** | 11 municípios com quilometragem e **filtro por região** |
| 03 | **Informações técnicas** | 4 abas: serviços · traçado e trechos · obras e drenagem · energia |
| 04 | **Andamento** | Linha do tempo de 2013 a 2054, com 2026 destacado |

---

## 🧩 Recursos de JavaScript

Todos sem dependências externas (~5,6 KB):

- **Menu móvel:** colapsa abaixo de 820 px
- **Abas:** em "Informações técnicas", sem recarga
- **Filtro de cidades:** por região (11 = 4 capital + 3 aglomeração + 4 RMS)
- **Contadores animados:** números que contam ao entrar na viewport
- **Scroll-spy:** destaca o link da seção atual
- **Revelação no scroll:** `IntersectionObserver` com `threshold` baixo

### Acessibilidade

- Marcação semântica (`header`, `nav`, `main`, `section`, `footer`)
- Link "pular para o conteúdo"
- `aria-*` nos controles (menu, abas, chips)
- Respeita `prefers-reduced-motion`
- **Guarda `.js`:** sem JavaScript, **todo o conteúdo fica visível** (sem tela em branco)

---

## 🖼️ Imagens

| Arquivo | Origem |
|---|---|
| `hero-trem-intercidades.jpg` | PPI-SP (Estado de São Paulo) |
| `infraestrutura-existente.jpg` | PPI-SP (Estado de São Paulo) |

⚠️ **Antes de publicar publicamente, leia [`CREDITOS-IMAGENS.md`](CREDITOS-IMAGENS.md).** As duas fotografias vêm de
portais oficiais, mas isso não garante domínio público: pode haver direitos de autor de terceiros.

---

## 🔗 De onde vêm os números

Todos os dados quantitativos vêm de:

| Dado | Fonte no repositório |
|---|---|
| Extensão, prazos, valores, datas | `../Dados Públicos/01` a `04` (edital, contrato, DOE) |
| Cidades e km de cada estação | `../Dados Públicos/10 - Dados Estruturados/ativos_por_km.csv` |
| Trechos e estacas | `../Dados Públicos/10 - Dados Estruturados/trechos_e_estacas.csv` |
| Obras de arte, drenagem, subestações | `../Dados Públicos/10 - Dados Estruturados/*.csv` + CADs do Anexo II |

> Atualizar os CSVs é atualizar o site. É esse o objetivo do bloco [`../Agentes/`](../Agentes/).

---

## 🎨 Identidade visual

Inspirado no modelo [Nigeria Railway Corporation Redesign](https://dribbble.com/shots/25011221-Nigeria-Railway-Corporation-Redesign)
(Dribbble, de Stanley Chidubem), **apenas como referência de estilo**, sem copiar a imagem.

| Token | Valor | Uso |
|---|---|---|
| `--verde-800` | `#0d3b2e` | primário, títulos, botões |
| `--verde-600` | `#1a6b4f` | destaques |
| `--sage-100` | `#e4ece7` | seções alternadas, fundo do hero |
| `--ambar` | `#f0b429` | acento (olho, ano atual, destaques) |
| `--display` | Archivo 900 | títulos em caixa alta |
| `--texto` | Inter 400 a 700 | corpo |

Tipografia via [Google Fonts](https://fonts.google.com/), com fallback de sistema caso a rede falhe.

---

## 📋 Próximos passos

- [ ] Definir domínio e hospedagem (GitHub Pages na raiz do repositório)
- [ ] **Resolver a questão de direitos das fotos** (ou trocá-las por imagens livres)
- [ ] Gerar a linha do tempo automaticamente a partir de `04 - Publicações Oficiais`
- [ ] Adicionar mapa interativo substituindo a imagem estática
- [ ] Conectar os CSVs para gerar as tabelas em vez de escrevê-las à mão
- [ ] Traduzir para inglês / espanhol
- [ ] Medir acessibilidade com Lighthouse

---

Ver também: [`../README.md`](../README.md) · [`../Agentes/README.md`](../Agentes/README.md) · [`../Dados Públicos/`](../Dados%20P%C3%BAblicos/)
