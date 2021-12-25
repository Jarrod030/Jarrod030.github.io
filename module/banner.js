function banner(){
   axios.defaults.baseURL = 'http://47.98.248.23:3000';
   var items=document.getElementsByClassName("item");
   var left=document.getElementById("box-left");
   var right=document.getElementById("box-right");
   var butt=document.getElementsByClassName("butt");
   var circle=document.getElementsByClassName("minlogo");
   var index=0;
   var timer=null;
   var clearclass=function(){
	for(let i=0;i<items.length;i++){
		items[i].className="item";
		butt[i].className="butt";
		butt[i].setAttribute("num",i);
		circle[i].setAttribute("num",i);
	}
}
// 设置轮播图图片
var item=document.getElementById("item");
var item1=document.getElementById("item1");

setsong0=function(url){
	song0.src=url;
}



function setlunbo(lunbo){
	let info='';
	let info1='';
	for(var i=0;i<5;i++){
		if(lunbo[i].typeTitle=="新歌首发"){
			info+='<li class="item"><img  src="'+lunbo[i].imageUrl+'"></li>';
		info1+='<li><span class="butt"></span><img class="minlogo" src="'+lunbo[i].imageUrl+'"><a href="###" onclick="setSelect('+lunbo[i].targetId+'); setsong0('+'\''+lunbo[i].imageUrl+'?param=400y400'+'\''+'); start2();";>《新歌首发》</a> </li>';
		}
		else if(lunbo[i].typeTitle=="新碟首发"){
			info+='<li class="item"><img src="'+lunbo[i].imageUrl+'"></img></li>';
		info1+='<li><span class="butt"></span><img class="minlogo" src="'+lunbo[i].imageUrl+'"><a href="###" onclick="getgedan('+lunbo[i].targetId+')">《新碟首发》</a></li>';
		}
		else{
			info+='<li class="item"><img src="'+lunbo[i].imageUrl+'"></img></li>';
		info1+='<li><span class="butt"></span><img class="minlogo" src="'+lunbo[i].imageUrl+'"><a href="'+lunbo[i].url+'">&nbsp;&nbsp;&nbsp;最新活动</a></li>';
		}
	}
	item.innerHTML+=info;
	item1.innerHTML+=info1;
}

	 axios.get("banner")
	 .then(function(res){
		 console.log(res);
		 let lunbo=res.data.banners;
		 setlunbo(lunbo);
	 })
	  


function move(){
	clearclass();
	items[index].className="item active";
	butt[index].className="butt white"
}
right.onclick=function(){
	clearInterval(timer);
	if(index<items.length-1){
		index++;
	}
	else{
		index=0;
	}
	move();
	timer=setInterval(function(){
		if(index<items.length-1){
			index++;
		}
		else{
			index=0;
		}
		move();
	},7000)
}
left.onclick=function(){
	clearInterval(timer);
	if(index<items.length){
		index--;
	}
	else{
		index=items.length-1;
	}
	move();
	timer=setInterval(function(){
		if(index<items.length-1){
			index++;
		}
		else{
			index=0;
		}
		move();
	},7000)
}
for(var i=0;i<circle.length;i++){
	circle[i].addEventListener("click",function(){
		var t=this.getAttribute("num");
		index=t;
		move( )
	})
}
timer=setInterval(function(){
	if(index<items.length-1){
		index++;
	}
	else{
		index=0;
	}
	move();
},7000)
}