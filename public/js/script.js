document.querySelectorAll(".book").forEach(book => {
  book.addEventListener("click", () => {
    const link = book.getAttribute("data-link");
    if (link) window.location.href = link;
  });
});