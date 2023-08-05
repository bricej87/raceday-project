let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = false;
let runnerAge = 75;

if (runnerAge > 18 && earlyRegistration) {
    raceNumber += 1000;
}
console.log(raceNumber);

if (runnerAge > 18 && earlyRegistration) {
    console.log(`Hello runner ${raceNumber}, your race will begin at 9:30am.`);
}
else if (runnerAge > 18 && !earlyRegistration) {
    console.log(`Hello runner ${raceNumber}, your race will begin at 11:00am.`);
}
else if (runnerAge < 18) {
    console.log(`Hello runner ${raceNumber}, your race will begin at 12:30pm.`);
}
