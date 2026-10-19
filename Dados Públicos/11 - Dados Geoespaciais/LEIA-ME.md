# Dados geoespaciais dos municipios do TIC Eixo Norte

Limites dos **11 municipios** atravessados pelo Trem Intercidades Eixo Norte, mais as
camadas de zoneamento e bairro que as prefeituras disponibilizam em formato shapefile.

Pesquisa e coleta em 19/10/2026. Tudo vem de fontes publicas e abertas.

## Resposta curta a pergunta inicial

Apenas **3 dos 11 municipios** publicam dado vetorial aberto de verdade.

| Municipio | Cod. IBGE | O que a prefeitura publica | Situacao |
|---|---|---|---|
| Sao Paulo | 3550308 | GeoSampa (GeoServer), 486 camadas: distritos, subprefeituras, zoneamento, uso do solo, bacias | aberto |
| Caieiras | 3509007 | Nada vetorial. Plano Diretor so em PDF | nao publicado |
| Franco da Rocha | 3516408 | Nada vetorial. Sem geoportal nem dados abertos | nao publicado |
| Francisco Morato | 3516309 | Nada vetorial. Plano Diretor em PDF (LC 419/2024) | nao publicado |
| Campo Limpo Paulista | 3509601 | Nada vetorial. Instrumentos urbanisticos em texto e PDF | nao publicado |
| Varzea Paulista | 3556503 | Visualizador GeoPixel com lotes e zoneamento, sem download exposto | so visualizacao |
| Jundiai | 3525904 | GeoJundiai (GeoServer), 106 camadas WFS: bairros, macrozoneamento, zoneamento, lotes | aberto |
| Louveira | 3527306 | Portal ArcGIS so com camadas de saneamento | nao publicado |
| Vinhedo | 3556701 | Sistema Mappa Web para consulta por lote, sem download | so visualizacao |
| Valinhos | 3556206 | Caderno de Mapas em PDF (14 mapas), sem dado vetorial | so visualizacao |
| Campinas | 3509502 | DIDC com download SHP: Plano Diretor 2018, macrozonas, zoneamento, UTB | aberto |

Nos sete municipios sem dado vetorial aberto, a saida e requerimento formal pela Lei de
Acesso a Informacao a Secretaria de Planejamento e Obras. Os dados existem, mas nao
foram publicados. Os enderecos estao em `fontes_por_municipio.csv`.

## Conteudo

```
geopackage/
  tic_eixo_norte_municipios.gpkg     abre direto no QGIS, 8 camadas

shapefiles/
  limites_municipais_4326/           shapefile, WGS84 (lon/lat)
  limites_municipais_31983/          shapefile, SIRGAS2000 / UTM 23S (metros)
  limites_municipais_4326.geojson
  limites_municipais_31983.geojson
  osm_limites_municipais_4326.geojson   limites do OSM, para conferir
  osm_limites_municipais_31983.geojson
  municipios/
    campinas_zoneamento/            173 zonas de uso e ocupacao (DIDC, LPous 2018)
    campinas_utb/                    93 unidades territoriais basicas (DIDC)
    campinas_perimetro_urbano/        8 feicoes (DIDC, MZDO 2018)
    jundiai_bairros/                 74 bairros (GeoJundiai)
    jundiai_macrozonas/             572 zonas preenchidas, com rotulo do plano diretor
    jundiai_macrozoneamento/        767 linhas: a rede de limites, como publicada

fontes_por_municipio.csv             o que cada prefeitura publica, com o endereco
comparacao_areas_ibge_osm.csv        conferencia de area entre IBGE e OSM
```

## Camadas do GeoPackage

| Camada | Feicoes | Origem |
|---|---|---|
| `limites_municipais` | 11 | IBGE |
| `osm_limites_municipais` | 11 | OpenStreetMap |
| `campinas_zoneamento` | 173 | DIDC |
| `campinas_utb` | 93 | DIDC |
| `campinas_perimetro_urbano` | 8 | DIDC |
| `jundiai_bairros` | 74 | GeoJundiai |
| `jundiai_macrozonas` | 572 | GeoJundiai, poligonizado |
| `jundiai_macrozonas_linhas` | 767 | GeoJundiai, como publicado |

Todas em EPSG:31983 (SIRGAS2000 / UTM 23S).

## Como os limites foram obtidos e conferidos

Duas fontes independentes, comparadas area a area:

1. **IBGE**, API de malhas:
   `https://servicodados.ibge.gov.br/api/v3/malhas/municipios/<codigo>?formato=application/vnd.geo+json`
2. **OpenStreetMap**, via Overpass API, pela tag `IBGE:GEOCODIGO` da relation.

| Municipio | IBGE km2 | OSM km2 | Diferenca |
|---|---|---|---|
| Campinas | 794,9 | 794,8 | 0,00% |
| Francisco Morato | 49,0 | 49,0 | 0,05% |
| Caieiras | 97,6 | 97,5 | 0,09% |
| Jundiai | 431,3 | 430,5 | 0,19% |
| Sao Paulo | 1521,2 | 1524,1 | 0,19% |
| Valinhos | 148,6 | 148,7 | 0,12% |
| Franco da Rocha | 132,7 | 132,3 | 0,33% |
| Varzea Paulista | 35,1 | 35,3 | 0,38% |
| Vinhedo | 81,0 | 80,5 | 0,65% |
| Louveira | 55,7 | 56,3 | 1,00% |
| Campo Limpo Paulista | 79,3 | 80,4 | 1,35% |

Total dos onze municipios: 3.427 km2 pelo IBGE e 3.429 km2 pelo OSM, diferenca de
**0,09%**. As duas fontes descrevem o mesmo territorio, entao qualquer uma serve para
analise de influencia de terminal.

**Sobre o datum:** IBGE e OSM devolvem em WGS84 (EPSG:4326). As camadas de zoneamento
vim em SIRGAS2000 / UTM 23S (EPSG:31983). Para medir distancia em metros ou criar
buffers de influencia, **projete tudo para EPSG:31983** antes de comparar.

## Observacoes sobre a qualidade dos dados

- **Campinas, zoneamento:** das 204 feicoes publicadas, 173 sao poligonos utilizaveis.
  As outras 31 sao degeneradas, com area effectively zero, e foram descartadas.
- **Jundiai, macrozonas:** a prefeitura publica a rede de limites (767 linhas), nao
  os poligonos. As 572 zonas desta pasta foram **poligonizadas** a partir dessa rede e
  recortadas pelo limite municipal. Cobrem 427,9 km2, ou 99,2% da area do municipio.
  Os rotulos (`zon_2018`, `macro_2018`) vieram da propria prefeitura, herdados da linha
  de maior sobreposicao com o perimetro de cada zona.
- **Zonas de area muito pequena** (abaixo de 1 hectare) foram descartadas como residuo.

## O que ainda nao da para fazer

Os arquivos CAD do edital usam um **sistema local de engenharia**, com erro medio de
8,4 km em relacao as posicoes reais (ver `10 - Dados Estruturados/LEIA-ME.md`).
Por isso **nao e possivel cruzar o traçado do TIC com estes limites em coordenadas
geograficas**. Qualquer area de influencia calculada sobre o traçado estaria errada.

**Da para fazer agora, com seguranca:**

- area do municipio, bairro ou zona de uso atravessada pelo corredor
- populacao e densidade por municipio, cruzando com agregados do IBGE
- distancia em linha reta entre o terminal e o centroide do municipio
- quais zonas de uso (residencial, industrial, comercial, conservacao) ficam no corredor

**Nao da para fazer sem corrigir as coordenadas:**

- raio de 500 m a partir do eixo do trem
- quais lotes estao a menos de 1 km da estacao
- qualquer area de incidencia calculada sobre o traçado

A correcao depende do levantamento topografico junto a SPI/Artesp.

## Licenca

Limites do IBGE e dados do OSM: uso livre, atribuicao recomendada.
Camadas de zoneamento: a prefeitura e a fonte original; aqui estao como publicadas
nos portais oficiais.
