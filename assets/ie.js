//©YSH，原创代码，转载须注明
window.onload=ie()
function ie(){
var explorer = navigator.userAgent;
if(explorer.search("MSIE") != -1 )
{alert("你的浏览器已经非常旧了，不支持本站的许多特性。请下载本站推荐的浏览器以获得最佳体验。");
window.location.href="https://ysz.rthe.net/browser"
};}