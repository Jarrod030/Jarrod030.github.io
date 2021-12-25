function rank_list(){
    var biao1=document.getElementById("biao1");
	var xin1=document.getElementById("xin1");
	var yuan1=document.getElementById("yuan1");
	var biao2=document.getElementById("biao2");
	var xin2=document.getElementById("xin2");
	var yuan2=document.getElementById("yuan2");

	function setpai(pai){
		let info='';
		for(var i=1;i<=10;i++){
			info+='<li>'+i+'：<span onclick="setsongname('+'\''+pai[i].name+'\''+');setSelect('+pai[i].id+'); getalbum('+pai[i].al.id+'); start2(); getmv('+pai[i].mv+')">'+pai[i].name+'</span></li>';
		}
		biao1.innerHTML+=info;
	}
	axios.get("playlist/detail?id=3778678")
	.then(function(res){ 
		console.log(res)
		let pai=res.data.playlist.tracks;
		biao2.onclick=function(){
			postgedan(pai);
			my.style.display="block";
			kai2.style.right="300px"

		}
		setpai(pai);
	})
	function setpai1(pai){
		let info='';
		for(var i=1;i<=10;i++){
			info+='<li>'+i+'：<span onclick="setsongname('+'\''+pai[i].name+'\''+');setSelect('+pai[i].id+'); getalbum('+pai[i].al.id+'); start2(); getmv('+pai[i].mv+')">'+pai[i].name+'</span></li>';

		}
		xin1.innerHTML+=info;
	}
	axios.get("playlist/detail?id=3779629")
	.then(function(res){
		console.log(res)
		let pai=res.data.playlist.tracks;
		xin2.onclick=function(){
			postgedan(pai);
			my.style.display="block";
			kai2.style.right="300px"

		}
		setpai1(pai);
	})
	function setpai2(pai){
		let info='';
		for(var i=1;i<=10;i++){
			info+='<li>'+i+'：<span onclick="setsongname('+'\''+pai[i].name+'\''+');setSelect('+pai[i].id+'); getalbum('+pai[i].al.id+'); start2(); getmv('+pai[i].mv+')">'+pai[i].name+'</span></li>';

		}
		yuan1.innerHTML+=info;
	}
	axios.get("playlist/detail?id=2884035")
	.then(function(res){
		console.log(res)
		let pai=res.data.playlist.tracks;
		yuan2.onclick=function(){
			postgedan(pai);
			my.style.display="block";
			kai2.style.right="300px"

		}
		setpai2(pai);
	})
}