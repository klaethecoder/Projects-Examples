	//CREATES A FUNCTION THAT CREATES A RANDOM NUMBER AND PUTS IT IN THE CIRCLE
	function random(){
		//SELECT THE FIVE CIRCLES ON THE PAGE
		var one= document.getElementById('one');
		var two= document.getElementById('two');
		var three= document.getElementById('three');
		var four= document.getElementById('four');
		var five= document.getElementById('five');
		var six= document.getElementById('six');

		//CREATE A RANDOM NUMBER FOR EACH OF THE CIRCLES
		var a = Math.floor(Math.random()*70);
		var b = Math.floor(Math.random()*70);
		var c = Math.floor(Math.random()*70);
		var d = Math.floor(Math.random()*70);
		var e = Math.floor(Math.random()*70);
		var f = Math.floor(Math.random()*70);
		
		//PUT RANDOM NUMBERS TO EACH OF THE CIRCLES
		one.textContent = a;
		two.textContent = b;
		three.textContent = c;
		four.textContent = d;
		five.textContent = e;

		//THIS ONE IS DIFFERENT BECAUSE THE CIRCLE IS RED
		six.style.color = 'white';
		six.textContent = f;

	}
