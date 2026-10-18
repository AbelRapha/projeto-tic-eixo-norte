# 🗺️ Plantas do projeto (CAD)

Arquivos **AutoCAD (.dwg)** do projeto conceitual do Trem Intercidades — Eixo Norte, extraídos dos anexos técnicos do edital.

São **43 arquivos DWG** organizados em **5 pastas temáticas**.

> ⚠️ Arquivos binários: para visualizar, use **AutoCAD**, **LibreCAD**, **QCAD**, **DWG TrueView** (gratuito) ou conversores online.

---

## 📂 Temas

### `01 - Topografia e base geográfica` — 10 arquivos

Levantamentos topográficos do terreno e as bases de referência do traçado.

| Arquivo | Conteúdo |
|---|---|
| `TOPOGRAFIA - TR1.A (BARRA FUNDA_PERUS)+AGUA-BRANCA.dwg` | Topografia do trecho 1.A + Água Branca |
| `TOPOGRAFIA - TR1.B (PERUS_BOTUJURU).dwg` | Topografia do trecho 1.B |
| `TOPOGRAFIA - TR1.C (BOTUJURU_JUNDIAÍ).dwg` | Topografia do trecho 1.C |
| `TOPOGRAFIA - TR2.A1 (JUNDIAÍ_LOUVEIRA).dwg` | Topografia do trecho 2.A1 |
| `TOPOGRAFIA - TR2.A2 (LOUVEIRA_VALINHOS)_CINZA.dwg` | Topografia do trecho 2.A2 |
| `TOPOGRAFIA - TR2.B (VALINHOS_CAMPINAS).dwg` | Topografia do trecho 2.B |
| `ACAD-Trecho Total_BASE ESTAÇÕES.dwg` | **Base de localização das estações** |
| `ACAD-Trecho Total_BASE LIMITE MUNICIPIOS.dwg` | **Limites dos municípios** atravessados |
| `ACAD-Trecho Total_Faixa de dominio.dwg` | **Faixa de domínio** da ferrovia |
| `IMAGENS TRECHO TOTAL.dwg` | Imagens do trecho total |

### `02 - Geometria e articulação do traçado` — 12 arquivos

A **geometria do projeto**: articulação do traçado e plantas por trecho, com as estacas de início e fim.

| Arquivo | Trecho | Estacas |
|---|---|---|
| `Trecho_1.A _ARTICULACAO_TIC_Barra Funda_Perus_R05.dwg` | Barra Funda – Perus | — |
| `Trecho_1.B_ARTICULACAO_TIC_Perus-Botujuru_R05.dwg` | Perus – Botujuru | — |
| `Trecho_1.C _ARTICULACAO_TIC_Botujuru_Jundiai_R05.dwg` | Botujuru – Jundiaí | — |
| `Trecho_2.A.1_ARTICULAÇÃO_TIC_jundiai_Louveira_R05.dwg` | Jundiaí – Louveira | — |
| `Trecho_2.A.2_ARTICULAÇÃO_Louveira_Valinhos_R05.dwg` | Louveira – Valinhos | — |
| `Trecho_2.B_ARTICULAÇÃO_Valinhos-Campinas_R05.dwg` | Valinhos – Campinas | — |
| `III-TRECHO BARRA FUNDA-PERUS...Rev06 08.02.2021.dwg` | Barra Funda – Perus | 2+235 a 21+800 |
| `IV-TRECHO PERUS-BOTUJURU...Rev06 08.02.2021.dwg` | Perus – Botujuru | 21+800 a 44+120 |
| `V-TRECHO BOTUJURU-JUNDIAÍ...Rev06 08.02.2021.dwg` | Botujuru – Jundiaí | 44+120 a 60+800 |
| `VI-TRECHO JUNDIAI-LOUVEIRA...Rev06 08.02.2021.dwg` | Jundiaí – Louveira | 60+800 a 81+740 |
| `VII-TRECHO LOUVEIRA-VALINHOS...Rev06 08.02.2021.dwg` | Louveira – Valinhos | 81+740 a 98+660 |
| `VIII-TRECHO VALINHOS-CAMPINAS...Rev06 08.02.2021.dwg` | Valinhos – Campinas | 98+660 a 106+700 |

> 💡 Esta pasta é a **fonte primária da referência linear** usada nas planilhas de [`../Dados Estruturados/`](../Dados%20Estruturados/). As estacas aqui listadas (2+235, 21+800, 44+120, 60+800, 81+740, 98+660, 106+700) correspondem exatamente aos valores consolidados em `trechos_e_estacas.csv`.

### `03 - Mosaicos por trecho (Apenso)` — 6 arquivos

Mosaicos de mapa por trecho, correspondentes aos **Apensos 9 a 14** do anexo de áreas.

| Arquivo | Trecho |
|---|---|
| `Apenso 9 - MOSAICO TRECHO BFU-PRU Rev02 30.04.2021.dwg` | Barra Funda – Perus |
| `Apenso 10 - MOSAICO TRECHO PRU-BTJ Rev02 30.04.2021.dwg` | Perus – Botujuru |
| `Apenso 11 - MOSAICO TRECHO BTJ-JUN Rev02 30.04.2021.dwg` | Botujuru – Jundiaí |
| `Apenso 12 - MOSAICO TRECHO JUN-LOU Rev02 30.04.2021.dwg` | Jundiaí – Louveira |
| `Apenso 13 - MOSAICO TRECHO LOU-VAL Rev02 30.04.2021.dwg` | Louveira – Valinhos |
| `Apenso 14 - MOSAICO TRECHO VAL-CAM Rev02 30.04.2021.dwg` | Valinhos – Campinas |

### `04 - Elementos de projeto` — 9 arquivos

Camadas temáticas do traçado completo (todas com prefixo `TIC_`).

| Arquivo | Tema |
|---|---|
| `ACAD-Trecho total_TIC_02_ESTACAS_GERAL.dwg` | **Estacas gerais** — malha de quilometragem completa |
| `ACAD-Trecho Total_TIC_DESAP.dwg` | **Desapropriação** — áreas a expropriar |
| `ACAD-Trecho Total_TIC_OAE.dwg` | **Obras de Arte Especiais** — viadutos, pontes, túneis |
| `ACAD-Trecho Total_TIC_PASSARELAS.dwg` | **Passarelas** de pedestres |
| `ACAD-Trecho Total_TIC_NOMES VIADUTOS.dwg` | **Identificação nominal** dos viadutos |
| `ACAD-Trecho Total_TIC_TALUDES E MUROS.dwg` | **Taludes e muros de contenção** |
| `ACAD-Trecho Total_TIC_DRENAGEM_DISPOSITIVOS.dwg` | **Drenagem e dispositivos** de drenagem |
| `ACAD-Trecho Total_TIC_INTERFERENCIAS.dwg` | **Interferências** com redes existentes |
| `ACAD-Trecho Total_TIC_Elementos.dwg` | **Elementos** do traçado |

### `05 - Imagens e fotos aéreas` — 6 arquivos

Pranchas de imagens aéreas/imagens de satélite com as fotos removidas (`SEM FOTOS`), servindo de base para sobreposição.

| Arquivo |
|---|
| `ACAD-1A-SEM FOTOS.dwg` |
| `ACAD-1B-SEM FOTOS.dwg` |
| `ACAD-1C-SEM FOTOS.dwg` |
| `ACAD-2A1-SEM FOTOS.dwg` |
| `ACAD-2A2-SEM FOTOS.dwg` |
| `ACAD-2B-SEM FOTOS.dwg` |

---

## 🔗 Relação com o restante do repositório

| O que você procura | Onde está |
|---|---|
| Normas e especificações técnicas | `../02 - Anexos/` (Anexo II.B — Via Permanente) |
| Perfis e traçado em texto | `../02 - Anexos/ANEXO I.2-AREAS` |
| Localização de estações e subestações em tabela | `../Dados Estruturados/ativos_por_km.csv` |
| Localização das obras do Poder Concedente | `../Dados Estruturados/intervencoes_poder_concedente.csv` |

---

## 📐 Sobre o datum nestas plantas

Os arquivos DWG **podem conter um sistema de coordenadas georreferenciado na definição do desenho** (no AutoCAD, via `UNITS` e `GEOGRAPHICPIN`). Como não foi possível abrir os arquivos no AutoCAD nesta conferência, **não é possível afirmar qual o datum aplicado**.

👉 Para descobrir: abra o arquivo no AutoCAD ou no QCAD e verifique:

1. Comando `GEOGRAPHICPIN` → mostra latitude/longitude de um ponto;
2. Botão direito no UCS World → **Properties** → mostra o sistema de coordenadas;
3. Comando `LTSCALE` / `LIST` → mostra as coordenadas do ponto de origem.

Se encontrar coordenadas SIRGAS 2000 (fuso 23 S), **documente aqui** — isso permite converter a quilometragem em latitude e longitude.

---

## ⚖️ Aviso

Os arquivos DWG são **projetos técnicos de terceiros** (elaborados pela concessionária/projetista e juntados ao edital). Estão aqui para consulta pública e apoio à fiscalização. Em caso de dúvida sobre autoria ou uso, consulte o edital e as fontes oficiais.
