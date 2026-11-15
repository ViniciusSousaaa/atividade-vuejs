# Atividade Vue.js (Desafio Extra)

Aplicação web responsiva desenvolvida com Vue.js, com seis componentes visuais implementados como componentes Vue.

## Componentes

| Componente | Arquivo | Exemplo de uso |
|---|---|---|
| Acordeão | `Accordion.vue` | Perguntas frequentes |
| Paginação | `Pagination.vue` | Listagem de produtos |
| Barra de Progresso | `ProgressBar.vue` | Upload de arquivo |
| Abas | `Tabs.vue` | Perfil do usuário |
| Menu Suspenso | `DropdownMenu.vue` | Seleção de idioma |
| Notificação Toast | `ToastNotification.vue` | Sucesso e erro ao salvar |

## Conceitos utilizados

- Componente principal (`App.vue`) integrando os demais
- Props para passar dados entre componentes
- Estado local com `data` e `computed`
- Eventos com `@click` e emissão com `$emit`
- Lifecycle hooks (`mounted`, `beforeUnmount`)
- Serviço global de notificações (`$toast`)

## Estrutura

```
├── index.html
└── src/
    ├── main.js
    ├── App.vue
    ├── style.css
    ├── components/
    └── services/toastService.js
```

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Autor

Vinicius Sousa - Tópicos Avançados em Programação