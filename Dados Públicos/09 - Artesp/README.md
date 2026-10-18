# 🏛️ Informações Artesp

Documentos baixados do portal da **Artesp** (Agência de Transporte do Estado de São Paulo), o órgão regulador da concessão.

> 📌 **Sobre esta pasta:** na-download foram quatro arquivos, mas **três eram cópias redundantes** de documentos já versionados no repositório. Apenas o que acrescenta informação nova foi mantido.

---

## ✅ Arquivo mantido

### `Termo Aditivo nº 01-2024 (versão legível - Artesp).pdf`

**Termo Aditivo nº 1** ao Contrato de Concessão Patrocinada nº 002/2024 — Processo SPI nº 021.00001585/2024-68. Assunto: *solicitação de inclusão de área à Área da Concessão*.

**Por que foi mantido:** a cópia que já existe em `../../03 - Contrato e Termos Aditivos/Termo Aditivo nº 01-2024_19.12.2024_PPP TIC Eixo Norte.pdf` está com a **codificação de texto quebrada** — a camada de texto extrai caracteres de controle (`\x01\x02\x03…`) em vez de letras. Ou seja, o arquivo **não é pesquisável nem copiável**.

O arquivo do Artesp é legível, tem as mesmas 5 páginas e as mesmas 4 imagens, e serve como **cópia de referência para conferência**.

> ⚠️ Os dois arquivos coexistem de propósito: o de `03/` preserva o original publicado; este serve para leitura. **Para citar o conteúdo, use este.**

**O que o termo adita:** incorporação à Área da Concessão da área ocupada pelos **edifícios 64, 65, 66 e 67** do **complexo de manutenção Lapa**, com metragem total de **10.122 m²**. Registra que, desde 20 de junho de 2024, a CPTM não executa mais atividades administrativas ou do Centro de Formação Profissional Lapa nesses edifícios (Ofício OF PR 330/2024, SEI nº 0036406188).

---

## 🗃️ Arquivos baixados mas não versionados

| Arquivo | Situação |
|---|---|
| `Contrato.pdf` | **Byte a byte idêntico** a `../../03 - Contrato e Termos Aditivos/CONTRATO_TIC_EIXO_NORTE_assinado_vf.pdf` |
| `Edital Licitação.pdf` | **Byte a byte idêntico** a `../../01 - Edital e Minutas/EDITAL_republicacao 29.09.2023_CI 01-2021_TIC.pdf` |
| `8e48cc27-c3e8-4467-8ef1-dea7afbcf03b.pdf` | **Mesmo conteúdo** do TAM 02-2025 (12 páginas, mesmo texto, mesmas 4 imagens); difere só em metadados internos |

As cópias foram mantidas **apenas no disco local** e estão listadas no `.gitignore` da raiz, para que continuem disponíveis para conferência sem inflar o repositório em cerca de 4 MB com conteúdo já existente.

---

## 🔗 Relação com o restante do repositório

| O que você procura | Onde está |
|---|---|
| Contrato assinado (420 páginas) | `../../03 - Contrato e Termos Aditivos/CONTRATO_TIC_EIXO_NORTE_assinado_vf.pdf` |
| Edital republicado (79 páginas) | `../../01 - Edital e Minutas/EDITAL_republicacao 29.09.2023_CI 01-2021_TIC.pdf` |
| TAM 02-2025 | `../../03 - Contrato e Termos Aditivos/Termo_Aditivo nº 02-2025_04.04.2025_TIC Eixo Norte.pdf` |
| Página institucional da Artesp | [artesp.sp.gov.br/tic-trens](https://www.artesp.sp.gov.br/artesp/setor-regulado/metroferroviario/tic-trens) |