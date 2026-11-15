import { reactive } from 'vue'

let proximoId = 1

export const toastService = reactive({
  toasts: [],

  mostrar(mensagem, tipo = 'info') {
    const toast = { id: proximoId++, mensagem, tipo }
    this.toasts.push(toast)
    setTimeout(() => {
      this.fechar(toast.id)
    }, 3000)
  },

  fechar(id) {
    const indice = this.toasts.findIndex((toast) => toast.id === id)
    if (indice !== -1) {
      this.toasts.splice(indice, 1)
    }
  }
})