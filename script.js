// FUNCTION TO HIDE THE SECOND SECTION

function fun_click(){
	let x = document.getElementById("body0");

	if (x.style.display === "none"){
		x.style.display = "flex";
	}
	else{
		x.style.display = "none";
	}
}