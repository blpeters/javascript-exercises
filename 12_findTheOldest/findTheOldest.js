const findTheOldest = function (people) {
  //Check for year of death. If none, use current year.
  for (let person in people) {
    if (!people[person]["yearOfDeath"]) {
      let currentYear = new Date().getFullYear();
      people[person]["yearOfDeath"] = `${currentYear}`;
    }
  }

  //Used sort, but a better way would be to use reduce to systematically step through comparing each age, and carrying through the oldest.
  const peopleSortedByAge = people.sort((a, b) =>
    a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? 1 : -1
  );
  return peopleSortedByAge[peopleSortedByAge.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
