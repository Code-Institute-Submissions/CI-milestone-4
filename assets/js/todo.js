class Todo {
  // Constructor using default values to allow both easier and more controlled construction
  constructor(text, index = 0, completed = false, prioritised = false) {
    this.text = text;
    this.index = index;
    this.completed = completed;
    this.prioritised = prioritised;
  }
  
  // getter returns the html of this todo
  get html() {
    return this.generateHTML();
  }
  
  // Generates HTML from data of todo which is returned by the html getter
  generateHTML() {
    return (
      `<div class="todo ${this.completed ? "completed" : ""} ${this.prioritised ? "prioritised" : ""}" data-index=${this.index}>
        <div><h3>${this.text}</h3></div>
        <button class="todo-completed" title="Complete todo">${this.completed ? "<i class='fas fa-times'></i>" : "<i class='fas fa-check'></i>"}</button>
        <button class="todo-prioritised" title="Prioritise todo">${this.prioritised ? "<i class='fas fa-star'></i>" : "<i class='far fa-star'></i>"}</button>
        <button class="todo-delete" title="Delete todo"><i class="fas fa-trash-alt"></i></button>
      </div>`
    );
  }

  // getter returns summarised todo
  get summary() {
    return this.generateSummary();
  }

  // Generates Summary HTML from data of todo which is returned by the summary getter
  generateSummary() {
    return (
      `<li>${this.text.length > 28 ? this.text.substring(0, 27) + "..." : this.text}</li>`
    );
  }

  // Refresh index
  set newIndex(index) {
    this.index = index;
  }

  // Toggles todo's completed state
  toggleCompleted() {
    this.completed = !this.completed;
  }

  // Toggles todo's prioritised state
  togglePrioritised() {
    this.prioritised = !this.prioritised;
  }
}

export default Todo;
