const app = document.getElementById("app");
var table = document.createElement("table");
//const arr1 = [];

var isEditMode = false;
var indexToEdit = null;
var indexTodelet = null;

//createForm();
//createTable();  
 //initserv();
 
 
 const url = "  ";
 
 function deleteRequest(a){
	 return fetch(url + "/users/" +a, {
		method: "DELETE",
		headers: { 'Content-type':'application/json' }
		})
		
 
                               }
 
 
 
 
 
 
 
 function postRequest(user){
	 return fetch(url + "/users", {
		method: "POST",
		headers: { 'Content-type':'application/json' },
		body: JSON.stringify(user)
	})
	
  
 
 }
 
 
 function getRequest(){
	return fetch(url + "/users")  
     .then(function (response) {return response.json()})
	 //.then(function (json) { console.log(json) });
	 
	 
	 

 }
 
 
 
	 
 
 
function initserv() {
	
	getRequest()
	 .then(function(json) { console.log(json); initTable(json); })
	
 


}

function createForm() {
  var addform1 = document.createElement("form");
  app.appendChild(addform1);
  addform1.addEventListener("submit", onFormSubmit);
  
  
  var nameField = document.createElement("div");
  addform1.appendChild(nameField);
  insertInputField("name *", "text", "name", "name", nameField );

  var usernameField = document.createElement("div");
  addform1.appendChild(usernameField);
  insertInputField("username", "text", "username", "username", usernameField);

  var emailField = document.createElement("div");
  addform1.appendChild(emailField);
  insertInputField("email", "text", "email", "email", emailField);

  

  var submitField = document.createElement("div");
  addform1.appendChild(submitField);
  submitField.innerHTML =
    '<div  class="form-action-buttons"><input type="submit" value="OK"> ';
}

function insertInputField(labelText, inputType, inputName, inputId, field) {
  const label = document.createElement("label");
  label.innerText = labelText;
  const input = document.createElement("input");
  input.type = inputType;
  input.name = inputName;
  input.id = inputId;

  field.appendChild(label);
  field.appendChild(input);
}

  
  
  
  
  




function createTable() {
  app.appendChild(table);
  var thead1 = document.createElement("thead");
  table.appendChild(thead1);
  var tr2 = document.createElement("tr");
  thead1.appendChild(tr2);
  tr2.innerHTML =
    "<th>name</th><th>userName</th><th>email</th>";
  var tbody1 = document.createElement("tbody");
  table.appendChild(tbody1);
}






function initTable(data) {
  
  const tbody = document.getElementsByTagName("tbody")[0];
  tbody.innerHTML = null;

  
  
  data.forEach(function(ele, ind){
	  const row = document.createElement("tr");
	  
	  const name1 = document.createElement("td");
    name1.innerText = data[ind].name;
    const username1 = document.createElement("td");
    username1.innerText = data[ind].username;
    const email1 = document.createElement("td");
    email1.innerText = data[ind].email;
    
    const actions = document.createElement("td");
    
    actions.innerHTML = `<a onClick="onEdit(${ind})">Edit</a>
                               <a onClick="onDelete(${ind})">Delete</a>`;

    row.appendChild(name1);
    row.appendChild(username1);
    row.appendChild(email1);
    
    row.appendChild(actions);

    tbody.appendChild(row);
	  
  });
  
  
}




function onFormSubmit(ev) {
  ev.preventDefault();
  var formData1 = readFormData();
  if (document.getElementById("name").value == "") {
    alert("Please fill in the blank");
  } else {
    if(isEditMode) {
      update(formData1);
	  initserv();
      //initTable();
    } else {
      storeInServ(formData1);
      //initTable();
	  
	  initserv();
	  
    }
      
  }
  resetForm();
}




function readFormData() {
  var formData2 = {};
  formData2["nameD"] = document.getElementById("name").value;
  formData2["usernameD"] = document.getElementById("username").value;
  formData2["emailD"] = document.getElementById("email").value;
  

  return formData2;
}




function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  
  
  isEditMode = false;
  indexToEdit = null;
  indexTodelet = null;
}



function onEdit(index) {
  
  getRequest()
  //fetch("https://jsonplaceholder.typicode.com/users")
  //.then(function (res) { return res.json(); }) 
  .then(function(json) { 
  
 
  document.getElementById("name").value = json[index].name;
  document.getElementById("username").value = json[index].username;
  document.getElementById("email").value = json[index].email;
  
  isEditMode = true;
  indexToEdit = index;
  
  })
  
}



function update(formData3) {
	
	return fetch(url + "/users/" + id, {
		method: "PUT",
		headers: { 'Content-type':'application/json' }
		body: JSON.stringify(formData3)
	})
	
  
  
  

}










function storeInServ(x) {
	
	postRequest(x);
		

/*  const request = new XMLHttpRequest();
    request.addEventListener("progress", function() {
	const response = JSON.stringify(request.response);
	console.log("Name");
	//const arr1 = response.map(function(item, index){
	//	return item
	//});
	
	//response.push(x);
	//response.post(x);
	
	
	
});
request.open("POST", "https://jsonplaceholder.typicode.com/users");
request.send();

*/

}



function onDelete(index) {
  if (confirm("Are you sure to delete this record ?")) {
	  
	  deleteRequest(index);
	  initserv();
	
	//preventDefault();
  }
}



createForm();
createTable();  
 initserv();



