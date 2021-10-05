class Todo {
  constructor(text) {
    this.text = text;
    this.categoryIndex = 0;
    this.index = 0;
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

  set newIndices([categoryindex, index]) {
    this.categoryIndex = categoryindex;
    this.index = index;
  }

  // Add toggles for completed and prioritised
}

export default Todo;
