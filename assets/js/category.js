import Todo from "./todo.js";

class Category {
  constructor(title) {
    this.title = title;
    this.index = 0;
    this.todos = [];
  }
  
  get html() {
    return this.generateHTML();
  }
  
  generateHTML() {
    // The map call adds all child todos html
    return `<div class="category" data-category-index=${this.index}>
              <div class="category-heading">
                <h2>${this.title}</h2>
                <div class="progress-container">
                  <div class="progress ${this.index}-progress"></div>
                </div>
              </div>
              <div class="todo form"><input type="text" name="todo-input" id=${"todo-input-" + this.index} class="todo-input" placeholder="Input todo"></div>
              ${
                // Create copy of todo array to prevent sort mutating original array then sort by priority followed by completion
                [...this.todos]
                  .sort((a, b) => b.prioritised - a.prioritised)
                  .sort((a, b) => a.completed - b.completed)
                  .map(todo => todo.html)
                  .join("\n")
              }
            </div>`
  }

  set newIndex(index) {
    this.index = index;
  }

  refreshTodos() {
    // The combination of a destructured assignment and an entries() call to access element and its index
    for (let [index, todo] of this.todos.entries()) {
      // Send an array to set both the todo's categoryiIndex and index
      todo.newIndices = [this.index, index];
    }
  }

  addTodo(todo) {
    this.todos.push(new Todo(todo));
  }
}

export default Category;