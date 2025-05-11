class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  // Implementar aqui
  size() { //deve ser capaz de calcular o tamanho da fila
    return this.elements.length
  }
  
  add(item) { //deve ser capaz de adicionar um item na fila
    this.elements.push(item)
  }

  peek() { //deve escolher o primeiro item da fila
    return this.elements[0]
  }

  dequeue() { //deve remover o primeiro item da fila
    return this.elements.shift()
  }
}



export default Queue