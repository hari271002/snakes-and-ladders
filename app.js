// snake and ladder game



const ladders={
    10:20,
    15:23,
    19:29,
    31:96,
    42:80,
    52:89,
    63:73,
    79:91
};

const snakes={
    17:2,
    25:18,
    39:19,
    60:34,
    72:62,
    96:40
};


const die=()=> Math.floor(Math.random()*6)+1 ;

console.log("Welcome to the snake and ladder game");
let userOne=0;
let userTwo=0;
while(true){
    let currDie=die();
    console.log("player 1 choice");
    console.log(`The die rolled as ${currDie}`);
    userOne+=currDie;
    if(userOne>100){
        userOne-=currDie;
    }
    if(userOne===100){
        console.log('Congrats Player 1 you have won');
        break;
    }
    if(userOne in ladders){
        console.log('You got an ladder :) ');
        userOne=ladders[userOne];
    }
    if(userOne in snakes){
        console.log('Sorry you got bite by a snake');
        userOne=snakes[userOne];
    }
    console.log(`player1 is now placed at ${userOne}`);

        
    //player 2 chance
    console.log('------------------------------------------')
    currDie=die();
    console.log("player 2 choice");
    console.log(`The die rolled as ${currDie}`);
    userTwo+=currDie
    if(userTwo>100){
        userTwo-=currDie;
    }
    
    if(userTwo===100){
        console.log('Congrats Player 2 you have won');
        break;
    }
    if(userTwo in ladders){
        console.log('You got an ladder :) ');
        userOne=ladders[userTwo];
    }
    if(userTwo in snakes){
        console.log('Sorry you got bite an snake');
        userOne=snakes[userTwo];
    }
    console.log(`player2 is now placed at ${userTwo}`);
    console.log('------------------------------------------')
}   