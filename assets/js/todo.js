class Todo {
  constructor(categoryIndex, index, text) {
    this.categoryIndex = categoryIndex;
    this.index = index;
    this.text = text;
    this.completed = false;
    this.prioritised = false;
  }
  
  get html() {
    return this.generateHTML();
  }
  
  generateHTML() {
    return `<div class="todo" data-categoryIndex=${this.categoryIndex} data-index=${this.index}>
              <div><h3>${this.text}</h3></div>
              <button class="todo-completed">${this.completed ? "I" : "C"}</button>
              <button class="todo-prioritised">${this.prioritised ? "N" : "P"}</button>
              <button class="todo-delete">D</button>
            </div>`
  }
}

export default Todo;
