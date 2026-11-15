<template>
  <div class="paginacao">
    <button @click="irPara(paginaAtual - 1)" :disabled="paginaAtual === 1">
      Anterior
    </button>
    <button
      v-for="pagina in paginas"
      :key="pagina"
      @click="irPara(pagina)"
      :class="{ ativa: pagina === paginaAtual }"
    >
      {{ pagina }}
    </button>
    <button @click="irPara(paginaAtual + 1)" :disabled="paginaAtual === totalPaginas">
      Próxima
    </button>
    <p>Página {{ paginaAtual }} de {{ totalPaginas }}</p>
  </div>
</template>

<script>
export default {
  props: {
    totalPaginas: {
      type: Number,
      required: true
    },
    paginaAtual: {
      type: Number,
      required: true
    }
  },
  emits: ['mudar-pagina'],
  computed: {
    paginas() {
      const lista = []
      for (let i = 1; i <= this.totalPaginas; i++) {
        lista.push(i)
      }
      return lista
    }
  },
  methods: {
    irPara(pagina) {
      this.$emit('mudar-pagina', pagina)
    }
  }
}
</script>

<style scoped>
.paginacao {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.paginacao p {
  width: 100%;
}

.ativa {
  background: #333;
  color: #fff;
}
</style>