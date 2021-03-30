let posArray=[0,1,2,3,4,5];
//console.log(posArray);
const card = document.querySelectorAll('.card');
console.log(card[1])

forwardBtn.addEventListener('click', function(){
	arrayDown();
	console.log(card[2]);
	console.log(card[3]);
	
})

backBtn.addEventListener('click', function(){
	arrayUp();
	console.log(posArray);
})


//incrament array	
function arrayUp(){
	for(let i =0; i < 6; i++){
		posArray[i]=(posArray[i]+1)%6;
		card[i].style='--i:'+posArray[i];
		setTransition(i);
        setOpcty(i);
		}
	}
//derament array
function arrayDown(){
	for(let i =0; i < 6; i++){
		if(posArray[i] == 0){
			posArray[i] = 5;
		}
		else{
			posArray[i]=posArray[i]-1;
		}
	card[i].style='--i:'+posArray[i];
	   setTransition(i);
        setOpcty(i);
		
	}
}

function setOpcty(i){
	if(posArray[i]==0){
			card[i].style.opacity = "0"; 
		}
		if(posArray[i]==1){
			card[i].style.opacity = "1"; 
		}
		if(posArray[i]==2){
			card[i].style.opacity = ".8"; 
		}
	if(posArray[i]==3){
			card[i].style.opacity = ".6"; 
		}
		if(posArray[i]>3){
			card[i].style.opacity = "0";
		}
}
function setTransition(i){
	if(posArray[i]==0){
			card[i].style.transition = "transform 0ms";
			card[i].style.transition = "opacity 0ms";
			card[i].style.transitionDelay = "0ms";
		}
		if(posArray[i]==1){
			card[i].style.transition = "transform 400ms";
			card[i].style.transition = "opacity 0ms";
			card[i].style.transitionDelay = "0ms";
		}
		if(posArray[i]==2){
			card[i].style.transition = "transform 400ms"; 
			card[i].style.transitionDelay = "100ms";
		}
	if(posArray[i]==3){
		card[i].style.transition = "transform 400ms";
			card[i].style.transitionDelay = "150ms";
	}
		if(posArray[i]>3){
			card[i].style.transition = "transform 400ms";
			card[i].style.transitionDelay = "200ms";
		}
}