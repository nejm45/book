const loginDoss = document.getElementById("Wrapper");

createForm();

function createForm() {
	const div1 = document.createElement("div");
	loginDoss.appendChild(div1);
	insertInputField("form", "", "","", "", "cc",  div1);
	
	const div2 = document.createElement("div");
	div1.appendChild(div2);
	insertInputField("title", "Login To Coding Market", "","", "", "cc",  div2);
	
	const form1 = document.getElementById("form1");
	div1.appendChild(form1);
	/*  const form1 = document.createElement("form");
	form1.method="post";
	form1.action="index2.html";
	form1.onsubmit="return validation();";
	div1.appendChild(form1);  */
	
	
	
	const div3 = document.createElement("div");
	form1.appendChild(div3);
	insertInputField("input_wrap", "", "","", "", "cc",  div3);
	
	const label1 = document.createElement("label");
	div3.appendChild(label1);
	insertInputField("", "Email or Username", "","", "", "cc",  label1);
	
	const div4 = document.createElement("div");
	div4.id = "input_field";
	div3.appendChild(div4);
	insertInputField("input_field", "", "","", "", "cc",  div4);
	
	const input1 = document.createElement("input");
	div4.appendChild(input1);
	insertInputField("input1", "", "text","", "", "cc",  input1);
	
	
	
	
	const div5 = document.createElement("div");
	form1.appendChild(div5);
	insertInputField("input_wrap", "", "","", "", "cc",  div5);
	
	const label2 = document.createElement("label");
	div5.appendChild(label2);
	insertInputField("", "Password", "","", "", "cc",  label2);
	
	const div6 = document.createElement("div");
	div5.appendChild(div6);
	insertInputField("input_field", "", "","", "", "cc",  div6);
	
	const input2 = document.createElement("input");
	div6.appendChild(input2);
	insertInputField("input2", "", "password","", "", "cc",  input2);
	
	
	const div7 = document.createElement("div");
	form1.appendChild(div7);
	insertInputField("input_wrap", "", "","", "", "cc",  div7);
	
	const span1 = document.createElement("span");
	div7.appendChild(span1);
	insertInputField("error_msg", "Incorrect username or password. Please try again", "","", "", "cc",  span1);
	
	const input3 = document.createElement("input");
	div7.appendChild(input3);
	insertInputField("btn disabled", "", "submit", "Login", "true", "cc",  input3);
	
	
	
	
	
}



function insertInputField(idin, textin, typein, valuein, disabledin, classin, field) {
 
  field.id = idin;
  field.innerText = textin;
  field.type = typein;
  field.value = valuein;
  field.disabled = disabledin;
   field.className = classin;
}




function validation(){
	//ev.preventDefault();
	
	var input_text = document.getElementById("input1");
	
	var input_password = document.getElementById("input2");
	
	var error_msg = document.getElementById("error_msg");

	if(input_text.value.length <= 3 || input_password.value.length <= 3 ){
		error_msg.style.display = "inline-block";		
		input_text.style.border = "1px solid #f74040";
		input_password.style.border = "1px solid #f74040";
		return false;
	}
	else{
		return true;
	}
	
}


var login_btn = document.getElementById("btn disabled");
var input_text4 = document.getElementById("input1");
var input_password4 = document.getElementById("input2");
	console.log(input_text4.value);
input_text4.addEventListener("input", aa);
input_password4.addEventListener("input", aa);
function aa(){
	if(input_text4.value.length >= 3 || input_password4.value.length >= 3 ){
		login_btn.disabled = false;
			login_btn.style.background = "#1a9635";
			//preventDefault();
			console.log(input_text4.value);
		
	}
	else{
		login_btn.style.background = "#c90e17";
	}
}