// JavaScript Document
   
 
iNum = 1; 
function fading_rotating()
{
	iNum++;
	if (iNum == 5) {iNum=1;}
	document.getElementById("board").src= "images/1" + iNum +".jpg";
	//Spry.Effect.DoFade(document.getElementById("board"),{duration: 1500, from: '100%', to: '5%', toggle: false});
	setTimeout("fading_rotating()", 3000);
		
}