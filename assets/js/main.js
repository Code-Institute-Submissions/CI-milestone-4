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

// If there is a previous data in localStorage restore it
if (window.localStorage.getItem("ToDoApp") !== null ) {
  ToDoApp = load(JSON.parse(window.localStorage.getItem("ToDoApp")));
}

redraw();

// When a category title is input the input is cleared and a new category with that title is added to the apps list of categories, the app then redraws
$("#category-input").on("keyup", function(evt)  {
  if (evt.key === "Enter") {
    let input = $(this).val().trim();
    $(this).val("");
    // If category input is greater than 30 characters or less than 1 non whitespace character replace placeholder with error message
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

// An event listener on every category heading to allow editing
$(document).on("click", ".category-heading h2", function() {
  let category = ToDoApp.categories[$(this).parents(".category").data("category-index")];
  let editForm = `<input type="text" name="category-edit" class="category-edit" placeholder="Edit Category Heading" value="${category.title}">`;
  $(this).parent().children("button").hide();
  $(this).replaceWith(editForm);
});

// An event listener of each edit dialog
$(document).on("keyup", ".category-edit", function(evt) {
  if (evt.key === "Enter") {
    ToDoApp.categories[$(this).parents(".category").data("category-index")].title = $(this).val();
    redraw();
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
    } if (input.length > 240) {
      $(this).attr("placeholder", "Must contain < 240 characters");
    } else {
      $(this).attr("placeholder", "Input todo");
      ToDoApp.categories[$(this).parents(".category").data("category-index")].addTodo(input);
      redraw();
    }
  }
});

// If a todo is clicked and is not a .todo.form it is expanded
$(document).on("click", ".todo", function() {
  if (!$(this).hasClass("form")) {
    $(this).toggleClass("expanded");
  }
});

// Uses helper functions in Todo class to toggle associated state
$(document).on("click", ".todo-completed", function() {
  let todo = $(this).parent();
  ToDoApp.categories[todo.parents(".category").data("category-index")].todos[todo.data("index")].toggleCompleted();
  redraw();
});

$(document).on("click", ".todo-prioritised", function() {
  let todo = $(this).parent();
  ToDoApp.categories[todo.parents(".category").data("category-index")].todos[todo.data("index")].togglePrioritised();
  redraw();
});

$(document).on("click", ".todo-delete", function() {
  if (confirm("Are you sure you want to delete this todo?")) {
    let todo = $(this).parent();
    ToDoApp.categories[todo.parents(".category").data("category-index")].deleteTodo(todo.data("index"));
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
  $("#summary").empty();


  // Using the entries() call to access both the value and its index in the array
  for (let [index, category] of ToDoApp.categories.entries()) {
    category.newIndex = index;
    category.refreshTodos();
    $("#category-container").append(category.html);
    // Sets width of each progress bar to percentage of that categories completed todos
    $(`.${index}-progress`).css("width", category.completedTodos / category.todos.length * 100 + "%")
  }
  $("#summary").append(`<ul>${ToDoApp.categories.map(category => category.summary).join("\n")}</ul>`);

  // Sets width of .total-progress to the percentage of todos complete (completed todos / total todos * 100)
  $(".total-progress").animate({width: ToDoApp.categories.reduce(((sum, category) => sum += category.completedTodos), 0) / ToDoApp.categories.reduce(((sum, category) => sum += category.todos.length), 0) * 100 + "%"});
}

// Fetch a quote from a motivational quote API and select one at random
fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((data) => {
    let randomQuote = data[Math.floor(Math.random()*data.length)];
    // As some quotes don't have an author they get displayed differently
    if (randomQuote.author) {
      $("#quote").children("p").text(`"${randomQuote.text}"\n- ${randomQuote.author}`)
    } else {
      $("#quote").children("p").text(`"${randomQuote.text}"`);
    }
  });