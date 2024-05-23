
if (localStorage.getItem("data") == null) {
	var id = 1
	var data = [];
}
else {
	var data = JSON.parse(localStorage.getItem("data"));
	var id = data.length + 1
}
function loginNow() {
	if (moveLogin && moveRegister) {
		moveLogin.classList.add("show");
		moveRegister.classList.remove("show");
		moveRegister.classList.add("hide");
	}
}
function registerBtn() {
	var a = document.getElementById("fname").value
	var b = document.getElementById("email").value
	var c = document.getElementById("password").value
	var d = document.getElementById("password2").value

let aa= JSON.parse(localStorage.getItem("data"))
for (const i of aa) {
	if(i.email==b){
		var passnotmatch =document.getElementById("passCompare")
		passnotmatch.innerHTML ="Email already exists!!"
		passnotmatch.style.color="red"
		return;
	}
}
	if(c==d){
		var temp = {username:a,email:b,pass:c,pass1:d,id:id++ };
		data.push(temp);
	
		localStorage.setItem("data", JSON.stringify(data))
		alert("succesfully")
	}else{
		var passnotmatch =document.getElementById("passCompare")
		passnotmatch.innerHTML ="password does not match"
		passnotmatch.style.color="red"
	}
	
}
function registerNow() {

	if (moveRegister) {
		moveRegister.classList.add("show");
		moveLogin.classList.remove("show");
		moveLogin.classList.add("hide");

	}
	else {
		alert("something went wrong")
	}
}

function log_btn(){
	let emailValue=document.getElementById("emailField").value
	let passwordValue=document.getElementById("passwordField").value

	let data = JSON.parse(localStorage.getItem("data"));
	let logalert=document.getElementById("logalert")

	if(emailValue == "" && passwordValue == ""){
        logalert.innerHTML="Field Is Empty!!"
		logalert.style.color="red"
	}else if(emailValue == ""){
		logalert.innerHTML="Email Field Is Empty!!"
		logalert.style.color="red"
	}else if(passwordValue == ""){
		logalert.innerHTML=" Password Field Is Empty!!"
		logalert.style.color="red"
	}
	else{
	for (const i of data){
		if(i.email==emailValue){
			if(i.pass==passwordValue){
				alert(" log-in successfull!!")
				window.location.href = "./homepage.html";
			}else{
				logalert.innerHTML=" Password incorrect!!"
		logalert.style.color="red"
			}
		}else{
			logalert.innerHTML=" Email Does Not Match!!"
		    logalert.style.color="red"
		}
	}
}
}

