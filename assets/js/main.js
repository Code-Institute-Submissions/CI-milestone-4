import Category from "./category.js";
import Todo from "./todo.js";

// Create example content
let exampleCategory = new Category("This is a category");
exampleCategory.addTodo("This is a prioritised todo");
exampleCategory.todos[0].togglePrioritised();
exampleCategory.addTodo("This is a todo");
exampleCategory.addTodo("This is a completed todo");
exampleCategory.todos[2].toggleCompleted();

window.ToDoApp = {
  categories: [
    exampleCategory
  ]
}

if (window.localStorage.getItem("ToDoApp") !== null ) {
  ToDoApp = load(JSON.parse(window.localStorage.getItem("ToDoApp")));
}

redraw();

// Used to allow the scroll wheel to scroll horizontally
document.addEventListener("wheel", function(evt) {
    evt.preventDefault();
    document.documentElement.scrollLeft += evt.deltaY;
});

// When a category title is input the input is cleared and a new category with that title is added to the apps list of categories, the app then redraws
$("#category-input").on("keyup", function(evt)  {
  if (evt.key === "Enter") {
    let input = $(this).val().trim();
    $(this).val("");
    // If category input is greater than 30 characters replace placeholder with error message
    if (input.length > 30) {
      $(this).attr("placeholder", "Must be under 30 characters");
    } else if (input.length === 0) {
      $(this).attr("placeholder", "Must contain < 1 character");
    } else {
      $(this).attr("placeholder", "Input Category Heading");
      let newCategory = new Category(input);
      ToDoApp.categories.push(newCategory);
      redraw();
    }
  }
});

// Use this type of listener to allow dynamic HTML
$(document).on("click", ".category-delete", function() {
  // Use confirm dialog to confirm deletion
  if (confirm("Are you sure you want to delete this category?")) {
    ToDoApp.categories.splice($(this).parents(".category").data("category-index"), 1);
    redraw();
  }
});

$(document).on("keyup", ".todo-input", function(evt) {
  if (evt.key === "Enter") {
    let input = $(this).val().trim();
    $(this).val("");
    if (input.length === 0) {
      $(this).attr("placeholder", "Must contain > 1 character");
    } else {
      $(this).attr("placeholder", "Input todo");
      ToDoApp.categories[$(this).parents(".category").data("category-index")].addTodo(input);
      redraw();
    }
  }
});

// Uses helper functions in Todo class to toggle associated state
$(document).on("click", ".todo-completed", function() {
  let todo = $(this).parent();
  ToDoApp.categories[todo.parent().data("category-index")].todos[todo.data("index")].toggleCompleted();
  redraw();
});

$(document).on("click", ".todo-prioritised", function() {
  let todo = $(this).parent();
  ToDoApp.categories[todo.parent().data("category-index")].todos[todo.data("index")].togglePrioritised();
  redraw();
});

$(document).on("click", ".todo-delete", function() {
  if (confirm("Are you sure you want to delete this todo?")) {
    let todo = $(this).parent();
    ToDoApp.categories[todo.parent().data("category-index")].deleteTodo(todo.data("index"));
    redraw();
  }
});

// Saves data to localstorage for access later
function save() {
  window.localStorage.setItem("ToDoApp", JSON.stringify(window.ToDoApp));
}

// Helps parse the JSON to reassign classes
function load(data) {
  let loadedData = { categories: []};
  for (let category of data.categories) {
    let newCategory = new Category(category.title, category.index);
    for (let todo of category.todos) {
      newCategory.todos.push(new Todo(todo.text, todo.index, todo.completed, todo.prioritised));
    }
    loadedData.categories.push(newCategory);
  }
  return loadedData;
}

// Redraws dynamic part of app to prevent dead html and refreshes index binding of categories and their todos
function redraw() {
  save();
  $("#category-container").empty();
  // Using the entries() call to access both the value and its index in the array
  for (let [index, category] of ToDoApp.categories.entries()) {
    category.newIndex = index;
    category.refreshTodos();
    $("#category-container").append(category.html);
    // Sets width of each progress bar to percentage of that categories completed todos
    $(`.${index}-progress`).css("width", category.completedTodos / category.todos.length * 100 + "%")
  }

  // Sets width of .total-progress to the percentage of todos complete (completed todos / total todos * 100)
  $(".total-progress").animate({width: ToDoApp.categories.reduce(((sum, category) => sum += category.completedTodos), 0) / ToDoApp.categories.reduce(((sum, category) => sum += category.todos.length), 0) * 100 + "%"});
}

fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((data) => {
    let randomQuote = data[Math.floor(Math.random()*data.length)];
    if (randomQuote.author) {
      $("#quote").children("p").text(`"${randomQuote.text}"\n- ${randomQuote.author}`)
    } else {
      $("#quote").children("p").text(`"${randomQuote.text}"`);
    }
  });