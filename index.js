function distanceFromHqInBlocks(street) {
    return Math.abs(42 - street);
}

function distanceFromHqInFeet(street) {
    return Math.abs(42 - street) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let distanceTravelledInFeet = Math.abs(start - destination) * 264;
    
    if (distanceTravelledInFeet < 400) {
        return 0
    }
    else if (distanceTravelledInFeet >= 400 && distanceTravelledInFeet <= 2000) {
        return (distanceTravelledInFeet - 400) * 0.02
    }
    else if(distanceTravelledInFeet > 2000 && distanceTravelledInFeet <= 2500) {
        return 25
    }
    else if (distanceTravelledInFeet > 2500 || undefined) {
        return 'cannot travel that far'
    }
}