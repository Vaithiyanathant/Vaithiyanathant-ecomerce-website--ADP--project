function validate()
{	
var username=document.getElementById("name").value;
var password=document.getElementById("pass").value;
if (username=="name" && password=="pass")
{
	alert("Login sucess");
	window.location="afterlogin.html"
}
else
{
	alert("Login failed,retry!");
}

}