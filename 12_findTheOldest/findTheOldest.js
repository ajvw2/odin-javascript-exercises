const findTheOldest = function(people) {
    const oldestToYoungest = people.sort((a, b) => {
        const lastYearSeenAliveA = ("yearOfDeath" in a) ? a.yearOfDeath : new Date().getFullYear();
        const lastYearSeenAliveB = ("yearOfDeath" in b) ? b.yearOfDeath : new Date().getFullYear();
        const ageA = lastYearSeenAliveA - a.yearOfBirth;
        const ageB = lastYearSeenAliveB - b.yearOfBirth;

        if (ageA > ageB) {
            return -1;
        } else {
            return 1;
        }
    });

    return oldestToYoungest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
