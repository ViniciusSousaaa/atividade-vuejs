<template>
  <div class="abas">
    <div class="abas-titulos">
      <button
        v-for="(aba, indice) in abas"
        :key="indice"
        @click="selecionar(indice)"
        :class="{ ativa: abaAtiva === indice }"
      >
        {{ aba.titulo }}
      </button>
    </div>
    <div class="abas-conteudo">
      <p>{{ abas[abaAtiva].conteudo }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    abas: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      abaAtiva: 0
    }
  },
  methods: {
    selecionar(indice) {
      this.abaAtiva = indice
    }
  }
}
</script>

<style scoped>
.abas-titulos {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.ativa {
  background: #333;
  color: #fff;
}
</style>