const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1645, passed: 1727 },
  { first: "Galileo", last: "Galiliel", year: 1564, passed: 1642 },
  { first: "Maria", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1475, passed: 1545 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. filter the list of the inventors for those who were born in the 15000's
const fifties = inventors.filter((a) => a.year >= 1500 && a.year < 1600);
console.log("Array.Filter");
console.table(fifties);

// Array.prototype.map
// give us array of the inventors first and last name
const firstLast = inventors.map(
  (inventor) =>
    `First Name: ${inventor.first}, Last Name: ${inventor.last}, DOB: ${inventor.year}`
);
console.log(`Array.prototype.map()\n Hello`);
console.log(firstLast);

// Array.prototype.sort()
// sort the inventors by birthday, oldest to youngest
const ascending = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.log("Array.prototype.sort()");
console.log(ascending);

// console.log(inventorAges.sort((a, b) => (a > b ? 1 : -1)));

// Array.prototype.reduce()
// How many years did all the inventors live?

const initialValue = 0;
const totalYears = inventors.reduce((b, c) => {
  return b + (c.passed - c.year);
}, 0);

console.log("Array.prototype.reduce(TotalYears)");
console.log(totalYears);

console.log("Average Years live by Inventors");
const averageAge = inventors.reduce(function (total, next, index, array) {
  total += next.passed - next.year;

  if (index === array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
}, 0);

console.log(averageAge);

console.log(
  "Create another array for the age of each inventor adding preceding arrays"
);

const arrayAge = inventors.reduce(function (total, next, index, aray) {
  total.push(next.passed - next.year);
  return total;
}, []);

arrayAge.sort();
console.log(arrayAge);

// Sort Excercise
// Sort the people alphabetically by last name

const alphaSort = people.sort(function (lastOne, nextOne) {
  const [lastOneLast, LastOneFirst] = lastOne.split(", ");
  const [nextOneLast, nextOneFirst] = nextOne.split(", ");
  return lastOneLast > nextOneLast ? 1 : -1;
});

console.log(alphaSort);

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const trspMode = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(trspMode);
