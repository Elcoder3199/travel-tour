// ----------- about us section --------

let loadMore = document.querySelector(".package-show .load-more"),
  currentItem = 3;

loadMore.addEventListener("click", (e) => {
  e.preventDefault();
  let boxes = [...document.querySelectorAll(".packages .box-container .box")];
  for (let i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem += 3;
  if (currentItem >= boxes.length) {
    loadMore.style.display = "none";
  }
})