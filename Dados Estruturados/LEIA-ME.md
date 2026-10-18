# 📊 Dados Estruturados

Planilhas extraídas automaticamente dos PDFs deste repositório, organizando a **localização dos empreendimentos e obrigações ao longo dos 104 km da concessão**.

---

## ⚠️ Leia isto antes de usar

**Estas planilhas não contêm coordenadas geográficas.** Elas contêm **referência linear** — quilometragem e estacas (*chainage*).

Isso é o que os documentos do edital realmente oferecem. Uma varredura completa dos 78 PDFs (3.884 páginas) confirmou:

| Verificação | Resultado |
|---|---|
| PDFs GeoPDF (chave `/GPTS`) | ❌ 0 |
| Arquivos anexados (`.dwg`, `.shp`, `.kml`) dentro dos PDFs | ❌ 0 |
| Metadados geográficos (GPSCoordinates, BoundingBox) | ❌ 0 |
| Tabelas de latitude/longitude | ❌ 0 |
| Códigos EPSG / SIRGAS 2000 | ❌ 0 |

A única referência a coordenadas está no **Anexo 1 — Projeto Conceitual (TAM 02-2025)**:

> *"AS COORDENADAS E POSICIONAMENTO DAS VIAS FORAM DEFINIDOS EM FUNÇÃO DO ARQUIVO `TIC_Agua_Branca_Conceitual_02` FORNECIDO PELA CONCESSIONÁRIA"*

Ou seja: **as coordenadas existem, mas estão num arquivo de projeto fornecido pela concessionária, que não está neste repositório.**

Além disso, a quilometragem é **relativa**: o km 0 não está vinculado a nenhum marco geodésico, e o datum **nunca é declarado** nos documentos.

### 🔎 E o que descobrimos nos arquivos CAD

Os **43 arquivos DWG** da pasta [`../06 - Plantas do projeto (CAD)/`](../06%20-%20Plantas%20do%20projeto%20(CAD)/) **têm coordenadas**, e elas **não são geográficas**:

| Verificação | Resultado |
|---|---|
| Faixa das coordenadas | E 286.000–331.000 · N 7.390.000–7.470.000 |
| Projeção que melhor explica | Transversa de Mercator, **meridiano central −45°**, **k = 0,9996** (o mesmo do UTM 23S) |
| **Erro contra posições reais** | **médio 8,4 km** · mínimo 0,3 km (Campinas) · **máximo 17,8 km** (Francisco Morato) |
| Correção por transformação rígida (4 parâmetros) | **não corrige** — o erro permanece |

O padrão de erro (pequeno nas pontas, grande no meio do traçado) indica **distorção não rígida**: os DWGs usam um **sistema local de engenharia**, e não o SIRGAS 2000.

⚠️ **Não converta essas coordenadas em latitude/longitude** — o desvio chegaria a 17 km.

O que **é** confiável é a relação **quilometragem ↔ coordenada do desenho**, calibrada por 180 pontos — publicada em [`calibracao_estacas_desenho.csv`](calibracao_estacas_desenho.csv).

👉 **Para obter dados georreferenciados reais**, veja [Solicitando dados georreferenciados](#-solicitando-dados-georreferenciados).

---

## 📁 Arquivos

### 0. `calibracao_estacas_desenho.csv` — 180 linhas

Relaciona **quilometragem ↔ coordenada do desenho** para 180 estacas (km 21+800 a 106+700), extraídas da camada `U-HZ-KM` do arquivo `TIC_02_ESTACAS_GERAL.dwg`.

| coluna | descrição |
|---|---|
| `estaca` | Estaca no formato `21+800` |
| `km` / `km_m` | Quilometragem (texto e metros) |
| `x_desenho_m` / `y_desenho_m` | Coordenada **no sistema local do desenho** |
| `sistema_coordenadas` | Sempre `SISTEMA LOCAL DO PROJETO (nao georreferenciado)` |

> ⚠️ **Estas coordenadas não são geográficas.** Convertê-las para latitude/longitude gera erro de até 17 km (ver a seção acima).

### 1. `trechos_e_estacas.csv` — 6 linhas

A divisão oficial da concessão em trechos, com as estacas de início e fim.

| coluna | descrição |
|---|---|
| `trecho` | Nome do trecho |
| `estaca_inicial` / `estaca_final` | Estacas no formato `21+800` |
| `km_inicial` / `km_final` | Quilometragem em km (formato brasileiro) |
| `km_inicial_m` / `km_final_m` | Mesma informação em **metros**, para uso em planilhas |
| `extensao_m` | Comprimento do trecho em metros |
| `documento_fonte` | Documento de origem |

| Trecho | De | Até | Extensão |
|---|---|---|---|
| Barra Funda – Perus | 2+640 | 21+800 | 19,160 km |
| Perus – Botujuru | 21+800 | 44+120 | 22,320 km |
| Botujuru – Jundiaí | 44+120 | 60+800 | 16,680 km |
| Jundiaí – Louveira | 60+800 | 81+740 | 20,940 km |
| Louveira – Valinhos | 81+740 | 98+659 | 16,919 km |
| Valinhos – Campinas | 98+659 | 106+700 | 8,041 km |

> **Total: 104,060 km.** Os trechos cobrem do km 2+640 ao km 106+700. O trecho entre o km 0 e o km 2+640 é o **Trecho Central Compartilhado**, tratado separadamente no contrato (item 38.4.9.2).

### 2. `ativos_por_km.csv` — 27 linhas

Onde ficam as estações, pátios, subestações, bases e obras de arte.

| coluna | descrição |
|---|---|
| `id` | Identificador sequencial |
| `tipo` | Subestação · Estação · Pátio / Base · Cabine de seccionamento · Obra de arte · Acesso / interligação |
| `item` | Nome do empreendimento |
| `km` | Quilometragem |
| `km_m` | Quilometragem em metros |
| `trecho` | Trecho em que se situa |
| `fonte` | Anexo de onde veio a informação |
| `documento` | Arquivo PDF de origem |
| `pagina` | **Página exata** no PDF — permite conferência direta |

**Destaques:**

| Km | Tipo | Empreendimento |
|---|---|---|
| 3,200 | Base | Base Operacional da Barra Funda |
| 5,600 | Subestação | Subestação Retificadora de Água Branca |
| 10,512 | Subestação | Subestação Tietê |
| 19,186 | Subestação | Subestação Jaraguá |
| 27,589 | Subestação | Subestação Caieiras |
| 38,526 | Base / Subestação | Base de Manutenção **e** Subestação Francisco Morato |
| 49,633 | Subestação | Subestação Campo Limpo |
| 59,650 | Subestação | Subestação Retificadora de Jundiaí |
| 70,920 | Cabine | Cabine de seccionamento de Corrupira |
| 76,500 | Subestação | Subestação de Louveira (8 MW) |
| 83,260 | Cabine | Cabine de seccionamento de Vinhedo |
| 91,450 | Subestação | Subestação Valinhos (8 MW) |
| 100,660 | Cabine | Cabine de seccionamento de Samambaia |
| 106,460 | Subestação | Subestação de Campinas (8 MW) |

### 3. `intervencoes_poder_concedente.csv` — 26 linhas

As **26 intervenções de infraestrutura sob responsabilidade do Poder Concedente** (Linha 7–Rubi da CPTM), cada uma com sua faixa quilométrica — estas são as obras que o Estado executa e cobra da concessionária.

| coluna | descrição |
|---|---|
| `intervencao` | Número da intervenção (1 a 26) |
| `descricao` | Descrição da obra |
| `km_inicial` / `km_final` | Faixa de execução |
| `km_inicial_m` / `km_final_m` | Em metros |
| `extensao_m` | Extensão da intervenção |
| `trecho` | Trecho correspondente |
| `documento_fonte` | Documento de origem |

**Maiores extensões:**

| Interv. | Faixa | Extensão | Descrição |
|---|---|---|---|
| 26 | 55,500 – 59,400 | **3.900 m** | Acesso ao Pátio de carga em Jundiaí |
| 19 | 16,800 – 18,700 | 1.900 m | Estação Jaraguá Atual – Via V3 |
| 3 | 0,850 – 2,330 | 1.480 m | Capacitação das vias para o trem de carga da MRS |
| 6 | 3,820 – 5,171 | 1.351 m | Puxamentos de vias para nova geometria |
| 15 | 10,000 – 11,348 | 1.348 m | Trecho Piqueri – Pirituba, V1 e V2 |
| 21 | 27,000 – 28,100 | 1.100 m | Nova Estação Caieiras – novas V1 e V2 |

---

## 📐 Formato dos arquivos

- **Codificação:** UTF-8 **com BOM** (abre corretamente no Excel em português)
- **Separador de colunas:** `;` (padrão pt-BR)
- **Decimais:** vírgula (`3,200`)
- **Números em metros:** inteiros, para facilitar ordenação e gráficos

### Exemplo em Python

```python
import csv

with open('ativos_por_km.csv', encoding='utf-8-sig') as f:
    for linha in csv.DictReader(f, delimiter=';'):
        print(linha['km_m'], linha['item'])
```

---

## 🔍 Como os dados foram extraídos

A extração é **automática e reprodutível** (sem digitação manual), feita com Python + `PyMuPDF` lendo as camadas de texto dos PDFs:

| Dado | Documento de origem | Páginas |
|---|---|---|
| Trechos e estacas | `02 - Anexos/ANEXO I.2` | 3–4 (sumário) |
| Ativos | `02 - Anexos/ANEXO II.A` | legendas de figura |
| Ativos | `02 - Anexos/ANEXO II.C` | legendas de figura |
| Ativos | `02 - Anexos/ANEXO I.1` | legendas de figura |
| Ativos | `02 - Anexos/ANEXO II.B` | texto corrido |
| Intervenções | `02 - Anexos/ANEXO II.D` | 6–8 (item 6) |

Cada linha registra o **documento e a página exata**, permitindo conferir cada dado no PDF original. As colunas `trecho`, `km_m` e `tipo` foram **derivadas** por regras internas, a partir das faixas de estaca do Anexo I.2.

### Limitações conhecidas

- A coluna `km` usa o **zero declarado nos documentos** (km 0), e não o zero físico da via;
- Nomes foram extraídos de legendas de figura e podem estar **abreviados** frente à nomenclatura oficial completa;
- O Anexo I.1 traz estações da Linha 7 que não aparecem aqui por não terem quilometragem declarada;
- Um PDF do repositório (`Anexo III.C – Apenso 1 – Convênio PAESE 2016`) é **inteiramente escaneado** (sem camada de texto) e não pôde ser analisado automaticamente.

---

## 📮 Solicitando dados georreferenciados

Os próprios anexos do edital **exigem** que a concessionária entregue dados georreferenciados:

| Anexo | Exigência literal |
|---|---|
| **IV.A** (Licenciamento Ambiental) | *"coordenadas geográficas ou UTM e indicação do **DATUM** horizontal"* |
| **IV.D** (Escopo do EIA) | *"localização dos pontos em **UTM**"*, fragmentos *"**georreferenciados**"* |
| **II.B** (Via Permanente) | *"**malha de coordenadas**"*, *"tabelas de coordenadas"*, vértices de apoio, amarração a **marco geodésico** |
| **II.A** (Memoriais) | Elementos localizados por *"**eixos de coordenadas**"*, *"cotas e coordenadas"* |

Como são **obrigações contratuais**, elas podem ser exigidas formalmente:

1. **Lei de Acesso à Informação (Lei nº 12.527/2011)** — requerer à **SPI** (Secretaria de Parcerias em Investimentos) e à **Artesp** as tabelas de coordenadas em SIRGAS 2000 / UTM e os arquivos `TIC_Agua_Branca_Conceitual_*`;
2. **Estudo Ambiental** — exigir que os estudos e licenças dos Anexos IV.A e IV.D sejam entregues com a georreferentação prevista no próprio edital;
3. **Tribuna de Contas do Estado** — cabeamento dos entregáveis ambientais vinculados aos termos aditivos.

---

## 🤝 Contribuindo

Se conseguir localizar dados georreferenciados oficiais:

1. Coloque o arquivo bruto em `dados-brutos/` (não formatado);
2. Documente a fonte e a data em um `README.md` dentro dessa pasta;
3. Atualize estas planilhas indicando a origem.

Se encontrar **erro** nestas planilhas, abra uma *issue* informando o documento, a página e o valor correto — a verificação é rápida com a coluna `pagina`.
