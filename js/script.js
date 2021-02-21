


const op = setInterval(increaseNum, 20);

function increaseNum(){

	const text = document.getElementById("text");
	const progress =  document.getElementById("progress");

	let a = window.getComputedStyle(progress, ':before').getPropertyValue('width');
	a = Math.floor((parseInt(a)/ 5) * 2);
	
	text.innerHTML = a + '%';
	
	if(a >= 100){
		clearInterval(op);

		console.log(a );
		text.innerHTML = 100 + '%';
		
		$(".loader .inner-text").fadeOut(850, function(){
			$(".loader").fadeOut(800,function(){
				$(".loader .main ").fadeOut(1000)
			});
	  	});

	}
	
}



