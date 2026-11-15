<template>
  <div class="dropdown" ref="dropdown">
    <button @click="alternar">{{ titulo }}</button>
    <ul v-show="aberto" class="dropdown-lista">
      <li v-for="opcao in opcoes" :key="opcao" @click="selecionar(opcao)">
        {{ opcao }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true
    },
    opcoes: {
      type: Array,
      required: true
    }
  },
  emits: ['selecionar'],
  data() {
    return {
      aberto: false
    }
  },
  mounted() {
    document.addEventListener('click', this.clicarFora)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.clicarFora)
  },
  methods: {
    alternar() {
      this.aberto = !this.aberto
    },
    selecionar(opcao) {
      this.aberto = false
      this.$emit('selecionar', opcao)
    },
    clicarFora(evento) {
      if (!this.$refs.dropdown.contains(evento.target)) {
        this.aberto = false
      }
    }
  }
}
</script>

<style scoped>
.dropdown {
  position: relative;
}

.dropdown-lista {
  position: absolute;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  min-width: 150px;
  background: #fff;
  color: #333;
  border: 1px solid #ccc;
  z-index: 10;
}

.dropdown-lista li {
  padding: 8px;
  cursor: pointer;
}

.dropdown-lista li:hover {
  background: #eee;
}
</style>