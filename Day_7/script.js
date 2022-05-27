const people = [
  { firstName: "Godwin", otherName: "Martins", year: 1993 },
  { firstName: "Godwin", otherName: "Philit", year: 1997 },
  { firstName: "Godwin", otherName: "Kenneth", year: 2001 },
  { firstName: "Godwin", otherName: "Destiny", year: 2004 },
];

const isAdult = people.some(function (person, index) {
  const currentYear = new Date().getFullYear();
  console.log(currentYear + index);
  return currentYear - person.year > 18;
});

console.log(isAdult);

const areAdults = people.every(function (person, index, array) {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year > 17;
});

console.log(areAdults);

const who = people.find(function (person, index, Array) {
  const currentDate = new Date().getFullYear();

  return currentDate - person.year === 25;
});

console.log(who);
