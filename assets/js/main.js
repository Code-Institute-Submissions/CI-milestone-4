document.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    document.documentElement.scrollLeft += evt.deltaY;
});