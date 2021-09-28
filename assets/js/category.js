import Todo from "./todo.js";

class Category {
  constructor(index, title) {
    this.index = index;
    this.title = title;
    this.todos = [];
  }
  
  get html() {
    return this.generateHTML();
  }
  
  generateHTML() {
    return `<div class="category" data-category-index=${this.index}>
              <div class="category-heading">
                <h2>${this.title}</h2>
                <div class="progress-container">
                  <div class="progress ${this.index}-progress"></div>
                </div>
              </div>
              <div class="todo form"><input type="text" name="todo-input" id=${"todo-input-" + this.index} class="todo-input" placeholder="Input todo"></div>
            </div>`
  }

  addTodo(todo) {
    // TODO: Improve indices binding (goes for Categories too)
    let newTodo = new Todo(this.index, this.todos.length, todo);
    this.todos.push(newTodo);
    $(`.category[data-category-index=${this.index}]`).children(".todo.form").after(newTodo.html);
  }
}

export default Category;