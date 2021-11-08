document.addEventListener("DOMContentLoaded", () => {
  const colors = [
    "navy",
    "aqua",
    "teal",
    "green",
    "lime",
    "yellow",
    "orange",
    "maroon",
    "fuchsia",
    "purple",
  ];
  const $btn = document.querySelector("button");
  const body = document.querySelector("body");
  const $select = document.querySelector("select");

  $btn.addEventListener("click", (e) => {
  	const colorIndex = parseInt(colors.length * Math.random());
  	body.style.backgroundColor = colors[colorIndex];
  });

  $select.addEventListener("input", (e) => {
  	body.classList.remove("navy", "teal", "purple");
  	body.classList.add(e.target.value);
  });



  });

