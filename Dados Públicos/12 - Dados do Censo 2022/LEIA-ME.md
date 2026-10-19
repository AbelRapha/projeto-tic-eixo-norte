# Dados do Censo Demografico 2022 dos municipios do TIC Eixo Norte

Cruzamento entre os limites dos **11 municipios** do Eixo Norte (pasta
`11 - Dados Geoespaciais`) e os dados do **Censo Demografico 2022** do IBGE.

Coletado em 19/10/2026. Fontes primarias: API SIDRA e FTP do IBGE.

## Estrutura

```
municipal/
  censo2022_por_municipio.gpkg     11 feicoes: limite + 11 indicadores, EPSG:31983
  censo2022_por_municipio.geojson   mesmo conteudo
  censo2022_por_municipio.csv       so atributos
  censo2022_por_municipio.shp       shapefile (campos truncados em 10 caracteres)
  censo2022_sidra_bruto.csv         resposta crua da SIDRA, 176 linhas

setores/
  setores_com_populacao.gpkg       32.991 setores com populacao e densidade
  setores_com_populacao.csv         atributos, sem geometria

tabelas/
  Populacao_residente_por_situacao_do_domicilio_municipios.xlsx
  Dicionario_de_dados_malha_agregados.xlsx
```

## Nivel municipal

| Municipio | Area km2 | Populacao | Densidade | Domicilios | Hab/domic | Taxa cresc. | Idade-media |
|---|---|---|---|---|---|---|---|
| Sao Paulo | 1521,2 | 11.451.999 | 7.528 | 4.307.665 | 2,66 | 0,15 | 72,5 |
| Campinas | 794,9 | 1.139.047 | 1.433 | 429.543 | 2,65 | 0,43 | 76,9 |
| Jundiai | 431,3 | 443.221 | 1.028 | 163.219 | 2,72 | 1,51 | 75,6 |
| Francisco Morato | 49,0 | 165.139 | 3.370 | 57.668 | 2,86 | 0,56 | 35,1 |
| Franco da Rocha | 132,7 | 144.849 | 1.092 | 49.319 | 2,94 | 0,80 | 42,3 |
| Valinhos | 148,6 | 126.373 | 850 | 46.360 | 2,73 | 1,41 | 77,1 |
| Varzea Paulista | 35,1 | 115.771 | 3.298 | 40.492 | 2,86 | 0,65 | 47,1 |
| Caieiras | 97,6 | 95.032 | 974 | 32.684 | 2,91 | 0,78 | 49,3 |
| Campo Limpo Paulista | 79,3 | 77.632 | 979 | 26.667 | 2,91 | 0,39 | 55,4 |
| Vinhedo | 81,0 | 76.540 | 945 | 27.415 | 2,79 | 1,55 | 70,1 |
| Louveira | 55,7 | 51.847 | 931 | 17.902 | 2,90 | 2,83 | 39,4 |

**Total dos onze municipios: 13.886.412 habitantes.**

### Campos

| Campo | Tabela SIDRA | O que e |
|---|---|---|
| `populacao` | t/4709 | Populacao residente no Censo 2022 |
| `taxa_crescimento` | t/4709 | Crescimento geometrico desde 2010, em % ao ano |
| `variacao_abs_2010` | t/4709 | Ganho de populacao desde 2010 |
| `area_calculada_km2` | calculada | Area da geometria do limite municipal |
| `densidade_hab_km2` | calculada | Populacao dividida pela area da geometria |
| `domicilios_ocupados` | t/4712 | Domicilios particulares permanentes ocupados |
| `pessoas_por_domicilio` | calculada | Media de moradores por domicilio |
| `pessoas_14_mais` | t/6580 | Populacao de 14 anos ou mais |
| `indice_envelhecimento` | t/9515 | Idosos de 60+ por 100 de 14- a 59- |
| `area_oficial_km2` | t/4714 | Area territorial declarada pelo IBGE |
| `densidade_oficial` | t/4714 | Densidade declarada pelo IBGE |

A densidade que calculei sobre a geometria coincide com a oficial do IBGE: para Sao
Paulo, 7.528,3 contra 7.528,1 hab/km2. A diferenca menor que 0,5% vem da area
ligeiramente diferente entre geometria e area territorial declarada, o que confirma
que o cruzamento foi feito sobre as geometrias corretas.

## Nivel de setor censitario

Esta e a parte que responde as perguntas de influencia. Sao os **32.991 setores
censitarios** dos onze municipios, na malha oficial do Censo 2022, ja com
**populacao e densidade por setor**.

Distribuicao dos setores e das pessoas:

| Municipio | Setores | Populacao no setor | Densidade mediana |
|---|---|---|---|
| Sao Paulo | 27.301 | 11.434.786 | 18.522 |
| Campinas | 2.593 | 1.133.489 | 7.444 |
| Jundiai | 1.177 | 429.315 | 7.379 |
| Francisco Morato | 388 | 164.374 | 9.245 |
| Franco da Rocha | 368 | 139.074 | 9.165 |
| Varzea Paulista | 243 | 115.437 | 11.055 |
| Campo Limpo Paulista | 235 | 76.183 | 6.037 |
| Valinhos | 233 | 121.921 | 3.995 |
| Caieiras | 207 | 94.087 | 8.280 |
| Vinhedo | 154 | 75.558 | 2.827 |
| Louveira | 92 | 49.676 | 4.718 |

### Campos do setor

| Campo | O que e |
|---|---|
| `CD_SETOR` | Codigo do setor no IBGE, chave de juncao |
| `populacao_setor` | Moradores no setor |
| `habitantes_por_km2` | Densidade demografica do setor |
| `area_km2_censo` | Area do setor, conforme o IBGE |
| `area_domiciliada_km2` | Area efetivamente domiciliada (exclui areasidio nao ocupadas) |
| `NM_BAIRRO`, `NM_DIST` | Bairro e distrito |
| `NM_RGI`, `NM_RGINT` | Regiao_geometrica imediata e intermediaria |

### Ressalvas honestas

**Cobertura de 98,4%.** Dos 32.991 setores, 32.458 têm dados de população. Faltam 532,
que são setores sem moradores (areas rurais, matas, lotes vagos). Por isso a soma por
município fica um pouco abaixo do total municipal: 5 dos 11 municipios batem dentro de
1%, e o maior desvio é Franco da Rocha, com **-4,0%**. **Use a tabela municipal para
totais de população e a de setor para análise espacial.**

**A densidade do setor é muito alta.** Isso é normal: um setor censitário urbano tem
poucas quadra e pode registrar mais de 100 mil hab/km2 em áreas densas de Sao Paulo.

**Como os dados foram obtidos.** A fonte é a planilha oficial do IBGE
`Area_efetivamente_domiciliada_e_densidade_ajustada_dos_Setores_Censitarios.xlsx`,
publicada na pasta `censo_2022` do FTP do IBGE. Ela cobre o Brasil inteiro, com 354.965
linhas, e traz as colunas de populate sem rotulo (`v0001` a `v0007`).

Identifiquei que `v0001` é a população conferindo que `v0001 = densidade x area` para
todas as amostras, com erro zero. Depois filtrei as linhas pelos 32.991 codigos de
setor dos onze municipios e guardei o resultado em `setores_com_populacao.csv`, que é
a versao reduzida desta pasta. A planilha nacional nao foi incluida por pesar 39 MB e
por nao ter nenhum dado fora do escopo do projeto. Para reverter, o endereco esta em
`12 - Dados do Censo 2022/tabelas/Dicionario_de_dados_malha_agregados.xlsx`.

## O que da para analisar com isto

O setor censitário tem área e posição geográfica precisa, então dá para responder
perguntas sobre o corredor sem depender das coordenadas do traçado, que continuam com
erro de 8,4 km (ver `10 - Dados Estruturados/LEIA-ME.md`).

**Respondevel agora:**

- quantos moradores vivem nas areas mais densas de cada município
- perfil etario por setor, e onde estão os bairros mais novos
- quanto da população está em areas de expansao urbana
- peso populacional de cada município na soma do corredor
- quantos moradores por domicilio, e onde estão os households grandes
- ranking de setores por população, que e o insumo para cruzar com as obras do projeto

**Nao respondevel sem corrigir as coordenadas:**

- quantas pessoas estao a menos de 1 km do eixo do trem
- população atingida por estação, calculada por raio
- impacto de uma obra em número de dwellers afetados

## Licença

Dados do IBGE: uso livre, atribuicao recomendada. O Censo 2022 é de acesso público e
gratuito (Lei 9.279/1996, art. 8, inciso III, e Lei 10.973/2004).
