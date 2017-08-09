function jediName(firstName, lastName){
  console.log ((lastName.slice(0,3)+firstName.slice(0,2)));
}

function beyond(num){
  switch (true){
        case(num===0):
            return ('Staying home');
            break;

        case(isFinite(num) && num>0):        
            return ('To infinity');
            break;

        case(isFinite(num) && num<0):
            return ('To negative infinity');    
            break;

        case(!isFinite(num)):
            return ('And beyond');
            break;

        default:
            return ('NaN');
            break;
    }
}

function decode(string){
    let result = [];
    let code = string.split(' ');
    
    code.forEach((word)=>{
        if (word[0]==='a'){
            result.push(word[1]);
        } else if (word[0]==='b'){
            result.push(word[2]);
        } else if (word[0]==='c'){
            result.push(word[3]);
        } else if (word[0]==='d'){
            result.push(word[4]);
        } else {
            result.push(' ');
        }
    });
    return result.join('');
}

function daysInMonth(month){
    switch (true){
        case month==='January'||month==='March'||month==='May'||month==='July'||month==='August'||month==='October'||month==='December':
        return `${month} has 31 days`;
        break;

        case month==='Februay':
        return `February has 28 days`;
        break;

        case month==='April'||month==='June'||month==='September'||month==='November':
        return `${month} has 30 days`;
        break;

        default:
        return `${month} is not a valid month`;
        break;
    }
}

function RockPaperScissors(userChoice){
    var computer = 1 + Math.floor((Math.random()*3));

    switch(true){
        case computer===userChoice:
        return `Tie`;
        break;

        case computer>userChoice:
        return `Computer wins`;
        break;

        case computer<userChoice:
        return `Player wins`;
        break;

        defaul:
        return `Invalid entry, choose 1, 2, or 3`;
        break;
    }
}

RockPaperScissors(2);



console.log(jediName('Matthew','Lee'));

console.log(beyond(0));
console.log(beyond(10));
console.log(beyond(-10));
console.log(beyond(Infinity))

console.log(decode('craft block argon meter bells brown croon droop'));

console.log(daysInMonth('October'));
console.log(daysInMonth('Februay'));
console.log(daysInMonth('November'));
console.log(daysInMonth('julyish'));

console.log(RockPaperScissors(2));
console.log(RockPaperScissors(1));
console.log(RockPaperScissors(3));