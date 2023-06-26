let score = JSON.parse(localStorage.getItem('score')) ||{
  win:0,
  lose:0,
  tie:0
};

updateScore();
let move=computerMove();
let x;
let y;
let results='';
function computerMove()
{
  const x=Math.random();
  let y='';
  if(x>=0 && x<1/3)
  {
      y='Rock';
  }
  else if(x>=1/3 && x<2/3)
  {
      y='Paper';
  }
  else{
      y='Scissors';
  }
  console.log(y);
  return y;
}

function playGame(playerMove)
{
  
  move=computerMove();
  if(playerMove === 'Rock')
  {
    if(move === 'Rock' )
    {
      results='Tie.'
    }
    else if(move === 'Paper')
    {
      results='You lose.'
    }
    else{
      results='You win.'
    }
  }
  else if(playerMove==='Paper')
  {
    if(move==='Rock')
    {
      results='You win.'
    }
    else if(move==='Paper')
    {
      results='Tie.'
    }
    else{
      results='You lose.'
    } 
  }
  else{
    if(move==='Rock')
    {
      results='You lose.'
    }
    else if(move==='Paper')
    {
      results='You win.'
    }
    else{
      results='Tie.'
    }
  }
  if(results==='Tie.'){
    score.win++;
  }
  else if(results==='You lose.')
    {
       score.lose++;
    }
  else{
      score.tie++;
    }
  localStorage.setItem('score' , JSON.stringify(score));
  document.querySelector('.js-result').innerHTML=results;
  
  document.querySelector('.js-moves').innerHTML=`You <img class="moves-img" src="${playerMove}.png"> <img class="moves-img" src="${move}.png"> Computer`;

  updateScore();
  
} 
function updateScore(){
  document.querySelector('.js-score').innerHTML=`Wins: ${score.win}, Losses: ${score.lose}, Tie: ${score.tie}`;
}      
function reset(){
  score.win=0;
  score.lose=0;
  score.tie=0;
  localStorage.removeItem('score');
  updateScore();
  document.querySelector('.js-moves').innerHTML='';
  document.querySelector('.js-result').innerHTML='';


}
let myAutoPlay;
function autoPlay()
{
  let auto=document.querySelector('.autoPlay-button').innerHTML;
  
  
  if(auto==='Auto Play')
  {
    myAutoPlay=setInterval(function (){
      let playerMove=computerMove();
      playGame(playerMove);
    },1000)
    document.querySelector('.autoPlay-button').innerHTML='Stop Play'
  }
  else{
    
    clearInterval(myAutoPlay);
    document.querySelector('.autoPlay-button').innerHTML='Auto Play';
  }
}