# 🗺️ Drawing Consolidado do TIC Eixo Norte

Planta do traçado completo **São Paulo (Barra Funda) → Campinas**, consolidada a partir dos 43 DWGs deste repositório.

| Arquivo | Descrição |
|---|---|
| `CONSOLIDADO-TIC-EIXO-NORTE.dwg` | **Desenho CAD** com 16 camadas filtráveis (abrir no AutoCAD) |
| `CONSOLIDADO-TIC-EIXO-NORTE.png` | Pré-visualização rápida (2400×1600) |
| `CONSOLIDADO-TIC-EIXO-NORTE.pdf` | Versão para impressão/visualização |
| `RELATORIO-PLANTAS-CAD.md` | Análise arquivo a arquivo dos 43 DWGs originais |

---

## ⚠️ Leia isto antes de usar as coordenadas

**Os DWGs deste projeto usam um sistema de coordenadas local de engenharia — não são SIRGAS 2000 / UTM 23S.**

Descobrimos isso empiricamente e é um ponto importante para qualquer uso geoespacial:

| Verificação | Resultado |
|---|---|
| Faixa de coordenadas dos desenhos | E **286.000–331.000**, N **7.390.000–7.470.000** (ordem de grandeza UTM 23S) |
| Meridiano central que melhor explica os desenhos | **−45°** (o padrão do UTM 23S) |
| Fator de escala | 0,9996 (padrão UTM) |
| **Erro residual contra posições reais** | **médio 8,4 km** · máximo **17,8 km** (Francisco Morato) |
| Correção por transformação rígida (escala + rotação + translação, 4 parâmetros) | **não corrige** — o erro permanece em 8,4 km |

O padrão de erro — **pequeno nas extremidades (Campinas 0,3 km; Barra Funda 2,3 km) e grande no trecho central (até 17,8 km)** — mostra que se trata de uma distorção não rígida, incompatível com um datum geodésico oficial.

### Consequência prática

- ✅ **A relação quilometragem ↔ coordenada do desenho é confiável e internamente consistente** — 180 estacas de calibração foram extraídas (ver `../../10 - Dados Públicos/10 - Dados Públicos/10 - Dados Públicos/10 - Dados Públicos/10 - Dados Públicos/10 - Dados Públicos/10 - Dados Públicos/10 - Dados Estruturados/calibracao_estacas_desenho.csv`)
- ❌ **Não converta essas coordenadas em latitude/longitude** — o erro chegaria a 17 km
- Para posição geográfica real, é necessário obter o projeto georreferenciado oficial (solicitação via **Lei de Acesso à Informação** à SPI e à Artesp)

---

## 🎛️ Como filtrar os tópicos no AutoCAD

O desenho tem **16 camadas com prefixo numérico**, para que fiquem ordenadas na lista. Para ver apenas o que interessa, use o **Gerenciador de Camadas** (`LA` no AutoCAD) e ligue/desligue a camada, ou selecione objetos por camada.

| Camada | Cor | Conteúdo |
|---|---|---|
| `00-EIXO-TIC-RODAPE` | vermelho | **Eixo do traçado** São Paulo → Campinas (km 2+676 a 106+700) |
| `01-ESTACAS-MARCACAO` | verde | **Marcas de estaca** com rótulo em km |
| `02-TRECHOS-DIVISAO` | verde | **Divisão oficial nos 6 trechos** |
| `03-TERMINAIS-TIC` | amarelo | **Terminais**: Barra Funda, Jundiaí, Campinas |
| `04-ESTACOES-TIM` | magenta | **Estações do Trem Intermetropolitano** (serviço parador) |
| `05-ESTACOES-LINHA7` | ciano | **Estações da Linha 7–Rubi** (serviço metropolitano) |
| `06-SUBESTACOES` | magenta | **Subestações** e subestações retificadoras |
| `07-OBRAS-DE-ARTE` | laranja | **Obras de arte especiais** + quilômetro de cada uma |
| `08-VIADUTOS-NOMES` | laranja | **Nomes dos 29 viadutos** + km |
| `09-PASSARELAS` | ciano | **Passarelas** a construir e existentes |
| `10-DRENAGEM-BUEIROS` | azul | **Bocas de lobo e bueiros** (Ø 0,6 a 3,0 m) |
| `11-LIMITE-MUNICIPIOS` | cinza | **Divisas dos 11 municípios** + nomes |
| `12-FAIXA-DOMINIO` | cinza | **Faixa de domínio** da concessão |
| `13-DESAPROPRIACAO` | amarelo | **Áreas a desapropriar / desocupar** |
| `14-TIC-EIXO-REFERENCIA` | vermelho | **180 pontos de controle** de calibração |
| `15-LEGENDA` | branco | Legenda e informações do desenho |

### Consultas rápidas no AutoCAD

```text
LA                    ; abre o Gerenciador de Camadas (filtro visual)
LAYISO "07-OBRAS-DE-ARTE"        ; isola só as obras de arte
LAYISO "08-VIADUTOS-NOMES"       ; isola os viadutos nomeados
LAYON "04-ESTACOES-TIM"          ; liga só as estações do TIM
LAYFRL *                           ; CONGELA tudo (visão limpa)
LAYTHAWALL                         ; descongela tudo
QSELECT            ; filtrar por propriedade: camada = "05-ESTACOES-LINHA7"
```

---

## 📐 O que o desenho mostra

### Eixo e trechos

O eixo foi rastreado de **km 2+676 (Barra Funda) a km 106+700 (Campinas)** e é dividido nos 6 trechos oficiais:

| Trecho | Estacas |
|---|---|
| Barra Funda – Perus | 2+640 a 21+800 |
| Perus – Botujuru | 21+800 a 44+120 |
| Botujuru – Jundiaí | 44+120 a 60+800 |
| Jundiaí – Louveira | 60+800 a 81+740 |
| Louveira – Valinhos | 81+740 a 98+659 |
| Valinhos – Campinas | 98+659 a 106+700 |

### Terminais e estações

- **Terminais do TIC:** Barra Funda (km 2+676), Jundiaí, Campinas (km 106+700)
- **Estações do TIM** (parador): Francisco Morato, Várzea Paulista, Campo Limpo Paulista, Louveira, Vinhedo, Valinhos
- **Estações da Linha 7–Rubi:** Água Branca, Lapa Unificada, Piqueri, Pirituba, Vila Clarice, Vila Aurora, Jaraguá, Caieiras, Franco da Rocha, Baltazar Fidélis, Perus, Botujuru
- **11 subestações** identificadas

### Obras de arte e drenagem

- **91 rótulos de obras de arte especiais** em **62 quilômetros distintos**
- **29 viadutos nomeados** (Viaduto Antártica, Av. Pacaembu, Pompéia, Dep. Ulisses Guimarães…)
- **131 bocas de lobo / bueiros** marcados, com diâmetros de 0,6 a 3,0 m
- **74 polilinhas de passarelas**

---

## 🔧 Como o desenho foi construído

1. Os 43 DWGs foram lidos com o **CADCraft** (`cadcraft-cli info`) — extração de camadas, entidades e extensões;
2. 10 arquivos-base foram convertidos para DXF (`cadcraft-cli convert`) para leitura programática;
3. As **180 estacas com rótulo de km e coordenadas** foram extraídas da camada `U-HZ-KM` de `TIC_02_ESTACAS_GERAL`;
4. O trecho sul (km 2+676 a 21+800) foi reconstruído rastreando os **5.238 símbolos de estaca** da camada `U-HZ-TRAÇO`, com o km atribuído por comprimento acumulado;
5. Cada elemento nomeado (estações, subestações, viadutos, OAE, bueiros, municípios) foi posicionado pelas coordenadas do próprio arquivo de origem;
6. Tudo foi montado em um DXF com 16 camadas nomeadas e convertido para DWG pelo CADCraft.

**Total: 1.211 entidades.**

### Nota sobre o eixo do TIM

Os arquivos ARTICULAÇÃO (`Trecho_*_ARTICULAÇÃO_*.dwg`) referenciam os eixos TIM por **XREF**, e essas camadas **não possuem geometria vetorial própria** — apenas links. Por isso o desenho consolidado **não traz um eixo TIM separado**; em vez disso, marca **quais estações são servidas pelo TIM** e por quais pela Linha 7.

---

## ⚖️ Aviso

Desenho elaborado a partir de projetos técnicos de terceiros juntados ao edital, para fins de consulta pública e apoio à fiscalização. **Não é produto oficial** e substitui as versões originais em caso de divergência.
