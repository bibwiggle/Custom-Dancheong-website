document.addEventListener("DOMContentLoaded", function(){

	document.querySelector("#number1").addEventListener("keyup", function(){
		localStorage.setItem("number1", this.value);
	})

	document.querySelector("#number2").addEventListener("keyup", function(){
		localStorage.setItem("number2", this.value);
	})

	document.querySelector("#number3").addEventListener("keyup", function(){
		localStorage.setItem("number3", this.value);
	})

	document.querySelector("#number4").addEventListener("keyup", function(){
		localStorage.setItem("number4", this.value);
	})

	document.querySelector("#number5").addEventListener("keyup", function(){
		localStorage.setItem("number5", this.value);
	})

	document.querySelector("#number6").addEventListener("keyup", function(){
		localStorage.setItem("number6", this.value);
	})



	let cr1 = document.querySelectorAll("#c1 input");
	let cr2 = document.querySelectorAll("#c2 input");
	let cr3 = document.querySelectorAll("#c3 input");
	let cr4 = document.querySelectorAll("#c4 input");
	let cr5 = document.querySelectorAll("#c5 input");
	let cr6 = document.querySelectorAll("#c6 input");

	for(var i = 0; i < cr1.length; i++){
		cr1[i].addEventListener("change", function(){
			localStorage.setItem("color1", this.value);
		})
	}
		for(var i = 0; i < cr2.length; i++){
		cr2[i].addEventListener("change", function(){
			localStorage.setItem("color2", this.value);
		})
	}
		for(var i = 0; i < cr3.length; i++){
		cr3[i].addEventListener("change", function(){
			localStorage.setItem("color3", this.value);
		})
	}
		for(var i = 0; i < cr4.length; i++){
		cr4[i].addEventListener("change", function(){
			localStorage.setItem("color4", this.value);
		})
	}
		for(var i = 0; i < cr5.length; i++){
		cr5[i].addEventListener("change", function(){
			localStorage.setItem("color5", this.value);
		})
	}
		for(var i = 0; i < cr6.length; i++){
		cr6[i].addEventListener("change", function(){
			localStorage.setItem("color6", this.value);
		})
	}



})