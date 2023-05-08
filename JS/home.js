function search()
{
	var a=document.getElementById("searchid").value;
	if(a=="indoorplants")
	{
		window.location="clickon1.html";
	}
	else if(a=="seeds")
	{
		window.location="clickon2.html";
	}
	else if(a=="saplings")
	{
		window.location="clickon3.html";
	}
	else if(a=="gardensetup")
	{
		window.location="clickon4.html";
	}
	else if(a=="corporategift")
	{
		window.location="clickon5.html";
	}
	else if(a=="outdoor")
	{
		window.location="clickon6.html";
	}
	else if(a=="accessories")
	{
		window.location="clickon7.html";
	}
	else if(a=="flowers")
	{
		window.location="clickon8.html";
	}
	else if(a=="fruits" || a=="vegetables")
	{
		window.location="clickon9.html";
	}
	else if(a=="fertilizers")
	{
		window.location="clickon10.html";
	}
	else
	{
		alert("Sorry item not available");
	}
	

}
function home()
{ 
	window.location="afterlogin.html";

}
function tansation()
{
	alert("Tansation sucessfull !");
	window.location="afterlogin.html"

}
function tansationfail()
{

	alert("Tansation Failed !");
	window.location="afterlogin.html"

}