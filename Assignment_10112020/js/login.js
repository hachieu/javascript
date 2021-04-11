class User{
	constructor (username, password){
		this.username = username;
		this.password = password;
	}
}

user = new User("chieuhv", "12345678");

function submitForm(){

	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if(checkUsername() & checkPassword()){
		if(username==user.username && password==user.password){
			window.location = "home.html";
		}
		else{
			document.getElementById("message").style.display = "block";

			var style_message = setTimeout(function(){
		        document.getElementById("message").style.display = "none";
		    }, 4000);
		}
	}
}

function checkUsername(){
	var username = document.getElementById("username").value;

	var filter = /^[A-Za-z0-9]+$/;

	if(!filter.test(username) || username.length == 0 || username.length > 15){
		document.getElementById("user_mess").innerHTML = "Please check your username !";

		var style_message = setTimeout(function(){
		        document.getElementById("user_mess").style.display = "none";
		    }, 4000);
		
        return false;
	}
	else{
		document.getElementById("user_mess").innerHTML = "";
        return true;
	}
}

function checkPassword(){
	var password = document.getElementById("password").value;

	if(password.length==0 || password.length > 50){
		document.getElementById("pass_mess").innerHTML = "Please check your password !";

		var style_message = setTimeout(function(){
		        document.getElementById("pass_mess").style.display = "none";
		    }, 4000);

		return false;
	}else{
		document.getElementById("pass_mess").innerHTML = "";
		return true;
	}
}