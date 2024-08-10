let inputBx = document.querySelector("#inputBx");
let list = document.querySelector("#list");
let output = document.querySelector("#output");
inputBx.addEventListener("keyup", function (event) {
  let input = inputBx.value;
  if (input != "" && event.key == "Enter") {
    addItem(this.value);
    this.value = "";
  } else {
    if (input === "") {
      output.innerHTML = "**write something**";
      setTimeout(() => {
        output.innerHTML = "";
      }, 1000);
    }
  }
});
let addItem = (inputBx) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${inputBx}<i></i>`;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });
  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });

  list.appendChild(listItem);
};
