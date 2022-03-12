// Code your solution in this file!
const returnFirstTwoDrivers =  (x) => x.slice(0, 2);

const returnLastTwoDrivers =  (x) => x.slice(-2);

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
];

function createFareMultiplier(fareMultiplier) {
    return function(fare) {
        return fare*fareMultiplier};
}

const fareDoubler = fare => fare*2;
const fareTripler = fare => fare * 3;
const fareQuadraples = fare => fare * 4;
const fareQuintupler = fare => fare * 5;


const selectDifferentDrivers = (drivers, fn) => {
    return fn(drivers);
}