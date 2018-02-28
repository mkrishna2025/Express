# Express
Sample

var formData = new FormData();
formData.append("userName", "Krishna");

var url = "http://localhost:3006/users";

fetch(url, {
	method: 'POST',
	origin: "http://studentsdemo.azurewebsites.net",
	body: formData
}).then(function(response) {
	 return response.json();
}).then(function(data) {
	debugger;
});