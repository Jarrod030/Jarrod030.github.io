function recommend(){
    var song0=document.getElementById("song0");
	var song1=document.getElementById("song1");
	var song2=document.getElementById("song2");
	var start=document.getElementById("bofang1");
	var body=document.getElementById("body");
	var zanting1=document.getElementById("zanting1");
	var	timer1=null;
	var cv=0;
	var bofang=function() {
		song2.style.transform="rotate(-18deg)";
	}
	start.onclick=function(){
		clearTimeout(timer1)
		musicbo.play()
		zanting1.style.display="block"
		start.style.display="none"

		bofang();
		timer1=setInterval(function(){
			song1.style.transform='rotate('+cv+'deg)';
			song0.style.transform='rotate('+cv+'deg)';
			cv+=0.5;
			if(cv>360){
				cv=0;
			}
		},30)

	}
	start2=function(){
		mv.style.display="none"
		clearTimeout(timer1)
		musicbo.play()
		zanting1.style.display="block"
		start.style.display="none"

		bofang();
		timer1=setInterval(function(){
			song1.style.transform='rotate('+cv+'deg)';
			song0.style.transform='rotate('+cv+'deg)';
			cv+=0.5;
			if(cv>360){
				cv=0;
			}
		},30)

	}
	zanting1.onclick=function(){
		musicbo.pause();
		song2.style.transform="rotate(-36deg)";
		zanting1.style.display="none"
		start.style.display="block"
		clearTimeout(timer1);
		
	}
	zanting2=function(){
		musicbo.pause();
		song2.style.transform="rotate(-36deg)";
		zanting1.style.display="none"
		start.style.display="block"
		clearTimeout(timer1);
	}
	//  搜索结果
	var kai1=document.getElementById("kai1");
	var gequ1=document.getElementById("gequ1");
	kai1.onclick=function() {
	var kaitop=kai1.style.top;
		if(kaitop<"560px"){
		kai1.value="↑"
		gequ1.style.display="block";
		kai1.style.top="560px";
		}
		else {
		kai1.value="↓"
        gequ1.style.display="none";
		kai1.style.top="115px";
		}
	}
	var kai2=document.getElementById("kai2");
	var my=document.getElementById("my");

	kai2.onclick=function() {
	var kaileft=kai2.style.right;
		if(kaileft<"300px"){
		kai2.value=">"
		my.style.display="block";
		kai2.style.right="300px";
		}
		else {
		kai2.value="<"

		my.style.display="none";
		kai2.style.right="0px";
		}
	}
}