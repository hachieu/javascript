class Employee{
	constructor(id, name, birthDate, address){
		this.id = id;
		this.name = name;
		this.birthDate = birthDate;
		this.address = address;
	}
}

firstEmployee = new Employee(1, "Pham The Duy", "1998-10-21", "Ha Noi");
secondEmployee = new Employee(2, "Bui Thu Huong", "1995-10-01", "Ha Noi");

var array = [];

array.push(firstEmployee);
array.push(secondEmployee);

const str = "<table class='table table-striped my-3'>"
			+"<thead>"
			+"<tr>"
			+"<td> Id </td>"
			+"<td> Name </td>"
			+"<td> BirthDate </td>"
			+"<td> Address </td>"
			+"<td> Action </td>"
			+"</tr>"
			+"</thead>";

display(array, str);

//add data
function formSubmit(){
	let fullName = document.getElementById("name").value;
	let birthDate = document.getElementById("birthdate").value;
	let address = document.getElementById("address").value;

	if(checkName() & checkBirthDate() & checkAddress()){

		let lastId = 0;

		if(array.length == 0){
			lastId = 1;
		}else{
			lastId = parseInt(array[array.length-1].id);
			lastId = lastId+1;
		}
	
		employee = new Employee(lastId, fullName,birthDate,address);

		array.push(employee);

		document.getElementById("success").style.display = "block";
		var style_message = setTimeout(function(){
		        document.getElementById("success").style.display = "none";
		}, 4000);

	}else{
		document.getElementById("failed").style.display = "block";
		var style_message = setTimeout(function(){
		        document.getElementById("failed").style.display = "none";
		}, 4000);
	}

	

	display(array, str);
}

//show data in table
function display(array, str){

	for(item in array){
		str = str + "<tr><td id='empId"+array[item].id+"'>"+array[item].id+"</td>"
		+"<td id='name"+array[item].id+"'>"+array[item].name+"</td>"
		+"<td id='date"+array[item].id+"'>"+array[item].birthDate+"</td>"
		+"<td id='add"+array[item].id+"'>"+array[item].address+"</td>"
		+"<td>"
		+"<button type='button' class='btn btn-info' onclick='formEdit("+array[item].id+")'>"
	    +"<i class='fas fa-edit'></i> Edit </button>"
	    +"<button type='button' class='btn btn-danger ml-2' onclick='formDelete("+array[item].id+")'>"
	    +"<i class='far fa-trash-alt'></i> Delete </button>"
	    +"</td>"
		+"</tr>";
	}
	str = str+"</table>";

	document.getElementById("listEmp").innerHTML = str;
}

//show form add
function showFormAdd(){
	document.getElementById("form_add").style.display = "block";
}

//show data when click button update
function formEdit(param){
	document.getElementById("form_update").style.display = "block";

	var empId = "empId"+param;
	var name = "name"+param;
	var date = "date"+param;
	var add = "add"+param;

	var id = document.getElementById(empId).innerHTML;

	var fullName = document.getElementById(name).innerHTML;
	var birthDate = document.getElementById(date).innerHTML;
	var address = document.getElementById(add).innerHTML;

	document.getElementById("fullname").value = fullName;
	document.getElementById("date").value = birthDate;
	document.getElementById("add").value = address;

	document.getElementById("btnUpdate").setAttribute('onclick','formUpdate('+id+')');
}

//update
function formUpdate(param){
	let fullName = document.getElementById("fullname").value;
	let birthDate = document.getElementById("date").value;
	let address = document.getElementById("add").value;

	if(checkNameU() & checkBirthDateU() & checkAddressU()){
		infoUpdate = new Employee(param,fullName, birthDate,address);
		array[param-1] = infoUpdate;

		document.getElementById("u_success").style.display = "block";
		var style_message = setTimeout(function(){
		        document.getElementById("u_success").style.display = "none";
		}, 4000);
	}else{
		document.getElementById("u_failed").style.display = "block";
		var style_message = setTimeout(function(){
		        document.getElementById("u_failed").style.display = "none";
		}, 4000);
	}

	display(array, str);
}

//delete
function formDelete(param){

	for(item in array){
		if(array[item].id==param){
			array.splice(item, 1);
			break;
		}
	}
	display(array, str);
}

//search
function formSearch(){
	var key = document.getElementById("key").value;
	key = key.toLowerCase();
	let firstChar = key.charAt(0);
	let searchList = [];

	var lastChar = "";
	for(item in array){
		let searchName = array[item].name;
		searchName = searchName.toLowerCase();
		let charSplit = searchName.split(" ");
		lastChar_1 = charSplit[charSplit.length-1].charAt(0);
		lastChar_2 = charSplit[0].charAt(0);

		if(firstChar==lastChar_1 || firstChar==lastChar_2){
			searchList.push(array[item]);
		}		
	}

	if(searchList.length == 0){
		display(array, str);
	}
	else{
		display(searchList, str);
	}
}

function closeAdd(){
	document.getElementById("form_add").style.display = "none";
}

function closeUpdate(){
	document.getElementById("form_update").style.display = "none";
}


function checkName(){
	const filter = /[^.,!`~@#$%^&*()+=?<>;:""''|{}\[\]\/\-\_\\0-9]+$/;
	let fullName = document.getElementById("name").value;

	if(!filter.test(fullName) || fullName.length > 30 || fullName.length == 0){
		document.getElementById("mess1").innerHTML = "Please check your name !";
        return false;
	}
	else{
		document.getElementById("mess1").innerHTML = "";
        return true;
	}
}

function checkBirthDate(){
	let birthDate = document.getElementById("birthdate").value;
	
	if(birthDate.length == 0){
		document.getElementById("mess2").innerHTML = "Please check your birthdate !";
        return false;
	}
	else{
		document.getElementById("mess2").innerHTML = "";
        return true;
	}
}

function checkAddress(){
	const filter = /[^.,!`~@#$%^&*()+=?<>;:""''|{}\[\]\/\-\_\\]+$/;
	let address = document.getElementById("address").value;

	if(!filter.test(address) || address.length > 50 || address.length == 0){
		document.getElementById("mess3").innerHTML = "Please check your address !";
        return false;
	}
	else{
		document.getElementById("mess3").innerHTML = "";
        return true;
	}
}

function checkNameU(){
	const filter = /[^.,!`~@#$%^&*()+=?<>;:""''|{}\[\]\/\-\_\\0-9]+$/;
	let fullName = document.getElementById("fullname").value;

	if(!filter.test(fullName) || fullName.length > 30 || fullName.length == 0){
		document.getElementById("mess_a").innerHTML = "Please check your name !";
        return false;
	}
	else{
		document.getElementById("mess_a").innerHTML = "";
        return true;
	}
}

function checkBirthDateU(){
	let birthDate = document.getElementById("date").value;
	
	if(birthDate.length == 0){
		document.getElementById("mess_b").innerHTML = "Please check your birthdate !";
        return false;
	}
	else{
		document.getElementById("mess_b").innerHTML = "";
        return true;
	}
}

function checkAddressU(){
	const filter = /[^.,!`~@#$%^&*()+=?<>;:""''|{}\[\]\/\-\_\\]+$/;
	let address = document.getElementById("add").value;

	if(!filter.test(address) || address.length > 50 || address.length == 0){
		document.getElementById("mess_c").innerHTML = "Please check your address !";
        return false;
	}
	else{
		document.getElementById("mess_c").innerHTML = "";
        return true;
	}
}