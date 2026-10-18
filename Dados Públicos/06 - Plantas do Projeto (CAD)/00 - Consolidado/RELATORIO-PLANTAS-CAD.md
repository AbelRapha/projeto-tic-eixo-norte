# 📐 Relatório de Análise das Plantas do Projeto (CAD)

Análise automatizada dos **43 arquivos DWG** do projeto conceitual do Trem Intercidades — Eixo Norte, 
extraída com o **CADCraft** (`cadcraft-cli info` / `convert`) e processada com Python.

**Data da análise:** 18/10/2026 · **Total de entidades lidas:** 202,936


---


## 📂 01 - Topografia e base geográfica

### `ACAD-Trecho Total_BASE ESTAÇÕES.dwg`

| | |
|---|---|
| Tamanho | **4.30 MB** |
| Entidades | **3,097** |
| Camadas | **97** |
| Tipos de entidade | Line (1,719), Polyline (443), Arc (422), Spline (103), Block Reference (101), Hatch (99) |
| Extensão (X) | 286,535 .. 329,506 |
| Extensão (Y) | 7,396,774 .. 7,466,135 |

Base das estacoes: eixos, plataformas, patios, subestacoes eoedificio de Jundiai.

**Camadas relevantes:**

| Camada | Entidades |
|---|---|
| `_  ARQ-AUX-001` | LINE=971, ARC=401, LWPOLYLINE=255, SPLINE=100 |
| `U-HZ-CORREDOR` | LINE=342 |
| `U-HZ-PATIO-JUNDIAI-PIANO-ATERRO` | LINE=224, POLYLINE=7, LWPOLYLINE=2 |
| `_AUXILIAR` | LINE=41, LWPOLYLINE=34, INSERT=24, ARC=21 |
| `_AUX-PLATAFORMA COTAS` | DIMENSION=81, ARC_DIMENSION=6, LINE=4, INSERT=2 |
| `LAYERS -AREAS A DEMOLIR` | LWPOLYLINE=25, MTEXT=20, HATCH=15 |
| `U-HZ-PATIO-JUNDIAI-PIANO-CORTE` | LINE=54, POLYLINE=4, LWPOLYLINE=1 |
| `ARQ-AUX-001` | LINE=53 |
| `0` | INSERT=24, LWPOLYLINE=12, HATCH=6, LINE=1 |
| `_AUX-PLATAFORMA EXISTENTE` | LWPOLYLINE=18, HATCH=10, LINE=6, INSERT=1 |
| `TEXTO` | TEXT=24, MULTILEADER=1, MTEXT=1 |
| `_EDIFICACOES_PATIO_JUNDIAI` | LWPOLYLINE=13, HATCH=7, LINE=4 |
| `U-HZ-EIXO PATIO` | LWPOLYLINE=21, LINE=1 |
| `_AUX-PLATAFORMA NOVA` | LWPOLYLINE=11, HATCH=10 |

_… e mais 25 camadas_

### `ACAD-Trecho Total_BASE LIMITE MUNICIPIOS.dwg`

| | |
|---|---|
| Tamanho | **0.08 MB** |
| Entidades | **50** |
| Camadas | **3** |
| Tipos de entidade | Text (40), Polyline (10) |
| Extensão (X) | 294,983 .. 323,089 |
| Extensão (Y) | 7,412,041 .. 7,462,575 |

Divisas e nomes dos 11 municipios atravessados.

**Camadas relevantes:**

| Camada | Entidades |
|---|---|
| `DIVISA MUNICÍPIOS` | TEXT=40, LWPOLYLINE=10 |

### `ACAD-Trecho Total_Faixa de dominio.dwg`

| | |
|---|---|
| Tamanho | **0.61 MB** |
| Entidades | **40** |
| Camadas | **3** |
| Tipos de entidade | Polyline (40) |
| Extensão (X) | 286,435 .. 328,059 |
| Extensão (Y) | 7,397,065 .. 7,466,167 |

Polilinhas da faixa de dominio da concessao.

**Camadas relevantes:**

| Camada | Entidades |
|---|---|
| `U-HZ-FAIXA_DOMÍNIO` | LWPOLYLINE=40 |

### `IMAGENS TRECHO TOTAL.dwg`

| | |
|---|---|
| Tamanho | **0.37 MB** |
| Entidades | **405** |
| Camadas | **3** |
| Tipos de entidade | Raster Image (404), Line (1) |
| Extensão (X) | 286,382 .. 333,000 |
| Extensão (Y) | 7,395,500 .. 7,466,453 |

Pranchas de imagem georreferenciada do trecho total (404 imagens raster).


### `TOPOGRAFIA - TR1.A (BARRA FUNDA_PERUS)+AGUA-BRANCA.dwg`

| | |
|---|---|
| Tamanho | **24.43 MB** |
| Entidades | **17,863** |
| Camadas | **305** |
| Tipos de entidade | Polyline (7,458), Block Reference (4,191), Text (3,146), 3D Polyline (2,692), Line (256), Circle (83) |
| Extensão (X) | -322,995,362,543 .. 340,696,172,478 |
| Extensão (Y) | -121,556,073,579 .. 663,580,902,810 |

Levantamento topografico do trecho Barra Funda - Perus, com curvas de nivel, cotas, hidrografia e edificacoes.


### `TOPOGRAFIA - TR1.B (PERUS_BOTUJURU).dwg`

| | |
|---|---|
| Tamanho | **38.40 MB** |
| Entidades | **27,687** |
| Camadas | **100** |
| Tipos de entidade | Polyline (14,224), Text (5,091), Block Reference (4,385), 3D Polyline (2,564), Line (1,022), Circle (377) |
| Extensão (X) | -283,662,461,099 .. 2,391,353,310,047 |
| Extensão (Y) | -1,017,612,627,006 .. 1,388,087,990,483 |

Levantamento topografico do trecho Perus - Botujuru. O maior arquivo do conjunto.


### `TOPOGRAFIA - TR1.C (BOTUJURU_JUNDIAÍ).dwg`

| | |
|---|---|
| Tamanho | **20.41 MB** |
| Entidades | **15,454** |
| Camadas | **88** |
| Tipos de entidade | Polyline (8,787), Block Reference (2,570), Text (2,495), 3D Polyline (785), Circle (427), Line (374) |
| Extensão (X) | -6,179,756,597 .. 23,943,986,537 |
| Extensão (Y) | -27,218,878,323 .. 2,904,864,811 |

Levantamento topografico do trecho Botujuru - Jundiai.


### `TOPOGRAFIA - TR2.A1 (JUNDIAÍ_LOUVEIRA).dwg`

| | |
|---|---|
| Tamanho | **21.37 MB** |
| Entidades | **21,111** |
| Camadas | **242** |
| Tipos de entidade | Polyline (9,897), Block Reference (5,761), Text (2,960), 3D Polyline (2,152), Circle (185), Hatch (86) |
| Extensão (X) | -1,035,001,509,434 .. 1,401,389,191,392 |
| Extensão (Y) | -2,422,530,066,579 .. 1,186,953,636,699 |

Levantamento topografico do trecho Jundiai - Louveira.


### `TOPOGRAFIA - TR2.A2 (LOUVEIRA_VALINHOS)_CINZA.dwg`

| | |
|---|---|
| Tamanho | **16.63 MB** |
| Entidades | **21,274** |
| Camadas | **247** |
| Tipos de entidade | Polyline (7,397), Block Reference (6,984), 3D Polyline (3,969), Text (2,368), Line (252), Circle (127) |
| Extensão (X) | -55,741,065,643 .. 163,392,469,823 |
| Extensão (Y) | -14,125,031,995 .. 205,008,503,471 |

Levantamento topografico do trecho Louveira - Valinhos (base em cinza).


### `TOPOGRAFIA - TR2.B (VALINHOS_CAMPINAS).dwg`

| | |
|---|---|
| Tamanho | **7.72 MB** |
| Entidades | **7,833** |
| Camadas | **71** |
| Tipos de entidade | Polyline (2,966), Block Reference (2,399), 3D Polyline (1,092), Text (923), Circle (358), Hatch (48) |
| Extensão (X) | -10,339,427,101 .. 10,498,389,012 |
| Extensão (Y) | -20,830,050,462 .. 7,765,651 |

Levantamento topografico do trecho Valinhos - Campinas.



## 📂 02 - Geometria e articulação do traçado

### `III-TRECHO BARRA FUNDA-PERUS(Estaca 2+235 à Estaca 21+800)Rev06 08.02.2021.dwg`

| | |
|---|---|
| Tamanho | **4.98 MB** |
| Entidades | **352** |
| Camadas | **152** |
| Tipos de entidade | Raster Image (104), Polyline (47), Hatch (41), Leader (38), MText (37), Block Reference (7) |
| Extensão (X) | -273,005 .. 333,000 |
| Extensão (Y) | -0 .. 7,410,000 |

### `IV-TRECHO PERUS-BOTUJURU(Estaca 21+800-Estaca 44+120)Rev06 08.02.2021.dwg`

| | |
|---|---|
| Tamanho | **4.05 MB** |
| Entidades | **277** |
| Camadas | **100** |
| Tipos de entidade | Raster Image (89), Polyline (45), Hatch (37), Leader (31), MText (30), Block Reference (7) |
| Extensão (X) | 310,973 .. 324,000 |
| Extensão (Y) | 7,400,965 .. 7,428,250 |

### `Trecho_1.A _ARTICULACAO_TIC_Barra Funda_Perus_R05.dwg`

| | |
|---|---|
| Tamanho | **7.80 MB** |
| Entidades | **1,507** |
| Camadas | **947** |
| Tipos de entidade | Proxy (388), Text (372), Line (200), 3D Polyline (161), Raster Image (98), Block Reference (34) |
| Extensão (X) | -538,317 .. 333,998 |
| Extensão (Y) | -2,037,395 .. 7,411,856 |

### `Trecho_1.B_ARTICULACAO_TIC_Perus-Botujuru_R05.dwg`

| | |
|---|---|
| Tamanho | **6.02 MB** |
| Entidades | **10,035** |
| Camadas | **737** |
| Tipos de entidade | Line (5,045), MText (3,248), Text (460), Block Reference (219), Polyline (186), Point (148) |
| Extensão (X) | 303,118 .. 359,331 |
| Extensão (Y) | 7,408,194 .. 7,460,879 |

### `Trecho_1.C _ARTICULACAO_TIC_Botujuru_Jundiai_R05.dwg`

| | |
|---|---|
| Tamanho | **5.23 MB** |
| Entidades | **945** |
| Camadas | **690** |
| Tipos de entidade | Text (323), Line (171), Leader (90), Raster Image (62), Block Reference (44), Polyline (34) |
| Extensão (X) | 307,545 .. 341,809 |
| Extensão (Y) | 7,387,092 .. 7,434,457 |

### `Trecho_2.A.1_ARTICULAÇÃO_TIC_jundiai_Louveira_R05.dwg`

| | |
|---|---|
| Tamanho | **5.81 MB** |
| Entidades | **1,113** |
| Camadas | **702** |
| Tipos de entidade | Text (423), Line (234), Raster Image (88), Block Reference (35), Polyline (26), MText (21) |
| Extensão (X) | 296,299 .. 341,239 |
| Extensão (Y) | 7,366,855 .. 7,451,724 |

### `Trecho_2.A.2_ARTICULAÇÃO_Louveira_Valinhos_R05.dwg`

| | |
|---|---|
| Tamanho | **6.01 MB** |
| Entidades | **1,238** |
| Camadas | **707** |
| Tipos de entidade | Proxy (365), Text (323), Line (189), Raster Image (62), Block Reference (34), Polyline (33) |
| Extensão (X) | 292,417 .. 341,299 |
| Extensão (Y) | 7,367,076 .. 7,467,977 |

### `Trecho_2.B_ARTICULAÇÃO_Valinhos-Campinas_R05.dwg`

| | |
|---|---|
| Tamanho | **4.87 MB** |
| Entidades | **423** |
| Camadas | **525** |
| Tipos de entidade | Text (152), Line (77), Block Reference (36), Raster Image (29), Polyline (14), MText (13) |
| Extensão (X) | 286,076 .. 340,267 |
| Extensão (Y) | 7,379,330 .. 7,467,005 |

### `V-TRECHO BOTUJURU-JUNDIAÍ(Estaca 44+120 à Estaca 60+800)Rev06 08.02.2021.dwg`

| | |
|---|---|
| Tamanho | **3.59 MB** |
| Entidades | **178** |
| Camadas | **118** |
| Tipos de entidade | Raster Image (69), Polyline (20), Hatch (18), Leader (18), MText (15), Block Reference (7) |
| Extensão (X) | -7,360,730 .. 323,604 |
| Extensão (Y) | 5 .. 7,434,250 |

### `VI-TRECHO JUNDIAI-LOUVEIRA(Estaca 60+800 à Estaca 81+740)Rev06 08.02.2021.dwg`

| | |
|---|---|
| Tamanho | **3.68 MB** |
| Entidades | **3,155** |
| Camadas | **58** |
| Tipos de entidade | Line (2,596), Text (155), Polyline (146), 2D Solid (72), Raster Image (72), Hatch (66) |
| Extensão (X) | 298,545 .. 323,604 |
| Extensão (Y) | 7,400,965 .. 7,450,750 |

### `VII-TRECHO LOUVEIRA-VALINHOS(Estaca 81+740 à Estaca 98+660)Rev06 08.02.2021.dwg`

| | |
|---|---|
| Tamanho | **3.47 MB** |
| Entidades | **581** |
| Camadas | **66** |
| Tipos de entidade | Line (254), Polyline (83), Text (82), Raster Image (59), Hatch (43), 2D Solid (36) |
| Extensão (X) | 292,382 .. 323,604 |
| Extensão (Y) | 7,400,965 .. 7,463,250 |

### `VIII-TRECHO VALINHOS-CAMPINAS(Estaca 98+660 à Estaca 106+700)Rev06 08.02.2021.dwg`

| | |
|---|---|
| Tamanho | **2.91 MB** |
| Entidades | **202** |
| Camadas | **57** |
| Tipos de entidade | Polyline (53), Raster Image (32), Text (30), Hatch (28), 2D Solid (15), Leader (9) |
| Extensão (X) | 286,382 .. 323,604 |
| Extensão (Y) | 7,400,965 .. 7,466,453 |


## 📂 03 - Mosaicos por trecho (Apenso)

### `Apenso 10 - MOSAICO TRECHO PRU-BTJ Rev02 30.04.2021.dwg`

| | |
|---|---|
| Tamanho | **1.52 MB** |
| Entidades | **216** |
| Camadas | **79** |
| Tipos de entidade | Hatch (90), Polyline (61), Block Reference (25), MText (2), Multileader (1) |
| Extensão (X) | 319,070 .. 324,072 |
| Extensão (Y) | 7,409,258 .. 7,428,295 |

### `Apenso 11 - MOSAICO TRECHO BTJ-JUN Rev02 30.04.2021.dwg`

| | |
|---|---|
| Tamanho | **1.39 MB** |
| Entidades | **170** |
| Camadas | **106** |
| Tipos de entidade | Hatch (51), Polyline (44), Point (19), Block Reference (17), Text (13), MText (2) |
| Extensão (X) | 307,315 .. 319,737 |
| Extensão (Y) | 7,427,745 .. 7,434,830 |

### `Apenso 12 - MOSAICO TRECHO JUN-LOU Rev02 30.04.2021.dwg`

| | |
|---|---|
| Tamanho | **1.02 MB** |
| Entidades | **294** |
| Camadas | **56** |
| Tipos de entidade | Polyline (123), Hatch (76), Arc (29), Block Reference (20), Line (7), MText (1) |
| Extensão (X) | 284,258 .. 323,604 |
| Extensão (Y) | 7,393,143 .. 7,451,144 |

### `Apenso 13 - MOSAICO TRECHO LOU-VAL Rev02 30.04.2021.dwg`

| | |
|---|---|
| Tamanho | **1.31 MB** |
| Entidades | **166** |
| Camadas | **54** |
| Tipos de entidade | Polyline (62), Hatch (61), Block Reference (18) |
| Extensão (X) | 282,649 .. 323,604 |
| Extensão (Y) | 7,394,518 .. 7,463,125 |

### `Apenso 14 - MOSAICO TRECHO VAL-CAM Rev02 30.04.2021.dwg`

| | |
|---|---|
| Tamanho | **0.75 MB** |
| Entidades | **110** |
| Camadas | **58** |
| Tipos de entidade | Polyline (45), Hatch (30), Block Reference (10) |
| Extensão (X) | 286,072 .. 323,604 |
| Extensão (Y) | 7,400,965 .. 7,466,400 |

### `Apenso 9 - MOSAICO TRECHO BFU-PRU Rev02 30.04.2021.dwg`

| | |
|---|---|
| Tamanho | **2.85 MB** |
| Entidades | **250** |
| Camadas | **145** |
| Tipos de entidade | Hatch (109), Polyline (75), Block Reference (18), Text (16), MText (5), Leader (2) |
| Extensão (X) | -273,005 .. 330,859 |
| Extensão (Y) | -0 .. 7,410,037 |


## 📂 04 - Elementos de projeto

### `ACAD-Trecho Total_TIC_DESAP.dwg`

| | |
|---|---|
| Tamanho | **2.94 MB** |
| Entidades | **4,064** |
| Camadas | **8** |
| Tipos de entidade | Line (2,857), Polyline (350), Text (277), Hatch (206), 2D Solid (117), Leader (115) |
| Extensão (X) | 287,051 .. 328,239 |
| Extensão (Y) | 7,397,011 .. 7,465,784 |

Desapropriacao e desocupacao: 368 areas com codigo (CP-DP, RM, SP-DP) e metragem.

**Camadas relevantes:**

| Camada | Entidades |
|---|---|
| `_ÁREA REMANESCENTE` | LINE=1,820, LWPOLYLINE=38, HATCH=35 |
| `U-HZ-TEXTO-DESAP` | TEXT=277, LWPOLYLINE=120, SOLID=117, LEADER=110 |
| `DESOCUPAÇÃO` | LINE=662, LWPOLYLINE=16, HATCH=15, ARC=14 |
| `DESAPROPRIAÇÃO` | LINE=368, LWPOLYLINE=167, HATCH=149 |
| `_marcações` | CIRCLE=25, MTEXT=6, HATCH=5, LWPOLYLINE=5 |
| `0` | LWPOLYLINE=2, MULTILEADER=2 |
| `F-HATCH-PUBLICA` | LWPOLYLINE=2, HATCH=2 |

### `ACAD-Trecho Total_TIC_DRENAGEM_DISPOSITIVOS.dwg`

| | |
|---|---|
| Tamanho | **2.27 MB** |
| Entidades | **1,363** |
| Camadas | **29** |
| Tipos de entidade | Polyline (624), Text (408), Multileader (189), Leader (134), Dimension (2), Hatch (2) |
| Extensão (X) | 290,209 .. 2,929,292 |
| Extensão (Y) | 6,824,065 .. 7,463,838 |

Drenagem e dispositivos: bocas de lobo e bueiros de 0,6 a 3,0 m, reforco, ampliacao e prolongamento.

**Camadas relevantes:**

| Camada | Entidades |
|---|---|
| `BUEIRO_TEXTO` | TEXT=408, LEADER=132, LWPOLYLINE=1, MTEXT=1 |
| `_DRENAGEM_AMPLIAÇÃO DE BUEIRO-TIC` | LWPOLYLINE=279 |
| `_DRENAGEM _TEXTOS_TIC` | MULTILEADER=189, DIMENSION=2 |
| `BUEIRO_1.5` | LWPOLYLINE=92, LEADER=1 |
| `BUEIRO_2.0` | LWPOLYLINE=75 |
| `_DRENAGEM_PROLONGAMENTO DE BUEIRO-TIC` | LWPOLYLINE=50 |
| `BUEIRO_1.0` | LWPOLYLINE=26 |
| `BUEIRO_2.5` | LWPOLYLINE=24 |
| `BUEIRO_3.0` | LWPOLYLINE=12 |
| `BUEIRO_1.6` | LWPOLYLINE=11 |
| `BUEIRO_1.2` | LWPOLYLINE=11 |
| `BUEIRO_2.2` | LWPOLYLINE=10 |
| `BUEIRO_1.7` | LWPOLYLINE=6 |
| `BUEIRO_2.6` | LWPOLYLINE=5 |

_… e mais 11 camadas_

### `ACAD-Trecho Total_TIC_Elementos.dwg`

| | |
|---|---|
| Tamanho | **0.26 MB** |
| Entidades | **572** |
| Camadas | **9** |
| Tipos de entidade | MText (303), Block Reference (269) |
| Extensão (X) | 286,429 .. 330,474 |
| Extensão (Y) | 7,396,752 .. 7,466,151 |

Elementos do traçado: pontos notaveis, estacas, curvas, azimutes e rotulos de eixo.

**Camadas relevantes:**

| Camada | Entidades |
|---|---|
| `U-HZ-EIXO-TXT` | MTEXT=165, INSERT=46 |
| `F-HZ-ESTACA` | INSERT=120 |
| `C-ROAD-TEXT` | INSERT=103 |
| `F-HZ-CURVAS` | MTEXT=69 |
| `U-HZ-CURVAS` | MTEXT=69 |

### `ACAD-Trecho Total_TIC_INTERFERENCIAS.dwg`

| | |
|---|---|
| Tamanho | **0.34 MB** |
| Entidades | **1,903** |
| Camadas | **27** |
| Tipos de entidade | Polyline (994), Line (241), Circle (164), Text (149), Leader (114), MText (50) |
| Extensão (X) | 288,740 .. 329,916 |
| Extensão (Y) | 7,396,742 .. 7,465,143 |

### `ACAD-Trecho Total_TIC_NOMES VIADUTOS.dwg`

| | |
|---|---|
| Tamanho | **0.18 MB** |
| Entidades | **30** |
| Camadas | **5** |
| Tipos de entidade | MText (29) |
| Extensão (X) | 289,091 .. 329,895 |
| Extensão (Y) | 7,396,817 .. 7,464,841 |

Identificacao nominal dos 29 viadutos e pontes do projeto.

**Camadas relevantes:**

| Camada | Entidades |
|---|---|
| `Nome Pontes e Viadutos` | MTEXT=29 |

### `ACAD-Trecho Total_TIC_OAE.dwg`

| | |
|---|---|
| Tamanho | **0.94 MB** |
| Entidades | **1,235** |
| Camadas | **46** |
| Tipos de entidade | Polyline (340), Block Reference (277), MText (133), Line (129), Leader (123), Hatch (94) |
| Extensão (X) | 288,913 .. 323,983 |
| Extensão (Y) | 7,382,661 .. 7,464,898 |

Obras de arte especiais: viadutos, pontes, tuneis, passagem inferior, com 115 rotulos descritivos.

**Camadas relevantes:**

| Camada | Entidades |
|---|---|
| `U-HZ-TEXTO-OAE` | LEADER=123, MTEXT=115, TEXT=29, LINE=1 |
| `A-IMAGENS` | INSERT=219, MTEXT=18, LWPOLYLINE=2, LINE=2 |
| `U-HZ-VIARIO_LOCAL` | LWPOLYLINE=83, LINE=52, HATCH=23, INSERT=8 |
| `0` | LWPOLYLINE=95, LINE=11, HATCH=6, INSERT=3 |
| `_VIÁRIO` | ARC=20, LINE=17, LWPOLYLINE=13, INSERT=13 |
| `_PASS. INFERIOR A DEMOLIR` | LWPOLYLINE=27, HATCH=27 |
| `_SINALIZAÇÃO` | LWPOLYLINE=25, LINE=15, ARC=13 |
| `F-HZ-PI` | CIRCLE=18, POINT=18 |
| `2 - TIC` | INSERT=25, LINE=11 |
| `U-HZ-ESTRUTURAS` | LWPOLYLINE=27, HATCH=2 |
| `_PONTE A DEMOLIR` | HATCH=14, LWPOLYLINE=13, LINE=1 |
| `_VIA EXISTENTE` | LINE=11, ARC=8, LWPOLYLINE=4 |
| `_DRENAGEM _TEXTOS_TIC` | MULTILEADER=22 |
| `_VIADUTO A CONSTRUIR` | LWPOLYLINE=13, LINE=2, ARC=1, HATCH=1 |

_… e mais 20 camadas_

### `ACAD-Trecho Total_TIC_PASSARELAS.dwg`

| | |
|---|---|
| Tamanho | **0.27 MB** |
| Entidades | **289** |
| Camadas | **15** |
| Tipos de entidade | Polyline (134), Block Reference (70), Hatch (50), Multileader (28), Line (4), MText (3) |
| Extensão (X) | 292,198 .. 326,385 |
| Extensão (Y) | 7,397,336 .. 7,462,838 |

Passarelas de pedestres a construir e existentes, com areas de aquisicao.

**Camadas relevantes:**

| Camada | Entidades |
|---|---|
| `_PASSARELA A CONSTRUIR` | LWPOLYLINE=61, HATCH=20, LINE=2 |
| `0` | INSERT=70, MTEXT=3, LWPOLYLINE=1 |
| `_CALÇADA A CONSTRUIR` | LWPOLYLINE=23, HATCH=18, LINE=1 |
| `_ÁREAA DE AQUISIÇÃO` | LWPOLYLINE=33 |
| `_TEXTOS PASSARELAS` | MULTILEADER=28, LINE=1, LWPOLYLINE=1 |
| `_PASSARELA EXISTENTE` | HATCH=12, LWPOLYLINE=12 |
| `MUDANÇA_SERGIO_2020.03.23` | LWPOLYLINE=2 |
| `ARQ-ALV-BXA` | LWPOLYLINE=1 |

### `ACAD-Trecho Total_TIC_TALUDES E MUROS.dwg`

| | |
|---|---|
| Tamanho | **3.00 MB** |
| Entidades | **45,936** |
| Camadas | **27** |
| Tipos de entidade | Line (42,323), Polyline (2,887), Arc (220), 3D Polyline (172), MText (160), Leader (159) |
| Extensão (X) | -7,360,730 .. 324,331 |
| Extensão (Y) | 5 .. 7,465,117 |

### `ACAD-Trecho total_TIC_02_ESTACAS_GERAL.dwg`

| | |
|---|---|
| Tamanho | **0.49 MB** |
| Entidades | **9,066** |
| Camadas | **7** |
| Tipos de entidade | Block Reference (5,238), Line (1,829), Text (1,476), MText (521), Point (2) |
| Extensão (X) | 286,368 .. 330,624 |
| Extensão (Y) | 7,396,687 .. 7,466,168 |

Malha geral de estacas do traçado. FONTE GEORREFERENCIADA: 180 estacas com rotulo de km e coordenadas.

**Camadas relevantes:**

| Camada | Entidades |
|---|---|
| `U-HZ-TRAÇO` | INSERT=5,238 |
| `U-HZ-NOTAVEIS` | LINE=725, TEXT=452, MTEXT=272 |
| `U-HZ-KM` | LINE=1,104, TEXT=180, MTEXT=41 |
| `U-HZ-ESTACAS` | TEXT=844, MTEXT=208 |
| `C-ROAD-STAN` | POINT=2 |


## 📂 05 - Imagens e fotos aéreas

### `ACAD-1A-SEM FOTOS.dwg`

| | |
|---|---|
| Tamanho | **0.42 MB** |
| Entidades | **1,505** |
| Camadas | **50** |
| Tipos de entidade | Point (347), Line (308), Circle (272), Polyline (193), Arc (146), Block Reference (131) |
| Extensão (X) | -273,005 .. 330,586 |
| Extensão (Y) | -0 .. 7,409,550 |

### `ACAD-1B-SEM FOTOS.dwg`

| | |
|---|---|
| Tamanho | **0.34 MB** |
| Entidades | **384** |
| Camadas | **29** |
| Tipos de entidade | Line (135), Polyline (113), Block Reference (63), Hatch (29), Circle (16), Attribute Definition (15) |
| Extensão (X) | 319,374 .. 323,895 |
| Extensão (Y) | 7,409,538 .. 7,427,889 |

### `ACAD-1C-SEM FOTOS.dwg`

| | |
|---|---|
| Tamanho | **0.35 MB** |
| Entidades | **200** |
| Camadas | **36** |
| Tipos de entidade | Leader (64), Block Reference (46), Polyline (45), Line (24), Hatch (10), Circle (6) |
| Extensão (X) | 307,927 .. 319,455 |
| Extensão (Y) | 7,427,883 .. 7,434,056 |

### `ACAD-2A1-SEM FOTOS.dwg`

| | |
|---|---|
| Tamanho | **0.78 MB** |
| Entidades | **106** |
| Camadas | **21** |
| Tipos de entidade | Polyline (54), Line (36), Block Reference (14), Attribute Definition (1) |
| Extensão (X) | 298,869 .. 308,024 |
| Extensão (Y) | 7,433,956 .. 7,450,254 |

### `ACAD-2A2-SEM FOTOS.dwg`

| | |
|---|---|
| Tamanho | **0.57 MB** |
| Entidades | **193** |
| Camadas | **14** |
| Tipos de entidade | Polyline (57), Line (42), Block Reference (29), Point (24), Hatch (17), Circle (9) |
| Extensão (X) | 292,872 .. 298,878 |
| Extensão (Y) | 7,450,252 .. 7,462,819 |

### `ACAD-2B-SEM FOTOS.dwg`

| | |
|---|---|
| Tamanho | **0.89 MB** |
| Entidades | **64** |
| Camadas | **13** |
| Tipos de entidade | Polyline (31), Block Reference (15), Line (7), Hatch (4), Arc (2), Attribute Definition (2) |
| Extensão (X) | 286,440 .. 292,902 |
| Extensão (Y) | 7,462,783 .. 7,466,165 |
