/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

function change(a_id){

	var link = document.getElementsByClassName("al");
	for(var i=0; i<link.length; i++){
		link[i].classList.remove("active");
	}
	var selected = document.getElementById(a_id);
	selected.classList.add("active");	
}

