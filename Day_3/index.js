const inputs = document.querySelectorAll(" input");
const docRoot = document.querySelector(":root");

// console.log(inputs);

inputs.forEach((input) => input.addEventListener("change", handleChange));
inputs.forEach((input) => input.addEventListener("mousemove", handleChange));

function handleChange() {
  prefix = this.dataset.sizing || "";

  // document.documentElement.style.setProperty(
  //   `--${this.name}`,
  //   this.value + prefix
  // );

  docRoot.style.setProperty(`--${this.name}`, this.value + prefix);

  console.log(docRoot);
}
