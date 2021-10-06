class Todo {
  constructor(text, index = 0, completed = false, prioritised = false) {
    this.text = text;
    this.index = index;
    this.completed = completed;
    this.prioritised = prioritised;
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
