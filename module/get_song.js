function get_song(){
    var search=document.getElementById("search");
    var songs1=document.getElementById("songs");
	var musicbo=document.getElementById("musicbo");
	var songname3=document.getElementById("songname3");
	var musicid=new Array();
	var musicselct=new Array();
	let songs='';
	setsongname=function(name2){
		songname3.innerHTML=name2;
	}
	 getid=function(songs){
		for(var i=0;i<songs.length;i++){
			musicid[i]=songs[i].id;
			musicselct[i]=0;
		}
	}
	 setSelect=function(name1){
		for(let i=0;i<musicid.length;i++){
			if(musicid[i]==name1){
				musicselct[i]=1;
			}
			else{
				musicselct[i]=0;
			}
		}
		musicbo.src='http://music.163.com/song/media/outer/url?id='+ name1+'.mp3';
	}
	

	getalbum=function(album1) {
		axios.get("album?id="+album1)
		.then(function(res) {
			console.log(res);
			let imgurl=res.data.album.picUrl;
			song0.src=imgurl;
			body0.src=imgurl;
		})
	}
	function setsong(songs){
		let info='';
		for(let song of songs){
			info+='<li><span id="songnames" onclick="setsongname('+'\''+song.name+'\''+'); setSelect('+song.id+'); getalbum('+song.album.id+'); start2(); getmv('+song.mvid+')">'+song.name+'</span><span></span><button id="tianjia1" onclick=postsong('+'\''+song.name+'\''+','+song.id+','+song.album.id+','+song.mvid+')>+</button></li>';
		}
		songs1.innerHTML=info;
	}
	
	 search.addEventListener("keyup",function(event){
		if (event.keyCode === 13) {		
			axios.get("search?keywords="+search.value)
			.then(function(res){
				console.log(res);
				songs=res.data.result.songs;
				getid(songs);
				setsong(songs);

		  }).catch((err)=>{
			  console.log(err);
		  });
			kai1.onclick()
		}
	 })
}