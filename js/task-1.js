const ilosc = categories.querySelectorAll(".item");
// console.log(ilosc);
console.log("number of categories:", ilosc.length);

ilosc.forEach((category) => {
  const header = category.querySelector("h2").textContent;
  const itemAmount = category.querySelectorAll(
    ".categories-list .items-in"
  ).length;
  console.log("Category:", header);
  console.log("Items:", itemAmount);
});
