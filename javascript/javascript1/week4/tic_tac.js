//Tic Tac Toe

function getRenderedGame(position){
    const renderedGame=[];
    for(let i=0; i<position.length; i++){
        const star='*'+position[i].join('*')+'*';// applying join method
        renderedGame.push(star);
      
    } 
    return '*******\n'+renderedGame.join('\n')+'\n*******';
    }
// console with example
    const position=[
        ['x', 'o', ' '],
        [' ', 'o', ' '],
        [' ', 'o', 'x']
    ];
console.log(getRenderedGame(position));
 

//Determining a winner
function getGameinfo(position){
    const gameInfo={};
    for(let i=0; i<position.length; i++){
        for(let j=0; j<position[i].length; j++){
            if((position[0][0]==="x" && position[1][0]==="x" && position[2][0]==="x") ||
             (position[0][1]==="x" && position[1][1]==="x" && position[2][1]==="x") ||
             (position[0][2]==="x" && position[1][2]==="x" && position[2][2]==="x") ||
            (position[0][0]==="x" && position[1][1]==="x" && position[2][2]==="x")){
                gameInfo.winner="x";
                gameInfo.loser="o";
                gameInfo.hasEnded=true;
            }else if((position[0][0]==="o" && position[1][0]==="o" && position[2][0]==="o") ||
            (position[0][1]==="o" && position[1][1]==="o" && position[2][1]==="o") ||
            (position[0][2]==="o" && position[1][2]==="o" && position[2][2]==="o") ||
           (position[0][0]==="o" && position[1][1]==="o" && position[2][2]==="o")){
                gameInfo.winner="o";
                gameInfo.loser="x";
                gameInfo.hasEnded=true;
            }else{
                gameInfo.winner=undefined;
                gameInfo.loser=undefined;
                gameInfo.hasEnded=false;
            }
        }
    }
    return  gameInfo;
}
console.log(getGameinfo(position));