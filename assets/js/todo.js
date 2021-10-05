class Todo {
  constructor(text) {
    this.text = text;
    this.index = 0;
    this.completed = false;
    this.prioritised = false;
  }
  
  get html() {
    return this.generateHTML();
  }
  
  generateHTML() {
    return `<div class="todo ${this.completed ? "completed" : ""} ${this.prioritised ? "prioritised" : ""}" data-index=${this.index}>
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

  // Toggles to changed associated state
  toggleCompleted() {
    this.completed = !this.completed;
  }

  togglePrioritised() {
    this.prioritised = !this.prioritised;
  }
}

export default Todo;
