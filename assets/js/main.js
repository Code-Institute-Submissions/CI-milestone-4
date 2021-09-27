document.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    document.documentElement.scrollLeft += evt.deltaY;
});

fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((data) => {
    let randomQuote = data[Math.floor(Math.random()*data.length)];
    $("#quote").children("p").text(`"${randomQuote.text}"\n- ${randomQuote.author}`)
  });