var sum = 0;

const input = document.querySelectorAll("input[type=checkbox");

function calc(input) {
	
  
	if(input.checked){
		sum += parseInt(input.value);}
	else
        sum -= input.value

	document.getElementById("sumtext").value = sum;
}


