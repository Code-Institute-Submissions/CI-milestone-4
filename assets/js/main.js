import Category from "./category.js";
import Todo from "./todo.js";

window.ToDoApp = {
  categories: []
};

document.addEventListener("wheel", function(evt) {
    evt.preventDefault();
    document.documentElement.scrollLeft += evt.deltaY;
});

$("#category-input").on("keyup", function(evt)  {
  if (evt.key === "Enter") {
    let newCategory = new Category(ToDoApp.categories.length, $(this).val());
    $(this).val("");
    ToDoApp.categories.push(newCategory);
    $(".category-form").before(newCategory.html);
    console.log($(".category").position());
    $(".category").position().top = 0;
    console.log($(".category").position());
  }
});

// Use this type of listener to allow dynamic HTML
$(document).on("keyup", ".todo-input", function(evt) {
  if (evt.key === "Enter") {
    ToDoApp.categories[$(this).parents(".category").data("category-index")].addTodo($(this).val());
    $(this).val("");
  }
});

$(document).on("click", ".todo-completed", function(evt) {
  let todo = $(this).parent();
  ToDoApp.categories[todo.data("categoryIndex")].todos[todo.data("index")].completed = !ToDoApp.categories[todo.data("categoryIndex")].todos[todo.data("index")].completed;
});

$(document).on("click", ".todo-prioritised", function(evt) {
  let todo = $(this).parent();
  ToDoApp.categories[todo.data("categoryIndex")].todos[todo.data("index")].prioritised = !ToDoApp.categories[todo.data("categoryIndex")].todos[todo.data("index")].prioritised;
});

fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((data) => {
    let randomQuote = data[Math.floor(Math.random()*data.length)];
    $("#quote").children("p").text(`"${randomQuote.text}"\n- ${randomQuote.author}`)
  });