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
	}
	catch(ex)
	{
		alert(ex);
	}
}
