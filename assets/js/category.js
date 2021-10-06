import Todo from "./todo.js";

class Category {
  // Constructor using default values to allow both easier and more controlled construction
  constructor(title, index = 0, todos = []) {
    this.title = title;
    this.index = index;
    this.todos = todos;
  }
  
  get html() {
    return this.generateHTML();
  }
  
  generateHTML() {
    // The map call adds all child todos html
    return `<div class="category" data-category-index=${this.index}>
              <div class="category-heading">
                <h2>${this.title}</h2>
                <button class="category-delete" title="Delete Category"><i class="fas fa-trash-alt"></i></button>
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

  // Helper function that returns number of completed todos
  get completedTodos() {
    return this.todos.reduce(((sum, todo) => sum += todo.completed), 0);
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

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }
}

export default Category;