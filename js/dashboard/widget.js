function fillwidget(p, s) {
	/*var s1 = y+'px';
	
	var s2 = (100-y)+'px';


	if (y>0 && y<100) {


		//document.getElementById("tempfill2").style.background = 'linear-gradient(#E10000, yellow)';
		document.getElementById("tempfill2").style.height = s1;
		document.getElementById("tempfill1").style.height = s2;
	}*/

	if (p<=100&&p>=0){

	var s1 = 100-p + 'px'; 

	if (s=='temperature') {
		
		document.getElementById("ctlayer2").style.height = s1;
		document.getElementById("temp").innerHTML = p+'&degC';
	}

	if (s=='humidity' && p<=100 && p>=0) {
		document.getElementById("chlayer2").style.height = s1;
		document.getElementById("humid").innerHTML = p+'%';
	}

	if (s=='money' && p<=100 && p>=0) {
		document.getElementById("cmlayer2").style.height = s1;
		document.getElementById("reven").innerHTML = parseInt(p*100);
		
	}

}
}