<template>
  <div class="toast-container">
    <div v-for="toast in toasts" :key="toast.id" class="toast" :class="toast.tipo">
      <span>{{ toast.mensagem }}</span>
      <button @click="fechar(toast.id)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    toasts() {
      return this.$toast.toasts
    }
  },
  methods: {
    fechar(id) {
      this.$toast.fechar(id)
    }
  }
}
</script>

<style scoped>
.toast-container {
  position: fixed;
  bottom: 16px;
  right: 16px;
  max-width: calc(100% - 32px);
}

.toast {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
  padding: 12px;
  border-radius: 6px;
  color: #fff;
}

.toast button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
}

.sucesso {
  background: #4caf50;
}

.erro {
  background: #f44336;
}

.info {
  background: #2196f3;
}
</style>