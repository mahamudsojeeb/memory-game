document.addEventListener('DOMContentLoaded',()=>{
    const cardArray=[
        {
            name: 'img11',
            img:  'img11.jpg'
        },
        {
            name: 'img11',
            img: 'img11.jpg'
        },
        {
            name: 'img22',
            img:'img22.jpg'
        },
        {
            name: 'img22',
            img:'img22.jpg'
        },
        {
            name: 'img33',
            img: 'img33.jpg'
        },
        {
            name: 'img33',
            img: 'img33.jpg'
        },
        {
            name: 'img44',
            img:  'img44.jpg'
        },
        {
            name: 'img44',
            img: 'img44.jpg'
        },
        {
            name: 'img55',
            img:'img55.jpg'
        },
        {
            name: 'img55',
            img:'img55.jpg'
        },
        {
            name: 'img66',
            img: 'img66.jpg'
        },
        {
            name: 'img66',
            img: 'img66.jpg'
        }
        

    ]

cardArray.sort(()=> 0.5-Math.random());

 const grid=document.querySelector(".grid");
 const resultDisplay=document.querySelector('#result');

 let cardsChosen=[];
 let cardsChosenId=[];
 let cardsWon = [];
 function createBoard(){
     for (let i=0;i<cardArray.length;i++){
         const card=document.createElement('img');
         card.setAttribute('src','img77 .jpg');
         card.setAttribute('data-id',i);
         card.addEventListener('click',flipCard);
         grid.appendChild(card);


     }

 }
 //check for mathces
 function checkForMatch(){
     var cards= document.querySelectorAll('img');
     const optionOneId=cardsChosenId[0];
     const optionTwoId=cardsChosenId[1];
     document.getElementById("pp").innerHTML=optionOneId+" "+optionTwoId;
     if(cardArray[cardsChosenId[0]].name===cardArray[cardsChosenId[1]].name){

         alert('you found a match');
         cards[optionOneId].setAttribute('src','img88.jpg');
         cards[optionTwoId].setAttribute('src','img88.jpg');
         cardsWon.push(cardsChosen);

     }
     else{
         cards[optionOneId].setAttribute('src','img77 .jpg');
         cards[optionTwoId].setAttribute('src','img77 .jpg');
         alert('sorry,try again');
     }
     cardsChosen=[];
     cardsChosenId=[];
     resultDisplay.textContent=`score :${cardsWon.length}`;
     if(cardsWon.length===cardArray.length/2){
         resultDisplay.textContent='Congratulations!';
     }

 }


 //flip your card

 function flipCard(){
     let cardId=this.getAttribute('data-id');
     cardsChosen.push(cardArray[cardId].name);
     cardsChosenId.push(cardId);
     this.setAttribute('src',cardArray[cardId].img);
     if(cardsChosen.length===2){
         setTimeout(checkForMatch,500);

     }
 }

 createBoard();



})