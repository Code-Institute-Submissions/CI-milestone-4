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
              <button class="todo-completed" title="Complete todo">${this.completed ? "<i class='fas fa-times'></i>" : "<i class='fas fa-check'></i>"}</button>
              <button class="todo-prioritised" title="Prioritise todo">${this.prioritised ? "<i class='fas fa-star'></i>" : "<i class='far fa-star'></i>"}</button>
              <button class="todo-delete" title="Delete todo"><i class="fas fa-trash-alt"></i></button>
            </div>`
  }

  set newIndices(index) {
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
