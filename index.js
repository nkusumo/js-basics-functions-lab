// Code your solution in this file!
function distanceFromHqInBlocks (pickupLocation) {
    return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet (pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet (starting, ending) {
    return Math.abs(starting - ending) * 264;
}

function calculatesFarePrice (starting, ending) {
    let distance = distanceTravelledInFeet (starting, ending);
    if (distance < 400) {
        return 0;
    } else if (distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}