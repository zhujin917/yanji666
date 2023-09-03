var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var menu = document.getElementById("follow-menu");
document.getElementsByTagName("select")[0].onchange = function () {
	switch (this.value) {
		case "chs":
			location.href = "/";
			break;
		case "cht":
			location.href = "/cht";
			break;
		case "en":
			location.href = "/en";
			break;
	}
};
// document.getElementById("follow").onclick = function () {
// 	menu.style.display = document.getElementsByClassName("mask")[0].style.display = "block";
// 	menu.style.left = (document.getElementsByTagName("header")[0].offsetLeft + document.getElementsByTagName("header")[0].offsetWidth / 2 - menu.offsetWidth / 2) + "px";
// 	menu.style.top = (document.getElementById("follow").offsetTop + document.getElementById("follow").offsetHeight / 2 - menu.offsetHeight / 2) + "px";
// };
// document.getElementsByClassName("mask")[0].onclick = function () {
// 	menu.style.opacity = "0";
// 	setTimeout(function () {
// 		document.getElementsByClassName("mask")[0].style.display = menu.style.opacity = menu.style.display = "";
// 	}, 250);
// };
if ((!document.referrer || document.referrer.indexOf("https://www.yangshangzhen.com/") == -1) && !/bot|spider/i.test(navigator.userAgent)) {
	if (navigator.language && location.pathname == "/") {
		switch (lang) {
			case "en-US":
				location.href = "/en";
				break;
			case "zh-TW":
				location.href = "/cht";
				break;
			default:
				document.getElementsByTagName("header")[0].classList.add("animation");
				break;
		}
	} else {
		document.getElementsByTagName("header")[0].classList.add("animation");
	}
}
if (isMobile) {
	document.getElementById("alipay").href = "https://qr.alipay.com/FKX04965KXP0C8G3MUVK28";
}
console.log("%c\u6b22\u8fce\u5149\u4e34\u6768\u5c1a\u81fb\u7684\u4e2a\u4eba\u7f51\u7ad9", [
	"background-color: #4c73be",
	"border-radius: 10px",
	"color: white",
	"font-family: sans-serif",
	"font-size: 16px",
	"line-height: 1.5",
	"padding: 5px 10px",
	"white-space: nowrap"
].join("; ") + ";");


}
/*
     FILE ARCHIVED ON 05:51:54 Sep 27, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:01:33 Sep 03, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 75.863
  exclusion.robots: 0.105
  exclusion.robots.policy: 0.091
  cdx.remote: 0.082
  esindex: 0.013
  LoadShardBlock: 43.623 (3)
  PetaboxLoader3.datanode: 58.338 (4)
  load_resource: 99.684
  PetaboxLoader3.resolve: 41.193
*/