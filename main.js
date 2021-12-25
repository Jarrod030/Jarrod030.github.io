window.onload=function() {
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
    banner();
    // 播放器
    recommend();
	// 全部歌单
    music_list();
	//  获取歌曲
    get_song();
	//  热门推荐歌单
    pop_song();
	//  排行榜歌曲
    rank_list();
	// 添加歌曲
	var myol=document.getElementById("myol");
	postsong=function(name,Musicid,albumid,mvid){
		if(document.getElementById(name)){
			alert("已添加歌曲")
		}else{
		myol.innerHTML+='<li id="'+'_'+albumid+'"><span id="songnames" onclick="setsongname('+'\''+name+'\''+'); setSelect('+Musicid+'); getalbum('+albumid+'); start2(); getmv('+mvid+'); nextsong('+'_'+Musicid+')">'+name+'</span> <button id="tianjia" onclick="'+'_'+albumid+'.remove()">-</button></li>'

		}
	}
	// 我的歌单
	var mybutton1=document.getElementById("mybutton1");
	var mybutton2=document.getElementById("mybutton2");
	var mydl1=document.getElementById("mydl1");
	var mydl2=document.getElementById("mydl2");

	mybutton1.onclick=function(){
		mydl2.style.display="block";
		mydl1.style.display="none";

	}
	mybutton2.onclick=function(){
		mydl1.style.display="block";
		mydl2.style.display="none";
	}
	
	// 添加歌单歌曲
	var namelist=new Array();
	var idlist=new Array();
	var allist=new Array();
	var mvlist=new Array();

	var myol1=document.getElementById("myol1");
	postgedan=function(pai){
		let info='';
		for(var i=0;i<pai.length;i++){
			namelist[i]=pai[i].name;
			idlist[i]=pai[i].id;
			allist[i]=pai[i].al.id;
			mvlist[i]=pai[i].mv;

			info+='<li id="'+'_'+pai[i].id+'"><span  id="songnames" onclick="setsongname('+'\''+pai[i].name+'\''+');setSelect('+pai[i].id+'); getalbum('+pai[i].al.id+'); start2(); getmv('+pai[i].mv+'); nextsong('+'_'+pai[i].id+')">'+pai[i].name+'</span><button id="tianjia" onclick="postsong('+'\''+pai[i].name+'\''+','+pai[i].id+','+pai[i].al.id+','+pai[i].mv+')">+</button></li>';
		}
		myol1.innerHTML=info;
		
	}

	// mv歌词
	var mv=document.getElementById("mv");
	var mvid=document.getElementById("mvid");
	var geciid=document.getElementById("geciid");
	getmv=function(mvid1){
		if(mvid1!=0){
		axios.get("mv/url?id="+mvid1)
		.then(function(res){
			console.log(res);
			let mvurl=res.data.data.url;
			setmv1(mvurl);
			
		})
		mvid.style.display="block";
		mvid.style.bottom="150px";
		mvid.style.left="770px";

		mvid.style.position="absolute";
	}
	else{
		mvid.style.display="none";

	}
	}
	function setmv1(mvurl){
		mv.innerHTML='<video id="mv1" src="'+mvurl+'" controls="controls"></video>';
	}
	mvid.onclick=function(){
		
		if(mv.style.display=="none"){
			
		mv.style.display="block";
		zanting2();}
		else{
			
			mv.style.display="none";
			mv1.pause();
		}
	}

	// 切换歌曲
	var shang1=document.getElementById("shang1");
	var xia1=document.getElementById("xia1");

	nextsong=function(songid){

		var item=idlist.indexOf(songid);
		var len=idlist.length-1;
		shang1.onclick=function(){
			if(item!=0){
				item=item-1;
			nextsong1(item)
			}else{
				alert("当前第一首");
			}
		}
		xia1.onclick=function(){
			if(item!=len){
				item=item+1;
				nextsong1(item)
			}else{
				alert("当前最后一首");
			}
		}
		musicbo.addEventListener('ended', function () {  
				if(item!=len){
					item=item+1;
					nextsong1(item)
				}else{
					alert("当前最后一首");
				}
		}, false);
	}
	nextsong1=function(item){
		setSelect(idlist[item]);
		 getalbum(allist[item]);
		  start2();
		   getmv(mvlist[item]);
		   setsongname(namelist[item])
	}
	
}

