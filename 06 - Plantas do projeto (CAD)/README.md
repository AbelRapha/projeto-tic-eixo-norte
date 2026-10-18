# 🗺️ Plantas do projeto (CAD)

Arquivos **AutoCAD (.dwg)** do projeto conceitual do Trem Intercidades — Eixo Norte, extraídos dos anexos técnicos do edital.

São **43 arquivos DWG** organizados em **5 pastas temáticas**, mais uma pasta **`00 - Consolidado`** com o traçado completo unificado e a pasta **`Mapas de interferencias`** com mapas derivados.

| Pasta | Arquivos | Tema |
|---|---|---|
| **`00 - Consolidado`** | 4 | **🆕 Traçado completo São Paulo → Campinas** (DWG + PNG + PDF + relatório) |
| `01 - Topografia e base geográfica` | 10 | Levantamentos topográficos e bases de referência |
| `02 - Geometria e articulação do traçado` | 12 | Articulação e plantas por trecho |
| `03 - Mosaicos por trecho (Apenso)` | 6 | Apensos 9 a 14 |
| `04 - Elementos de projeto` | 9 | Estacas, OAE, passarelas, drenagem, desapropriação |
| `05 - Imagens e fotos aéreas` | 6 | Pranchas `SEM FOTOS` |

> 🎯 **Comece por [`00 - Consolidado/README.md`](00%20-%20Consolidado/README.md)** — lá está o desenho único com o eixo, terminais, estacas, obras de arte e drenagem, com **16 camadas filtráveis no AutoCAD**.

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

> 📌 Este é o arquivo mais rico do projeto para **interferências urbanas**. Tem
> 1.903 entidades em 18 camadas temáticas (`DUTOS_SABESP`, `DUTOS_ELETROPAULO`,
> `DUTOS_LINHAS DE ALTA TENSÃO`, `DUTO_CABO ÓPTICO`, `DUTOS_TRAVESSIA_COMGÁS`…),
> com rótulos que identificam nominalmente cada rede. Foi convertido para
> [`interferencias_desenho.csv`](../Dados%20Estruturados/interferencias_desenho.csv),
> que traz concessionária, tipo (aérea/subterrânea), descrição e quilometragem.
> Mapas por concessionária em [`Mapas de interferencias/`](Mapas%20de%20interferencias/).
| `ACAD-Trecho Total_TIC_Elementos.dwg` | **Elementos** do traçado |

### `Mapas de interferencias` — 9 PNGs

Derivados do `TIC_INTERFERENCIAS.dwg`. Coordenadas no **sistema local do desenho** (não georreferenciado — ver `📐 Sobre o datum`).

| Arquivo | Conteúdo |
|---|---|
| `01_Saneamento_SABESP` | Água, esgoto, interceptor, drenagem, galerias |
| `02_Energia_Eletropaulo_CPFL_CTEEP` | Rede de distribuição e travessias de alta tensão |
| `03_Energia_Transmissao_e_Rede_Eletrica` | Linhas de transmissão e postes |
| `04_Telefonia` | Cabos telefônicos e dutos |
| `05_Gas_Comgas_Elekeiroz` | Gás natural |
| `06_Fibra_Optica` | TELEMAR, IQARA, IMPSAT, Global Crossing |
| `07_Todas_as_interferencias` | Todas as redes sobrepostas |
| `10_Distribuicao_por_km_e_concessionaria` | Dispersão ao longo dos 104 km |
| `11_Densidade_interferencias_por_km` | Mapa de calor por quilômetro |

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
| **Interferências com redes existentes** | `../Dados Estruturados/interferencias_desenho.csv` |
| Mapas de interferências por concessionária | `./Mapas de interferencias/` |

---

## 🔎 Como navegar estes arquivos (o erro mais comum)

**Ao abrir qualquer um destes DWGs, a tela parece quase vazia. Isso é esperado — e não é defeito do arquivo.**

### Por quê

Estes desenhos têm **extensão de ~41 km × 68 km** (Barra Funda → Campinas), mas o conteúdo é formado por **elementos minúsculos e dispersos**. Exemplo real em `ACAD-Trecho Total_TIC_INTERFERENCIAS.dwg`:

| Métrica | Valor |
|---|---|
| Entidades | 1.903 |
| Polilinhas | 994 |
| **Comprimento mediano de uma polilinha** | **5,0 m** |
| Comprimento máximo | 1.368 m |

Numa janela de 41 km de largura, um elemento de 5 m ocupa **0,012% da tela** — praticamente invisível.

O motivo é a natureza do levantamento: o arquivo de **interferências** mapeia apenas os **pontos onde as redes de utilities cruzam a ferrovia** (sabesp, ELETROPAULO, telefonia, gás natural, cabos ópticos, linhas de alta tensão). São fragmentos curtos e pontuais, não uma malha contínua.

### Como ver o conteúdo

Use **janelas de zoom pequenas** (500 m a 5 km):

```text
ZOOM
W                       ; janela retangular
308000,7396000           ; canto inferior esquerdo
330000,7434000           ; canto superior direito
```

Janelas sugeridas para o arquivo de interferências:

| Objetivo | Comando |
|---|---|
| Trecho sul concentrado (SABESP, ELETROPAULO, telefonia, gás) | `ZOOM` `W` → `308000,7396000` → `330000,7434000` |
| Uma estação específica (ex.: **Jundiaí**) | `ZOOM` `W` → `307000,7431500` → `309500,7435500` |
| Trecho norte (só linhas de alta tensão e transmissão) | `ZOOM` `W` → `288000,7455000` → `300000,7465500` |

### Comandos úteis

```text
Z          ; zoom interativo
ZE         ; zoom para_extents (mostra TUDO — e por isso parece vazio)
ZW         ; zoom por janela (use este)
LAYISO "DUTOS_SABESP"   ; isola uma camada
LAYFRL *                ; congela todas as outras
QSELECT                 ; filtrar por propriedade
LIST / QSELECT          ; inspecionar entidades e descobrir coordenadas
ID                       ; clicar num ponto e ler X, Y
```

> 💡 **Dica:** use o comando `ID` e clique num elemento para ler suas coordenadas exatas — é a forma mais rápida de localizar um duto, uma interferência ou uma obra de arte.

> 🎯 **Para uma visão geral de todo o traçado**, use antes o desenho consolidado em [`00 - Consolidado/`](00%20-%20Consolidado/README.md), que já vem com o eixo, as estações e as obras de arte georreferenciadas lado a lado.

---

Os DWGs usam **coordenadas projetadas** (faixa E 286.000–331.000 / N 7.390.000–7.470.000), com geometria equivalente a uma transcversa de Mercator de meridiano central **−45°** e fator de escala **0,9996** — ou seja, a mesma configuração do **UTM 23 Sul**.

**Porém, elas não correspondem ao SIRGAS 2000 real.** Testando contra as posições geográficas conhecidas das estações, o erro é de **0,3 km (Campinas) a 17,8 km (Francisco Morato)**, com média de 8,4 km. Uma transformação rígida de 4 parâmetros (escala, rotação e translação) **não corrige** esse desvio.

Conclusão: os arquivos usam um **sistema local de engenharia**, não um datum geodésico oficial.

👉 **O que isso permite e o que não permite:**

- ✅ Usar a relação **quilometragem ↔ coordenada do desenho** (é internamente consistente — 180 pontos de controle estão em `../Dados Estruturados/calibracao_estacas_desenho.csv`);
- ❌ **Não converter** essas coordenadas em latitude/longitude — o erro chegaria a 17 km.

Para obter o projeto **georreferenciado de verdade**, é preciso solicitar os dados oficiais (ver [`../Dados Estruturados/LEIA-ME.md`](../Dados%20Estruturados/LEIA-ME.md)).

---

## ⚖️ Aviso

Os arquivos DWG são **projetos técnicos de terceiros** (elaborados pela concessionária/projetista e juntados ao edital). Estão aqui para consulta pública e apoio à fiscalização. Em caso de dúvida sobre autoria ou uso, consulte o edital e as fontes oficiais.
