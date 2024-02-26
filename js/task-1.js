const categories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2");
  const categoryItem = category.querySelectorAll("ul li");
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Number of items: ${categoryItem.length}`);
});
