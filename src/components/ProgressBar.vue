<template>
  <div>
    <div class="barra-progresso">
      <div class="barra-preenchimento" :style="{ width: valorLimitado + '%' }"></div>
    </div>
    <p>{{ valorLimitado }}%</p>
  </div>
</template>

<script>
export default {
  props: {
    valor: {
      type: Number,
      required: true
    }
  },
  computed: {
    valorLimitado() {
      return Math.min(100, Math.max(0, this.valor))
    }
  }
}
</script>

<style scoped>
.barra-progresso {
  height: 20px;
  background: #ddd;
  border-radius: 10px;
  overflow: hidden;
}

.barra-preenchimento {
  height: 100%;
  background: #4caf50;
  transition: width 0.3s;
}
</style>