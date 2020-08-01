//Lakshya Kwatra

document.addEventListener('DOMContentLoaded', () => {
  
  const imgData = [
    {
      name: 'bd1',
      img: 'images/bd1.jpg'
    },
    {
      name: 'bd2',
      img: 'images/bd2.jpg'
    },
    {
      name: 'bd3',
      img: 'images/bd3.jpg'
    },
    {
      name: 'bd4',
      img: 'images/bd4.jpg'
    },
    {
      name: 'bd5',
      img: 'images/bd5.jpg'
    },
    {
      name: 'bd6',
      img: 'images/bd6.jpg'
    },
    {
      name: 'bd7',
      img: 'images/bd7.jpg'
    },
    {
      name: 'bd8',
      img: 'images/bd8.jpg'
    },
    {
      name: 'bd9',
      img: 'images/bd9.jpg'
    },
    {
      name: 'bd10',
      img: 'images/bd10.jpg'
    },
    {
      name: 'bd11',
      img: 'images/bd11.jpg'
    },
    {
      name: 'bd12',
      img: 'images/bd12.jpg'
    },
    {
      name: 'bd13',
      img: 'images/bd13.jpg'
    },
    {
      name: 'bd14',
      img: 'images/bd14.jpg'
    },
    {
      name: 'bd15',
      img: 'images/bd15.jpg'
    },
    {
      name: 'bd16',
      img: 'images/bd16.jpg'
    },
    {
      name: 'bd17',
      img: 'images/bd17.jpg'
    },
    {
      name: 'bd18',
      img: 'images/bd18.jpg'
    },
    {
      name: 'bd19',
      img: 'images/bd19.jpg'
    },
    {
      name: 'bd20',
      img: 'images/bd20.jpg'
    },
    {
      name: 'bd21',
      img: 'images/bd21.jpg'
    },
    {
      name: 'bd22',
      img: 'images/bd22.jpg'
    },
    {
      name: 'bd23',
      img: 'images/bd23.jpg'
    },
    {
      name: 'bd24',
      img: 'images/bd24.jpg'
    },
    {
      name: 'bd25',
      img: 'images/bd25.jpg'
    },
    {
      name: 'bd26',
      img: 'images/bd26.jpg'
    },
    {
      name: 'bd27',
      img: 'images/bd27.jpg'
    },
    {
      name: 'bd28',
      img: 'images/bd28.jpg'
    },
    {
      name: 'bd29',
      img: 'images/bd29.jpg'
    },
    {
      name: 'bd30',
      img: 'images/bd30.jpg'
    },
    {
      name: 'bd31',
      img: 'images/bd31.jpg'
    },
    {
      name: 'bd32',
      img: 'images/bd32.jpg'
    },
    {
      name: 'bd33',
      img: 'images/bd33.jpg'
    },
    {
      name: 'bd34',
      img: 'images/bd34.jpg'
    },
    {
      name: 'bd35',
      img: 'images/bd35.jpg'
    },
    {
      name: 'bd36',
      img: 'images/bd36.jpg'
    },
    {
      name: 'bd37',
      img: 'images/bd37.jpg'
    },
    {
      name: 'bd38',
      img: 'images/bd38.jpg'
    },
    {
      name: 'bd39',
      img: 'images/bd39.jpg'
    },
    {
      name: 'bd40',
      img: 'images/bd40.jpg'
    },
    {
      name: 'bd41',
      img: 'images/bd41.jpg'
    },
    {
      name: 'bd42',
      img: 'images/bd42.jpg'
    },
    {
      name: 'bd43',
      img: 'images/bd43.jpg'
    },
    {
      name: 'bd44',
      img: 'images/bd44.jpg'
    },
    {
      name: 'bd45',
      img: 'images/bd45.jpg'
    },
    {
      name: 'bd46',
      img: 'images/bd46.jpg'
    },
    {
      name: 'bd47',
      img: 'images/bd47.jpg'
    },
    {
      name: 'bd48',
      img: 'images/bd48.jpg'
    },
    {
      name: 'bd49',
      img: 'images/bd49.jpg'
    },
    {
      name: 'bd50',
      img: 'images/bd50.jpg'
    },
    {
      name: 'bd51',
      img: 'images/bd51.jpg'
    },
    {
      name: 'bd52',
      img: 'images/bd52.jpg'
    },
    {
      name: 'bd53',
      img: 'images/bd53.jpg'
    },
    {
      name: 'bd54',
      img: 'images/bd54.jpg'
    },
    {
      name: 'bd55',
      img: 'images/bd55.jpg'
    },
    {
      name: 'bd56',
      img: 'images/bd56.jpg'
    },
    {
      name: 'bd57',
      img: 'images/bd57.jpg'
    },
    {
      name: 'bd58',
      img: 'images/bd58.jpg'
    },
    {
      name: 'bd59',
      img: 'images/bd59.jpg'
    },
    {
      name: 'bd60',
      img: 'images/bd60.jpg'
    },
    {
      name: 'bd61',
      img: 'images/bd61.jpg'
    },
    {
      name: 'bd62',
      img: 'images/bd62.jpg'
    },
    {
      name: 'bd63',
      img: 'images/bd63.jpg'
    },
    {
      name: 'bd64',
      img: 'images/bd64.jpg'
    },
    {
      name: 'bd65',
      img: 'images/bd65.jpg'
    },
    {
      name: 'bd66',
      img: 'images/bd66.jpg'
    },
    {
      name: 'bd67',
      img: 'images/bd67.jpg'
    },
    {
      name: 'bd68',
      img: 'images/bd68.jpg'
    },
    {
      name: 'bd69',
      img: 'images/bd69.jpg'
    },
    {
      name: 'bd70',
      img: 'images/bd70.jpg'
    },
    {
      name: 'bd71',
      img: 'images/bd71.jpg'
    }
  ]
  var cardArray = []
  let hasFlippedCard = false;
  let firstCard, secondCard;
  let totalMatches = 0;
  let lockboard = false;

  
  const grid = document.querySelector('.memory-game')
  
  // <div class="memory-card">
  //     <img src="images/bd1.jpg" alt="" class="front-face">
  //     <img src="images/cheeseburger.jpg" alt="" class="back-face">
  //   </div>
  function createBoard() {
    cardArray = []
    totalMatches = 0;
    hasFlippedCard = false;
    lockboard = false;
    firstCard = null;
    secondCard = null;

    imgData.sort(() => 0.5 - Math.random())
    for (let i = 0; i < 6; i++){
      cardArray.push(imgData[i])
      cardArray.push(imgData[i])
    }
    cardArray.sort(() => 0.5 - Math.random())

    for (let i = 0; i < cardArray.length; i++){
      var memoryCard = document.createElement('div')
      memoryCard.classList.add('memory-card')
      memoryCard.setAttribute('data-id',i)
      
      var frontFace = document.createElement('img')
      frontFace.setAttribute('src',cardArray[i].img)
      frontFace.classList.add('front-face')
      
      var backFace = document.createElement('img')
      backFace.setAttribute('src','images/cardpattern.jpg')
      backFace.classList.add('back-face')
      
      memoryCard.appendChild(frontFace)
      memoryCard.appendChild(backFace)

      memoryCard.addEventListener('click',flipCard)
      grid.appendChild(memoryCard)
    }
  }
  
  function flipCard(){
    if(lockboard) return;
    this.classList.add('flip');
    if(!hasFlippedCard){
      hasFlippedCard = true;
      firstCard = this;
      firstCard.removeEventListener('click', flipCard);
    } else{
      hasFlippedCard = false;
      secondCard = this;
      var firstCardId = firstCard.getAttribute('data-id');
      var secondCardId = secondCard.getAttribute('data-id');
      
      if(cardArray[firstCardId].name === cardArray[secondCardId].name){
        secondCard.removeEventListener('click', flipCard);
        totalMatches = totalMatches + 1;
        if(totalMatches === cardArray.length/2){
          restartGame();
        }
      } else{
        lockboard = true;
        setTimeout(() => {
          firstCard.addEventListener('click',flipCard);
          firstCard.classList.remove('flip')
          secondCard.classList.remove('flip')
          lockboard = false;
        },500)
      }
    }
  }

  function restartGame(){
    setTimeout(() => {
      onOverlay();
    },1000);
    var playAgainButton = document.querySelector('.play-again')
    playAgainButton.addEventListener('click',offOverlay);
    
  }


  function onOverlay() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function offOverlay() {
    document.getElementById("overlay").style.display = "none";
    var cards = document.querySelectorAll('.memory-card')
      cards.forEach(element => {
        element.parentNode.removeChild(element);
    });
    createBoard();
  }
  
  restartGame();
})