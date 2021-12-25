function pop_song(){
    var gedan1=document.getElementById("gedan1");
	 function setgedan(gedan){
		 let info='';
		for(var i=0;i<9;i++){
			info+='<li><img class="bj" src="../img/coverall.png"><img class="gedanimg" src="'+gedan[i].coverImgUrl+'"><span class="open"><a href="###" onclick="getgedan('+gedan[i].id+')"><img src="../img/播放.png"></a></span>  <p class="gname">'+gedan[i].name+'</p></li>';
		}
		gedan1.innerHTML+=info;
	 }
	 axios.get("top/playlist?limit=100")
	 .then(function(res){
		 console.log(res);
		 let gedan=res.data.playlists;
		 setgedan(gedan);
		 setzong(gedan);
	 })

	 getgedan=function(gedanid){
		axios.get("playlist/detail?id="+gedanid)
		.then(function(res){
			console.log(res);
			let pai=res.data.playlist.tracks;
			postgedan(pai);
			my.style.display="block";
			kai2.style.right="300px"
		})
	 }
}