<template>
  <header>
    <h1>Atividade Vue.js</h1>
    <DropdownMenu
      :titulo="'Idioma: ' + idioma"
      :opcoes="idiomas"
      @selecionar="trocarIdioma"
    />
  </header>

  <main class="grade">
    <section class="card">
      <h2>Perguntas Frequentes</h2>
      <Accordion :itens="faq" />
    </section>

    <section class="card">
      <h2>Produtos</h2>
      <ul>
        <li v-for="produto in produtosDaPagina" :key="produto.nome">
          {{ produto.nome.toUpperCase() }} - {{ formatarPreco(produto.preco) }}
        </li>
      </ul>
      <Pagination
        :total-paginas="totalPaginas"
        :pagina-atual="paginaAtual"
        @mudar-pagina="mudarPagina"
      />
    </section>

    <section class="card">
      <h2>Upload de Arquivo</h2>
      <ProgressBar :valor="progresso" />
      <button @click="iniciarUpload">Iniciar upload</button>
      <p>Ou ajuste manualmente:</p>
      <input
        type="range"
        min="0"
        max="100"
        v-model.number="progresso"
        @change="verificarProgresso"
      >
    </section>

    <section class="card">
      <h2>Perfil do Usuário</h2>
      <Tabs :abas="abas" />
    </section>

    <section class="card">
      <h2>Notificações</h2>
      <button @click="salvar">Salvar</button>
      <button @click="salvarComErro">Salvar com erro</button>
    </section>
  </main>

  <footer>
    <p>Vinicius Sousa - Tópicos avançados em programação</p>
  </footer>

  <ToastNotification />
</template>

<script>
import Accordion from './components/Accordion.vue'
import Pagination from './components/Pagination.vue'
import ProgressBar from './components/ProgressBar.vue'
import Tabs from './components/Tabs.vue'
import DropdownMenu from './components/DropdownMenu.vue'
import ToastNotification from './components/ToastNotification.vue'

export default {
  components: {
    Accordion,
    Pagination,
    ProgressBar,
    Tabs,
    DropdownMenu,
    ToastNotification
  },
  data() {
    return {
      faq: [
        { titulo: 'Como faço um pedido?', conteudo: 'Escolha o produto, adicione ao carrinho e finalize a compra.' },
        { titulo: 'Qual o prazo de entrega?', conteudo: 'O prazo é de 5 a 10 dias úteis.' },
        { titulo: 'Posso trocar um produto?', conteudo: 'Sim, em até 7 dias após o recebimento.' }
      ],
      abas: [
        { titulo: 'Perfil', conteudo: 'Nome: Fulano de Tal. Email: fulano@email.com' },
        { titulo: 'Pedidos', conteudo: 'Você possui 3 pedidos realizados.' },
        { titulo: 'Configurações', conteudo: 'Aqui você altera senha e preferências.' }
      ],
      produtos: [
        { nome: 'Notebook', preco: 3500 },
        { nome: 'Mouse', preco: 80 },
        { nome: 'Teclado', preco: 150 },
        { nome: 'Monitor', preco: 900 },
        { nome: 'Headset', preco: 250 },
        { nome: 'Webcam', preco: 200 },
        { nome: 'Cadeira', preco: 1200 },
        { nome: 'Mesa', preco: 700 },
        { nome: 'Impressora', preco: 600 },
        { nome: 'Pendrive', preco: 40 }
      ],
      porPagina: 3,
      paginaAtual: 1,
      progresso: 0,
      carregamento: null,
      idioma: 'Português',
      idiomas: ['Português', 'Inglês', 'Espanhol']
    }
  },
  computed: {
    totalPaginas() {
      return Math.ceil(this.produtos.length / this.porPagina)
    },
    produtosDaPagina() {
      const inicio = (this.paginaAtual - 1) * this.porPagina
      return this.produtos.slice(inicio, inicio + this.porPagina)
    }
  },
  mounted() {
    this.$toast.mostrar('Bem-vindo à atividade Vue.js!', 'info')
  },
  beforeUnmount() {
    clearInterval(this.carregamento)
  },
  methods: {
    mudarPagina(pagina) {
      this.paginaAtual = pagina
    },
    formatarPreco(valor) {
      return 'R$ ' + valor.toFixed(2).replace('.', ',')
    },
    iniciarUpload() {
      clearInterval(this.carregamento)
      this.progresso = 0
      this.carregamento = setInterval(() => {
        this.progresso += 10
        this.verificarProgresso()
      }, 300)
    },
    verificarProgresso() {
      if (this.progresso >= 100) {
        clearInterval(this.carregamento)
        this.$toast.mostrar('Upload concluído!', 'sucesso')
      }
    },
    trocarIdioma(opcao) {
      this.idioma = opcao
      this.$toast.mostrar('Idioma alterado para ' + opcao, 'info')
    },
    salvar() {
      this.$toast.mostrar('Dados salvos com sucesso!', 'sucesso')
    },
    salvarComErro() {
      this.$toast.mostrar('Erro ao salvar os dados.', 'erro')
    }
  }
}
</script>