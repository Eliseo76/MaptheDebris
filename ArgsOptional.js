function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    let answer = [];
    for(let i = 0; i<arr.length; i++){

        let a3 = Math.pow(arr[i].avgAlt + earthRadius,3);
        let math1 = a3 / GM;
        let orbitalPeriod =  2* Math.PI * Math.sqrt(math1);
        answer.push({name:arr[i].name, orbitalPeriod: Math.round(orbitalPeriod)});
        console.log(answer);

    }
    return answer
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);