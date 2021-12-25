function music_list(){
    var pop_list=document.getElementById("pop_list");
	var all_list=document.getElementById("all_list");
	var genduo=document.querySelector(".genduo");
	var change_page=document.getElementById("change_page");
	genduo.onclick=function() {
		genduo.style.display="none";
		pop_list.style.display="none";
		all_list.style.display="block";
		change_page.style.display="block";
	}
	var sum=new Array();
setzong=function(gedan){
	let t=0;
for (var j=0;j<99;j=j+9){
	let info='';
	for(var i=j;i<j+9;i++){
		info+='<li><img class="bj" src="../img/coverall.png"><img class="gedanimg" src="'+gedan[i].coverImgUrl+'"><span class="open"><a href="###" onclick="getgedan('+gedan[i].id+')"><img src="../img/播放.png"></a></span>  <p class="gname">'+gedan[i].name+'</p></li>';
	}
	sum[t++]=info;
}
 }
 var pre_page=document.getElementById("pre_page");
 	var next_page=document.getElementById("next_page")
 	var return0=document.getElementById("return0")
 	var i=0;
	return0.onclick=function(){
		genduo.style.display="block";
		pop_list.style.display="block";
		all_list.style.display="none";
		change_page.style.display="none";
		gedan1.innerHTML=sum[0];

	}
	 next_page.onclick=function(){
		 if(i<10){
		i=i+1;
		gedan1.innerHTML=sum[i];
		 }
	 }
	 pre_page.onclick=function(){
		 if(i!=0){
		i=i-1;
		gedan1.innerHTML=sum[i];
		 }
	 }
}