# 🤖 Agentes de Coleta de Dados

Espaço dedicado aos **agentes de IA** que coletam automaticamente novos dados públicos dos portais oficiais e alimentam este repositório.

> 🚧 **Em construção.** Esta pasta foi criada na reorganização do repositório e será preenchida conforme a definição da arquitetura.

---

## 🎯 Objetivo

Manter o repositório **atualizado sem intervenção manual**, coletando documentos e dados novos publicados em:

| Fonte | Tipo | Observação |
|---|---|---|
| **DOE/SP** — Diário Oficial | Decretos, avisos, extratos, homologações | Publicação diária, consulta por data e por termo |
| **PPI-SP** | Página do projeto, editais, atos | Atualizado quando há socialiste o processo |
| **Artesp** | Contrato, anexos, **Termos Aditivos** | Página do TIC Trens tem link direto para cada TAM |
| **Portais de Transparência dos municípios** | Licenças ambientais, pareceres CETESB, plantas | Um portal por município atravessado |
| **CETESB / TCRA** | Licenças e autorizações ambientais | São as fontes de `08 - .../Vinhedo` |

---

## ⚖️ Regras de conduta (importantes)

Agentes de coleta precisam seguir límites claros:

1. **Só dados públicos** — nada que exija login, pagamento ou credencial;
2. **Respeitar `robots.txt`** e os termos de uso de cada portal;
3. **Limitar taxa de requisições** (*rate limiting*) e preferir baixa frequência — os portais públicos são infraestrutura de terceiros;
4. **Identificar-se** com `User-Agent` transparente, com e-mail de contato;
5. **Nunca burlar** CAPTCHA, bloqueio ou proteção de qualquer natureza;
6. **Não republicar dados pessoais** (LGPD) — documentos de licença ambiental, atos e plantas são o alvo;
7. **Registrar a origem** de cada arquivo coletado: portal, data da coleta e URL de origem.

> ⚠️ Última linha de defesa: se um portal bloquear o acesso automatizado, **a resposta correta é parar e buscar via Lei de Acesso à Informação (LAI)** — não burlar.

---

## 💡 Arquitetura sugerida

```
Agentes/
├── README.md
├── config/
│   └── fontes.yaml          # lista de fontes, URLs, frequencies
├── coletores/               # um script por portal
│   ├── doe_sp.py
│   ├── ppi_sp.py
│   ├── artesp.py
│   └── municipios/
├── comuns/                  # utilitários compartilhados
│   ├── http.py              # cliente com rate limit e retry
│   ├── armazenamento.py     # persistência e deduplicação por hash
│   └── registro.py          # log de auditoria (origem + data)
├── saida/                   # .gitignore — staging antes de revisar
└── testes/
```

---

## 🔁 Fluxo sugerido

```text
Portal oficial
      ↓  HTTP (rate-limited, com User-Agent)
Coletor específico do portal
      ↓  hash SHA-256 do arquivo
Verificação de novidade (já temos esse arquivo?)
      ↓  sim → descarta
Não → staging em saida/  +  registro em auditoria.jsonl
      ↓
REVISÃO HUMANA
      ↓
Move para ../Dados Públicos/ e abre Pull Request
```

> 🔑 **Regra de ouro: nenhum agente faz commit automático.** Ele **coleta e propõe**; uma pessoa revisa e decide. Publicar documentos oficiais sem conferência tem risco alto de erro ou de conteúdo desatualizado.

---

## 📋 Próximos passos

- [ ] Definir a stack (Python é o mais provável — `requests`/`httpx`, `pymupdf`, `pandas`)
- [ ] Mapear os portais-alvo e suas URLs de consulta
- [ ] Implementar o coletor do **DOE/SP** (fonte mais systematizada)
- [ ] Implementar deduplicação por hash de conteúdo
- [ ] Criar o log de auditoria de coletas
- [ ] Definir frequência de execução (recomendação: semanal, fora do horário de pico)
- [ ] Testar em modo *dry-run* antes de rodar de verdade

---

Ver também: [`../README.md`](../README.md) · [`../Site/README.md`](../Site/README.md) · [`../Dados Públicos/`](../Dados%20P%C3%BAblicos/)
