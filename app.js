const app = new Vue({
  el: "#app",
  data: {
    titulo: "Desafio 1 - Contador",
    contador: 0
  },
  methods: {
    sumar(){
      this.contador ++;
    },
    restar(){
      this.contador --;
    }
  }
})