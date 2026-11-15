<template>
  <div class="accordion">
    <div v-for="(item, indice) in itens" :key="indice" class="accordion-item">
      <button class="accordion-titulo" @click="alternar(indice)">
        {{ item.titulo }}
      </button>
      <div class="accordion-conteudo" :class="{ aberto: itemAberto === indice }">
        <p>{{ item.conteudo }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itens: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      itemAberto: null
    }
  },
  methods: {
    alternar(indice) {
      if (this.itemAberto === indice) {
        this.itemAberto = null
      } else {
        this.itemAberto = indice
      }
    }
  }
}
</script>

<style scoped>
.accordion-titulo {
  width: 100%;
  text-align: left;
  margin-top: 4px;
}

.accordion-conteudo {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.accordion-conteudo.aberto {
  max-height: 200px;
}
</style>