# 🌐 Site do Projeto — TIC Eixo Norte

Espaço dedicado ao **site de project's documentation and citizen access** sobre a concessão do Trem Intercidades — Eixo Norte.

> 🚧 **Em construção.** Esta pasta foi criada na reorganização do repositório e será preenchida conforme a definição da stack.

---

## 🎯 Objetivo do site

Tornar os **dados públicos** desta concessão acessíveis a cidadãos que não são especialistas em infraestrutura ferroviária:

| Público-alvo | O que precisa encontrar |
|---|---|
| **Cidadão comum** | "O que está sendo construído perto de mim? Quanto custa? Quando abre?" |
| **Morador de área afetada** | "Vai passar perto da minha casa? Tem desapropriação? Tem obra de arte?" |
| **Pesquisador / jornalista** | Dados estruturados, cronologia, comparações entre edital e contrato |
| **Participante de audiência pública** | Onde estão os anexos, contratos e termos aditivos que fundamentam as decisões |

---

## 📦 O que o site vai consumir

Tudo vem de [`../Dados Públicos/`](../Dados%20P%C3%BAblicos/), sem duplicar arquivos:

| Fonte | Uso previsto |
|---|---|
| `10 - Dados Públicos/10 - Dados Públicos/10 - Dados Públicos/10 - Dados Públicos/10 - Dados Públicos/10 - Dados Públicos/10 - Dados Estruturados/*.csv` | Tabelas de trechos, ativos por km, intervenções e interferências — **ideais para gráficos e mapas** |
| `01` a `09` | Documentos-fonte para download e citação |
| `06 .../00 - Consolidado/CONSOLIDADO-TIC-EIXO-NORTE.png` | Imagem do traçado completo |
| [`../Agentes/`](../Agentes/) | Dados atualizados periodicamente por agentes de IA |

---

## 💡 Stack sugerida

Não há escolha definida ainda. Opções que combinam bem com um repositório público e estático:

| Opção | Quando faz sentido |
|---|---|
| **Astro** | Site Mostly-estático, ótimo em Markdown, SEO-friendly, deploy grátis no GitHub Pages |
| **Next.js** | Se houver necessidade de SSR, API routes ou áreas autenticadas |
| **MkDocs / Docusaurus** | Se o foco for documentação técnica, sem identidade visual própria |
| **Hugo** | Máximo desempenho e simplicidade, sem runtime JS |

Requisitos transversais:

- 🇧🇷 Interface em **português**
- 📱 **responsivo** (acesso majoritariamente por celular)
- ♿ **acessibilidade** (WCAG) — é um repositório de transparência
- 🔎 **SEO** para busca por "TIC Eixo Norte", "Trem Intercidades", "trem Campinas"
- 📄 **estático**, para ser hospedável sem custo e sem servidor próprio

---

## 📋 Próximos passos

- [ ] Definir a stack
- [ ] Mapear os dados estruturados para os formatos de exibição (mapa, timeline, tabelas)
- [ ] Criar a linha do tempo do projeto a partir de `04 - Publicações Oficiais`
- [ ] Publicar o mapa do traçado com as estações e obras de arte
- [ ] Configurar publicação automática (GitHub Pages / Vercel / Cloudflare)

---

Ver também: [`../README.md`](../README.md) · [`../Agentes/README.md`](../Agentes/README.md)
