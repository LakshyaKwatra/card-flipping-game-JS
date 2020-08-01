document.addEventListener('DOMContentLoaded', () => {
  
  const imgData = [
    {
      name: 'bd1',
      img: 'images/bd1.png'
    },
    {
      name: 'bd2',
      img: 'images/bd2.png'
    },
    {
      name: 'bd3',
      img: 'images/bd3.png'
    },
    {
      name: 'bd4',
      img: 'images/bd4.png'
    },
    {
      name: 'bd5',
      img: 'images/bd5.png'
    },
    {
      name: 'bd6',
      img: 'images/bd6.png'
    },
    {
      name: 'bd7',
      img: 'images/bd7.png'
    },
    {
      name: 'bd8',
      img: 'images/bd8.png'
    },
    {
      name: 'bd9',
      img: 'images/bd9.png'
    },
    {
      name: 'bd10',
      img: 'images/bd10.png'
    },
    {
      name: 'bd11',
      img: 'images/bd11.png'
    },
    {
      name: 'bd12',
      img: 'images/bd12.png'
    },
    {
      name: 'bd13',
      img: 'images/bd13.png'
    },
    {
      name: 'bd14',
      img: 'images/bd14.png'
    },
    {
      name: 'bd15',
      img: 'images/bd15.png'
    },
    {
      name: 'bd16',
      img: 'images/bd16.png'
    },
    {
      name: 'bd17',
      img: 'images/bd17.png'
    },
    {
      name: 'bd18',
      img: 'images/bd18.png'
    },
    {
      name: 'bd19',
      img: 'images/bd19.png'
    },
    {
      name: 'bd20',
      img: 'images/bd20.png'
    },
    {
      name: 'bd21',
      img: 'images/bd21.png'
    },
    {
      name: 'bd22',
      img: 'images/bd22.png'
    },
    {
      name: 'bd23',
      img: 'images/bd23.png'
    },
    {
      name: 'bd24',
      img: 'images/bd24.png'
    },
    {
      name: 'bd25',
      img: 'images/bd25.png'
    },
    {
      name: 'bd26',
      img: 'images/bd26.png'
    },
    {
      name: 'bd27',
      img: 'images/bd27.png'
    },
    {
      name: 'bd28',
      img: 'images/bd28.png'
    },
    {
      name: 'bd29',
      img: 'images/bd29.png'
    },
    {
      name: 'bd30',
      img: 'images/bd30.png'
    },
    {
      name: 'bd31',
      img: 'images/bd31.png'
    },
    {
      name: 'bd32',
      img: 'images/bd32.png'
    },
    {
      name: 'bd33',
      img: 'images/bd33.png'
    },
    {
      name: 'bd34',
      img: 'images/bd34.png'
    },
    {
      name: 'bd35',
      img: 'images/bd35.png'
    },
    {
      name: 'bd36',
      img: 'images/bd36.png'
    },
    {
      name: 'bd37',
      img: 'images/bd37.png'
    },
    {
      name: 'bd38',
      img: 'images/bd38.png'
    },
    {
      name: 'bd39',
      img: 'images/bd39.png'
    },
    {
      name: 'bd40',
      img: 'images/bd40.png'
    },
    {
      name: 'bd41',
      img: 'images/bd41.png'
    },
    {
      name: 'bd42',
      img: 'images/bd42.png'
    },
    {
      name: 'bd43',
      img: 'images/bd43.png'
    },
    {
      name: 'bd44',
      img: 'images/bd44.png'
    },
    {
      name: 'bd45',
      img: 'images/bd45.png'
    },
    {
      name: 'bd46',
      img: 'images/bd46.png'
    },
    {
      name: 'bd47',
      img: 'images/bd47.png'
    },
    {
      name: 'bd48',
      img: 'images/bd48.png'
    },
    {
      name: 'bd49',
      img: 'images/bd49.png'
    },
    {
      name: 'bd50',
      img: 'images/bd50.png'
    },
    {
      name: 'bd51',
      img: 'images/bd51.png'
    },
    {
      name: 'bd52',
      img: 'images/bd52.png'
    },
    {
      name: 'bd53',
      img: 'images/bd53.png'
    },
    {
      name: 'bd54',
      img: 'images/bd54.png'
    },
    {
      name: 'bd55',
      img: 'images/bd55.png'
    },
    {
      name: 'bd56',
      img: 'images/bd56.png'
    },
    {
      name: 'bd57',
      img: 'images/bd57.png'
    },
    {
      name: 'bd58',
      img: 'images/bd58.png'
    },
    {
      name: 'bd59',
      img: 'images/bd59.png'
    },
    {
      name: 'bd60',
      img: 'images/bd60.png'
    },
    {
      name: 'bd61',
      img: 'images/bd61.png'
    },
    {
      name: 'bd62',
      img: 'images/bd62.png'
    },
    {
      name: 'bd63',
      img: 'images/bd63.png'
    },
    {
      name: 'bd64',
      img: 'images/bd64.png'
    },
    {
      name: 'bd65',
      img: 'images/bd65.png'
    },
    {
      name: 'bd66',
      img: 'images/bd66.png'
    },
    {
      name: 'bd67',
      img: 'images/bd67.png'
    },
    {
      name: 'bd68',
      img: 'images/bd68.png'
    },
    {
      name: 'bd69',
      img: 'images/bd69.png'
    },
    {
      name: 'bd70',
      img: 'images/bd70.png'
    },
    {
      name: 'bd71',
      img: 'images/bd71.png'
    }
  ]
  var cardArray = []
  let hasFlippedCard = false;
  let firstCard, secondCard;
  let totalMatches = 0;
  let lockboard = false;

  
  const grid = document.querySelector('.memory-game')
  // <div class="memory-card">
  //     <img src="images/bd1.png" alt="" class="front-face">
  //     <img src="images/cheeseburger.png" alt="" class="back-face">
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
      backFace.setAttribute('src','images/cardpattern.png')
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
    var cards = document.querySelectorAll('.memory-card')
    setTimeout(() => {
      cards.forEach(element => {
        element.parentNode.removeChild(element);
      });
      createBoard();
    },2000)
  }

  // function flipCard(){
  //   var cardImg = this.getAttribute('src')
  //   if(cardImg === 'images/blank.png'){
  //     console.log(Math.random())
  //     var cardId = this.getAttribute('data-id')
  //     cardsChosen.push(cardArray[cardId].name)
  //     cardsChosenId.push(cardId)
  //     this.setAttribute('src',cardArray[cardId].img)
  //     if (cardsChosen.length === 2){
  //       setTimeout(checkForMatch, 500)
  //     }
  //   }
  // }
  


  createBoard()
})