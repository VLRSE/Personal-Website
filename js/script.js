


const op = setInterval(increaseNum, 20);

function increaseNum(){

	const text = document.getElementById("text");
	const progress =  document.getElementById("progress");

	let a = window.getComputedStyle(progress, ':before').getPropertyValue('width');

	a = Math.floor((parseInt(a)/ 10) * 4 );
	text.innerHTML = a + '%';
	console.log(a);
	
	if(a > 100){
		text.innerHTML = 100 + '%';
		clearInterval(op);
		

		$(".loader .inner-text").fadeOut(750, function(){
			$(".loader").fadeOut(800,function(){
				$(".loader .main ").fadeOut(1000)
			});
	  });
	}


}

