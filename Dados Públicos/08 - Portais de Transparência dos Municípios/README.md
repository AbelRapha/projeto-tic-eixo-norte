# 🌿 Informações dos portais de transparência dos municípios

Documentos baixados dos **portais de transparência municipal** ao longo do traçado. São, em geral, os **atos ambientais e urbanísticos** que o município emite para a obra — complementares ao Anexo IV do edital (licenciamento ambiental), que trata do **enquadramento estadual** pela CETESB.

> 📌 **Por que importa:** o edital define o licenciamento em nível estadual, mas a obra ainda atravessa o aparato municipal. São esses atos que registram o que foi **aprovado, condicionado ou recusado** em cada prefeitura.

---

## 📂 Subpastas

### `Vinhedo/` — 6 documentos

| Arquivo | Documento | Órgão | Páginas |
|---|---|---|---|
| `Autorização Ambiental 28477-2026.pdf` | **Autorização Ambiental nº 28477/2026** — Processo eAmbiente CETESB.068292/2025-77 | CETESB | 12 |
| `Parecer Técnico - CETESB - TIC-TIM.pdf` | **Parecer Técnico nº 026/26/IL** — autorização de supressão de vegetação nativa, intervenção em APP e corte de árvores isoladas | CETESB | 14 |
| `Licença de Instalação.pdf` | **Licença Ambiental de Instalação nº 2858** — Processo de Impacto CETESB.067919/2025-89 | CETESB | 8 |
| `Planta Ambiental - Vinhedo.pdf` | **Mapa Síntese do Diagnóstico Ambiental** da Autorização de Supressão de Vegetação (ASV) | Concessionária | 8 |
| `Entorno passagem de fauna.pdf` | Detalhe da **passagem de fauna** — caixa tipo E1, BSTM Ø2,00 m, `km 79+463` | Concessionária | 1 |
| `TCRA.pdf` | **Termo de Compromisso de Regularização Ambiental** (documento escaneado, sem camada de texto) | Concessionária | 2 |

### 📌 O que os documentos dizem

**O objeto é o Trecho 3, `km 62+720` ao `km 106+700`** — o segmento **Jundiaí / Campinas**, que na divisão oficial da concessão corresponde a **Jundiaí – Louveira · Louveira – Valinhos · Valinhos – Campinas**.

> **Autorização Ambiental nº 28477/2026** — Interessado **TIC Trens S.A.** (CNPJ 55.024.743/0001-93), empreendimento *Trem Intercidades (TIC) Eixo Norte, segmento Jundiaí / Campinas, km 62+720 ao km 106+700*, localizado na **Avenida União dos Ferroviários**, área rural e urbana.

> **Parecer Técnico nº 026/26/IL** (25/03/2026) — Processo de Impacto 315/2025. Autoriza **supressão de vegetação nativa**, **intervenção em Área de Preservação Permanente** e **corte de árvores isoladas**.

> **Licença de Instalação nº 2858** — emitida nos termos da Lei Federal 6.938/1981 e da Lei Estadual 13.542/2009.

> **Planta Ambiental** — cobre **Jundiaí, Louveira, Vinhedo, Valinhos e Campinas**, com hidrografia do **Rio Capivari** e dos **córregos da Água do Buracão**. Indica **Km 76+500 a 77+000**.

> **Passagem de fauna** — caixa **BSTM Ø 2,00 m**, tipo E1, em **`km 79+464,54`** (estaca `79+463,76`).

---

## 🗺️ Sobre as coordenadas — um detalhe importante

A `Planta Ambiental - Vinhedo.pdf` **declara explicitamente** o datum no quadro de abertura:

> *Datum horizontal - SIRGAS 2000 · Projeção UTM (Universal Transversa de Mercator) 23 S*

Isso é relevante porque o repositório registra que o **datum nunca é declarado nos documentos do edital** — e aqui, num documento **municipal**, ele aparece.

⚠️ **Mas a declaração não se confirma em campo.** A malha plotada (`E 300.250–300.750 · N 7.446.250–7.447.000`), lida como UTM 23S, cai perto de **longitude −45,3° / latitude −22,6°** — ou seja, no interior de São Paulo, a centenas de quilômetros de Campinas (que fica em −47,06° / −22,91°). A passagem de fauna, por sua vez, traz `X=227.650 · Y=404.600`, que é claramente o **sistema local do desenho**.

👉 Conclusão: **o rótulo SIRGAS 2000 está no documento, mas os números plotados continuam em sistema local.** Tratar as coordenadas com a mesma cautela já registrada no [`LEIA-ME.md`](../10%20-%20Dados%20Estruturados/LEIA-ME.md).

---

## 🔗 Relação com o restante do repositório

| O que você procura | Onde está |
|---|---|
| Enquadramento **estadual** do licenciamento | `../../02 - Anexos/ANEXO IV.A - LICENCIAMENTO AMBIENTAL_TIC.pdf` |
| Escopo previsto para o **EIA** | `../../02 - Anexos/ANEXO IV.D-ESCOPO PROPOSTO EIA_TIC Eixo Norte.pdf` |
| Licenças ambientais do edital | `../../02 - Anexos/ANEXO IV.C- LICENÇAS AMBIENTAIS_TIC.pdf` |
| Riscos de desastres naturais | `../../02 - Anexos/ANEXO IV.G - RISCOS DESATRES NATURAIS_TIC.pdf` |
| Trechos e estacas dos km citados | `../../../10 - Dados Públicos/10 - Dados Públicos/10 - Dados Públicos/10 - Dados Públicos/10 - Dados Públicos/10 - Dados Públicos/10 - Dados Públicos/10 - Dados Estruturados/trechos_e_estacas.csv` |

---

## 📌 Como esta pasta deve crescer

Novas subpastas devem ser criadas **por município**, seguindo o padrão `NomeDoMunicipio/`. Os 11 municípios atravessados pelo TIC Eixo Norte são, por ordem de percurso: São Paulo (Barra Funda) · Caieiras · Franco da Rocha · Francisco Morato · Osasco · Carapicuíba · Barueri · Jundiaí · Louveira · **Vinhedo** · Valinhos · Campinas.

> Ao adicionar um documento, registre: **órgão emissor**, **número do ato**, **data** e **km ou endereço**, para que a busca por quilometragem funcione.