const inputs = document.querySelectorAll(".controls input");
const docRoot = document.querySelector(":root");

// console.log(inputs);

inputs.forEach((input) => input.addEventListener("change", handleChange));
inputs.forEach((input) => input.addEventListener("mousemove", handleChange));

function handleChange() {
  prefix = this.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + prefix
  );
}

console.log(document.documentElement.style);
