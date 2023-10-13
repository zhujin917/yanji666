//配置部分 请按需修改
GMP_CONFIG={
	"REPO":"YanShuHao314/RandomMusic", //音乐所在存储库，例如"YanShuHao314/RandomMusic"，前后无需加斜杠
	"SITE_NAME":"GithubMusicPlayer(Legacy)", //站点名称
	"BACKGROUND_IMAGE":"img/KUN.jpg" //背景图像，建议和当前协议一致
}
//==============配置部分结束，请勿随意修改下方代码==============//


//设置事件
document.getElementById("gmp-progress").onmousedown=function(){clearInterval(getProgressInterval);}
document.getElementById("gmp-progress").onmouseup=function(){getProgressInterval = setInterval(function(){gmp.reloadAudioProgress()},200);}
document.getElementById("gmp-progress").ontouchstart=function(){clearInterval(getProgressInterval);}
document.getElementById("gmp-progress").ontouchend=function(){getProgressInterval = setInterval(function(){gmp.reloadAudioProgress()},200);}
document.getElementById("gmp-progress").onchange=function(){
	document.getElementById("gmp-audio").currentTime=document.getElementById("gmp-progress").value/500*document.getElementById("gmp-audio").duration;
	gmp.play();
}
document.getElementById("gmp-audio").onended=function(){
	if(playMode=="song-loop"){
		document.getElementById("gmp-audio").currentTime=0;
		gmp.play();
	}else{gmp.next();}
}

//显示加载动画
su.startLoading();

//设置站点信息
document.title=GMP_CONFIG["SITE_NAME"];
document.getElementById("title").innerText=GMP_CONFIG["SITE_NAME"];
document.getElementById("bgImage").src=GMP_CONFIG["BACKGROUND_IMAGE"]

//定义变量
nowPlaying=-1;
playMode="list-loop";
audioTimeLimit=false;

//定义函数
gmp={
	"play":function(){//开始播放
		if(nowPlaying==-1){
			document.querySelector(".gmp-list[count^='0']").click();
		}
		document.getElementById("gmp-audio").play();
		document.getElementById("playBtn").style.display="none";
		document.getElementById("pauseBtn").style="";
	},
	"pause":function(){//暂停播放
		document.getElementById("gmp-audio").pause();
		document.getElementById("pauseBtn").style.display="none";
		document.getElementById("playBtn").style="";
	},
	"addToPlaylist":function(filedata){//添加到播放列表Json
		playList.push(filedata.path);
	},
	"addToHtmlData":function(filename,count){//添加到播放列表html
		htmlData=htmlData+`
		<div class="gmp-list" count="`+count+`" onclick="gmp.startPlay(this)">
			<svg class="playingIcon"><use href="#acoustic"></use></svg>
			<svg class="notPlayingIcon"><use href="#play"></use></svg>
			<filename>`+filename+`</filename>
		</div>
		<br>`;
	},
	"reloadAudioProgress":function(){//获取播放进度
		if(document.getElementById("gmp-audio").duration){
			audioProgress=document.getElementById("gmp-audio").currentTime/document.getElementById("gmp-audio").duration;
			document.getElementById("gmp-progress").value=audioProgress*500;
			document.getElementById("time-total").innerText=formatSeconds(document.getElementById("gmp-audio").duration);
			document.getElementById("time-now").innerText=formatSeconds(document.getElementById("gmp-audio").currentTime);
			document.getElementById("gmp-progress").style="background:linear-gradient(to right, #1E9FFF 0%,#1E9FFF calc("+ audioProgress*100 +"% + 0px),var(--progressBackgroundColor) calc("+ audioProgress*100 +"% + 1px),var(--progressBackgroundColor) 100%)";
		}
	},
	"reloadPlayer":function(){//重载播放器
		document.getElementById("gmp-audio").src=getUrl(playList[nowPlaying]);
		document.title="正在播放："+document.querySelector(".gmp-list[count^='"+nowPlaying+"'] filename").innerText+"丨"+GMP_CONFIG["SITE_NAME"];
		gmp.play();
	},
	"startPlay":function(ele,songcount){//播放特定歌曲操作
		if(songcount){
			ele=document.querySelector(".gmp-list[count^='"+ele+"']");
			setTimeout(function(){ele.scrollIntoView({block:"center",behavior:"smooth"})},200);
		}
		if(document.getElementsByClassName("playing")[0]){document.getElementsByClassName("playing")[0].classList.remove("playing");}
		ele.classList.add("playing");
		nowPlaying=Number(ele.getAttribute("count"));
		gmp.reloadPlayer();
	},
	"switchMode":function(mode,ele){
		playMode=mode;
		document.getElementById(mode).style.display="inline-block";
		ele.style.display="none";
	},
	"previous":function(){
		playListLength=playList.length-1;
		if(playMode=="random"){
			var songId=Math.round(Math.random()*playListLength);
			gmp.startPlay(songId,true);
		}else if(nowPlaying==0){
			gmp.startPlay(playListLength,true);
		}else{
			gmp.startPlay(nowPlaying-1,true);
		}
	},
	"next":function(){
		playListLength=playList.length-1;
		if(playMode=="random"){
			var songId=Math.round(Math.random()*playListLength);
			gmp.startPlay(songId,true);
		}else if(nowPlaying==playListLength){
			gmp.startPlay(0,true);
		}else{
			gmp.startPlay(nowPlaying+1,true);
		}
	},
	"setTimeLimit":function(){
		if(audioTimeLimit){clearTimeout(audioTimeLimit)}
		audioTimeLimit=setTimeout(function(){gmp.pause();},prompt("输入定时停止时间，以分钟为单位：")*60*1000)
	}
}

//获取存储库数据
// fetch("https://api.github.com/repos/"+GMP_CONFIG["REPO"]+"/contents/")
// .then(function(data){return data.json()})
// .then(function(data){
	data=[
		{path:"星间旅行 Interstellar Journey (中文版)",url:"//music.163.com/song/media/outer/url?id=2043169389"},
		{path:"曹操",url:"//music.163.com/song/media/outer/url?id=1926352401"},
		{path:"入海",url:"//music.163.com/song/media/outer/url?id=1449782341"},
		{path:"未来再见",url:"//music.163.com/song/media/outer/url?id=1480344409"},
		{path:"我的天命",url:"//music.163.com/song/media/outer/url?id=1463354845"},
		{path:"Shed A Light (Original Clean Mix)",url:"//music.163.com/song/media/outer/url?id=1998397497"},
		{path:"红山果",url:"//music.163.com/song/media/outer/url?id=27571483"},
		{path:"爱的魔法（Cover 金莎）",url:"//music.163.com/song/media/outer/url?id=498494345"},
		{path:"最炫民族风(Live)",url:"//music.163.com/song/media/outer/url?id=29418062"},
		{path:"荷塘月色",url:"//music.163.com/song/media/outer/url?id=5235635"}
	];
	playList=[];htmlData="";
	data.forEach(gmp.addToPlaylist);
	playList.forEach(gmp.addToHtmlData);
	document.getElementById("playList").innerHTML=htmlData;
	su.closeDialog("#loadingDialog",true);
// })
// .catch(function(err){su.notice("获取存储库信息时出现问题：<br>"+err)})
function getUrl(name) {
	for (let o of data) {
		if (o.path == name) {
			return o.url;
		}
	}
};

//循环获取进度
getProgressInterval = setInterval(function(){gmp.reloadAudioProgress()},200);

//找的轮子 用来格式化秒数时间
function formatSeconds(value) {
    var theTime = parseInt(value);
    var theTime1 = 0;
    var theTime2 = 0;
    if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
            theTime2 = parseInt(theTime1 / 60);
            theTime1 = parseInt(theTime1 % 60);
        }
    }
    var result = ""+parseInt(theTime);
    if(10 > theTime > 0){result = "0" + parseInt(theTime);}
	else{result = "" + parseInt(theTime);}
    if(10 > theTime1 > 0){result = "0" + parseInt(theTime1) + ":" + result;}
	else{result = "" + parseInt(theTime1) + ":" + result;}
    if(theTime2 > 0){result = "" + parseInt(theTime2) + ":" + result;}
    return result;
}
