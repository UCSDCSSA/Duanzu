$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

function inputCheck(){
    var username, email, passwd, confirm;

    username = document.getElementById("usr").value;
    email = document.getElementById("email").value;
    passwd = document.getElementById("pswd").value;
    confirm = document.getElementById("confirm").value;

}

function alert(){
  var al = document.getElementById("alert");
	al.className = "alert alert-danger";
	message = "<strong>Incorrect Region: </strong> For " + chr + ", upperbound: " + upperlimit + ", lowerbound: " + lowerlimit;
	al.innerHTML = message;
	var anchor = document.createElement("a");
	anchor.setAttribute("href", "#");
	anchor.setAttribute("class","close");
	anchor.setAttribute("data-dismiss","alert");
	anchor.setAttribute("aria-label","close");
	anchor.appendChild(document.createTextNode("x"));
	al.appendChild(anchor);
}
