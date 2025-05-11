import Queue from './queue'

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()
    queue.add(1)
    queue.add(2)
    expect(queue.size()).toBe(2)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
   const queue = new Queue()
   queue.add('item1')
   expect(queue.elements).toEqual(['item1'])
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()
    queue.add('primeiro')
    queue.add('segundo')
    expect(queue.peek()).toBe('primeiro')
    
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()
    queue.add('a')
    queue.add('b')
    const removed = queue.dequeue()
    expect(removed).toBe('a')
    expect(queue.elements).toEqual(['b'])
  })
})