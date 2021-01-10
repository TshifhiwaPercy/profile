var windowWidth; //Get user window width
var windowHeight; //Get user window height
function pageLoad(){
	try{
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		var informationContainer_div = document.getElementById("informationContainer_div");
		var btnLogOut = document.getElementById("btnLogOut");
		//Position elements based on user screen size
		btnLogOut.style.marginTop = (windowHeight *0.02)+"px";
		if(windowWidth >=1024)
		{
			informationContainer_div.style.marginLeft="300px";

        }
        else{
            informationContainer_div.style.marginLeft="0px";
        }
        hideControls();


	}
	catch(ex)
	{
		alert(ex);
	}
}
//Function for hiding some controls
function hideControls(){
	try{
		var user_avatar = document.getElementById("user_avatar");
		user_avatar.style.visibility = "hidden";
	}
	catch(ext){
		console.log(ext);
	}
}
function singleHider(control){
	try{
		var variable = document.getElementById(control);
		
	}
	catch(ex){
		console.log(ex);
	}
}
//Unhide controls
function unHide(control){
	try{
		var cont = document.getElementById(control);
		cont.style.visibility = "visible";
		cont.style.transition = "visibility 1s ease-in-out";
	}
	catch(ex){
		console.log(ex);
	}
}
function changeProfilePicture(){
	try{
		var user_Avatar_container = document.getElementById("uploadNewImage");

		//Styling
		
		user_Avatar_container.style.backgroundColor = "rgb(174,170,173)";
		

	}
	catch(ex){
		alert(ex);
	}
}