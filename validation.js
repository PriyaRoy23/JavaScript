"use strict"
function f1()
{
	var name = document.getElementById('name').value;
	document.getElementById('msgname').innerHTML = name;
}
function f2()
{
	var email = document.getElementById('email').value;
	document.getElementById('msgemail').innerHTML = email;
}
function f3()
{
	var uname = document.getElementById('uname').value;
	document.getElementById('msgun').innerHTML = uname;
}
function f4()
{
	var pass = document.getElementById('pass').value;
	document.getElementById('msgp').innerHTML = pass;
}
function f5()
{
	var cpass = document.getElementById('cpass').value;
	document.getElementById('msgcp').innerHTML = cpass;
}
function f6()
{
	var gender = document.getElementsByName('gender');
if(!(gender[0].checked || gender[1].checked)){
	alert("select gender");
	return false;
}
}
function f7()
{
	
	var dobd = document.getElementById('dobd').value;
	document.getElementById('msgd').innerHTML = dobd;
	var dobm = document.getElementById('dobm').value;
	document.getElementById('msgm').innerHTML = dobm;
	var doby = document.getElementById('doby').value;
	document.getElementById('msgy').innerHTML = doby;
}
function f8() 
{
	var nameEl = document.getElementById('name');
	
		if(nameEl.value == ""){

			var obj = document.getElementById('msgname');
			obj.innerHTML = "null submission";
			alert(obj.innerHTML);
		}
	

	var emailEl = document.getElementById('email');
	
		if(emailEl.value == ""){

			var obj = document.getElementById('msgemail');
			obj.innerHTML = "null submission";
			alert(obj.innerHTML);
		}
	
	var unameEl = document.getElementById('uname');
	
		if(unameEl.value == ""){

			var obj = document.getElementById('msgun');
			obj.innerHTML = "null submission";
			alert(obj.innerHTML);
		}
	
var passEl = document.getElementById('pass');
	
		if(passEl.value == ""){

			var obj = document.getElementById('msgp');
			obj.innerHTML = "null submission";
			alert(obj.innerHTML);
		}

		var cpassEl = document.getElementById('cpass');
	
		if(cpassEl.value == ""){

			var obj = document.getElementById('msgcp');
			obj.innerHTML = "null submission";
			alert(obj.innerHTML);
		}
		
		/*var genderEl = document.getElementById('gender');
	
		if(genderEl.value == ""){

			var obj = document.getElementById('msggen');
			obj.innerHTML = "null submission";
			alert(obj.innerHTML);
		}*/
		var dobdEl = document.getElementByName('dobd');
		if(dobdEl.value == ""){
			var obj = document.getElementById('msgd');
			obj.innerHTML = "null submission";
			alert(obj.innerHTML);
		}
		var dobmEl = document.getElementByName('dobm');
		if(dobmEl.value == ""){
			var obj = document.getElementById('msgm');
			obj.innerHTML = "null submission";
			alert(obj.innerHTML);
		}
		var dobyEl = document.getElementByName('doby');
		if(dobyEl.value == ""){
			var obj = document.getElementById('msgy');
			obj.innerHTML = "null submission";
			alert(obj.innerHTML);
		}
}