
var scores, activePlayer, roundScore, gamePlay, previousDice;
init();
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlay) {
    var dice = Math.floor(Math.random()* 6 )+1;
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
        if (previousDice === dice && dice === 6)
            {
                scores[activePlayer] = 0;
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                nextPlayer();
            }else if (dice !== 1)
        {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else {
            nextPlayer();
        }
        previousDice = dice;
    }   
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlay) {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    if (scores[activePlayer] >= 100 ) {
        document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.player-'+ activePlayer+ '-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer+ '-panel').classList.remove('active');  
        gamePlay = false;
    }else{
        nextPlayer();   
    }
    }
});
document.querySelector('.btn-new').addEventListener('click',init );

function nextPlayer(){     
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('#current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none'
}
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');     
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    gamePlay =true;
}
