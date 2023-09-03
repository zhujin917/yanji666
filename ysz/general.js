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

var
	$_GET = (function () {
		var json = {};
		if (location.search) {
			var parameters = location.search.replace("?", "").split("&");
			for (var i = 0; i < parameters.length; i++) {
				var split = parameters[i].split("=");
				json[split[0]] = decodeURIComponent(split[1]);
			}
		}
		return json;
	})(),
	isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent),
	lang = (function () {
		if (/^(yue|zh)(-cn|-hans(-[a-z]+)?)?$/i.test(navigator.language)) {
			return "zh-CN";
		} else if (navigator.language.startsWith("zh") || navigator.language.startsWith("yue")) {
			return "zh-TW";
		} else {
			return "en-US";
		}
	})();
addEventListener("load", function () {
	var scripts = document.querySelectorAll("script");
	for (var i = 0; i < scripts.length; i++) {
		try {
			document.body.removeChild(scripts[i]);
		} catch (err) { }
	}
	setTimeout(function () {
		(function (i, s, o, g, r, a) {
			i["GoogleAnalyticsObject"] = r;
			i[r] = i[r] || function () {
				(i[r].q = i[r].q || []).push(arguments);
			};
			i[r].l = 1 * new Date();
			a = s.createElement(o);
			a.async = 1;
			a.src = g;
			s.body.appendChild(a);
		})(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
		ga("create", "UA-109975281-7", "auto");
		ga("send", "pageview");
	}, 1);
	document.body.className = document.body.className.replace("preload", "");
});


}
/*
     FILE ARCHIVED ON 05:51:54 Sep 27, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:01:24 Sep 03, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 151.494
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.06
  cdx.remote: 0.057
  esindex: 0.01
  LoadShardBlock: 127.046 (3)
  PetaboxLoader3.datanode: 145.418 (4)
  load_resource: 179.74
  PetaboxLoader3.resolve: 129.174
*/