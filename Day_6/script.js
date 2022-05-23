const input = document.querySelector(`input[type="search"]`),
  output = document.querySelector(".output");

const endPoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];

fetch(endPoint)
  .then((blob) => blob.json())
  .then((data) => (cities = data));

function getMatches(cities, textToSearch) {
  return cities.filter((place) => {
    regex = new RegExp(textToSearch, "gi");

    return place.city.match(regex) || place.state.match(regex);
  });
}

input.addEventListener("change", displayResultToUI);
input.addEventListener("keyup", displayResultToUI);

function displayResultToUI() {
  const textToSearch = this.value;
  const outputted = getMatches(cities, textToSearch);

  const HTMLToDisplay = outputted
    .map((place) => {
      regex = RegExp(textToSearch, "gi");

      const cityName = place.city.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      );

      const stateName = place.state.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      );

      const commaSeperated = place.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      return `<li class='output-item'> <span class='name'>${cityName}, ${stateName}</span>
    <span class='population'>${commaSeperated}</span>
    </li>`;
    })
    .join("");

  if (textToSearch === "") {
    output.innerHTML = "";
  } else {
    output.innerHTML = HTMLToDisplay;
  }
}
