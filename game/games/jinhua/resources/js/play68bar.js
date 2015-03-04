function shareFriend() {
	WeixinJSBridge.invoke("sendAppMessage", {
		appid: appid,
		img_url: imgUrl,
		img_width: "200",
		img_height: "200",
		link: lineLink,
		desc: descContent,
		title: shareTitle
	},
	function(e) {})
}
function shareTimeline() {
	WeixinJSBridge.invoke("shareTimeline", {
		img_url: imgUrl,
		img_width: "200",
		img_height: "200",
		link: lineLink,
		desc: descContent,
		title: shareTitle
	},
	function(e) {})
}
function shareWeibo() {
	WeixinJSBridge.invoke("shareWeibo", {
		img_url: imgUrl,
		content: shareTitle + " " + descContent,
		url: lineLink
	},
	function(e) {})
}
function isWeixin() {
	var e = navigator.userAgent.toLowerCase();
	if (e.match(/MicroMessenger/i) == "micromessenger") {
		return true
	} else {
		return false
	}
}
function toggle(e) {
	var t = document.getElementById(e);
	var n = document.getElementById("arrow");
	var r = t.getAttribute("class");
	if (r == "hide") {
		t.setAttribute("class", "show");
		delay(n, RESOURCE_IMG_PATH + "arrowright.png", 400)
	} else {
		t.setAttribute("class", "hide");
		delay(n, RESOURCE_IMG_PATH + "arrowleft.png", 400)
	}
}
function delay(e, t, n) {
	window.setTimeout(function() {
		e.setAttribute("src", t)
	},
	n)
}
function show_share() {
	wxqrP3.innerHTML = "&quot;" + shareTitle + "&quot;";
	wxqrImg.src = imgUrl;
	config_jiathis_config();
	if (isWeixin() == true) {
		document.getElementById("share-wx").style.display = "block"
	} else {
		document.getElementById("wx-qr").style.display = "block"
	}
	toggle("play68box")
}
function closeshare() {
	document.getElementById("share-wx").style.display = "none"
}
function closewx() {
	document.getElementById("wx-qr").style.display = "none"
}
function addShareWX() {
	var e = document.createElement("div");
	e.id = "share-wx";
	e.onclick = closeshare;
	document.body.appendChild(e);
	var t = document.createElement("p");
	t.style.cssText = "text-align:right;padding-left:10px;";
	e.appendChild(t);
	var n = document.createElement("img");
	n.src = RESOURCE_IMG_PATH + "share.png";
	n.id = "share-wx-img";
	n.style.cssText = "max-width:280px;padding-right:25px;";
	t.appendChild(n);
	addShareButtons(e)
}
function addWXQR() {
	var e = document.createElement("div");
	e.style.cssText = "background:rgba(0,0,0,0.8); position:fixed;top:0px; left:0px; width:100%; height:" + document.height + "px; z-index:10000; display:none;";
	e.id = "wx-qr";
	e.onclick = closewx;
	document.body.appendChild(e);
	wxqrP1 = document.createElement("p");
	wxqrP1.style.cssText = "text-align:center;width:220px;color:#fff;margin:50px auto 0 auto;font: bold 16px Arial, Helvetica, Microsoft Yahei, 微软雅黑, STXihei, 华文细黑, sans-serif";
	wxqrP1.innerHTML = "分享给朋友一起玩！";
	e.appendChild(wxqrP1);
	addShareButtons(e)
}
function addShareButtons(e) {
	var t = document.createElement("p");
	t.style.cssText = "text-align:center";
	e.appendChild(t);
	wxqrImg = document.createElement("img");
	wxqrImg.src = imgUrl;
	wxqrImg.id = "wx-qr-img";
	wxqrImg.style.cssText = "max-width:75px";
	if (!HORIZONTAL || !isMobile()) {
		t.appendChild(wxqrImg)
	}
	wxqrP3 = document.createElement("p");
	var n = "210px";
	if (HORIZONTAL == true) {
		n = "400px"
	}
	wxqrP3.style.cssText = "text-align:center;width:" + n + ";color:#fff;padding-top:5px;margin:0 auto;font: bold 20px Arial, Helvetica, Microsoft Yahei, 微软雅黑, STXihei, 华文细黑, sans-serif";
	wxqrP3.innerHTML = "&quot;" + shareTitle + "&quot;";
	e.appendChild(wxqrP3);
	wxqrP4 = document.createElement("p");
	if (!isMobile()) {
		wxqrP4.style.cssText = "text-align:center;width:265px;padding-top:20px;margin:0 auto;font: bold 20px Arial, Helvetica, sans-serif"
	} else {
		wxqrP4.style.cssText = "text-align:center;width:212px;padding-top:20px;margin:0 auto;font: bold 20px Arial, Helvetica, sans-serif"
	}
	e.appendChild(wxqrP4);
	var r = document.createElement("div");
	r.className = "jiathis_style_32x32";
	wxqrP4.appendChild(r);
	if (!isMobile()) {
		var i = document.createElement("a");
		i.className = "jiathis_button_weixin";
		i.innerHTML = "&nbsp";
		r.appendChild(i)
	}
	var s = document.createElement("a");
	s.className = "jiathis_button_tsina";
	s.innerHTML = "&nbsp";
	r.appendChild(s);
	var o = document.createElement("a");
	o.className = "jiathis_button_qzone";
	o.innerHTML = "&nbsp";
	r.appendChild(o);
	var u = document.createElement("a");
	u.className = "jiathis_button_tqq";
	u.innerHTML = "&nbsp";
	r.appendChild(u);
	var a = document.createElement("a");
	a.className = "jiathis_button_renren";
	a.innerHTML = "&nbsp";
	r.appendChild(a);
	var f = document.createElement("script");
	f.type = "text/javascript";
	f.src = "http://v3.jiathis.com/code/jia.js?uid=1369279689390802";
	f.charset = "utf-8";
	document.body.appendChild(f);
	config_jiathis_config()
}
function config_jiathis_config() {
	jiathis_config = {
		summary: descContent,
		title: shareTitle + " #小贱鸡小游戏#",
		url: lineLink,
		pic: imgUrl,
		ralateuid: {
			tsina: "5133079826"
		},
		shortUrl: false,
		hideMore: true
	}
}
function addSidebar() {
	var e = document.createElement("div");
	e.id = "play68box";
	e.className = "hide";
	document.body.appendChild(e);
	var t = document.createElement("ul");
	t.id = "tab";
	e.appendChild(t);
	var n = document.createElement("li");
	t.appendChild(n);
	var r = document.createElement("img");
	r.id = "arrow";
	r.onclick = function() {
		toggle("play68box")
	};
	r.src = RESOURCE_IMG_PATH + "arrowleft.png";
	n.appendChild(r);
	var i = document.createElement("div");
	i.id = "links";
	e.appendChild(i);
	var s = document.createElement("div");
	s.id = "deco";
	i.appendChild(s);
	var o = document.createElement("img");
	o.src = RESOURCE_IMG_PATH + "play68.png";
	o.style.cssText = "margin:0 15px; width:71px";
	s.appendChild(o);
	var u = document.createElement("div");
	u.className = "bt";
	s.appendChild(u);
	var a = document.createElement("a");
	a.onclick = function() {
		toggle("play68box")
	};
	a.innerHTML = "继续游戏";
	u.appendChild(a);
	var f = document.createElement("div");
	f.className = "bt";
	s.appendChild(f);
	var l = document.createElement("a");
	l.onclick = show_share;
	l.innerHTML = "分享";
	f.appendChild(l);
	var c = document.createElement("div");
	c.className = "bt";
	s.appendChild(c);
	var h = document.createElement("a");
	h.href = HOME_PATH;
	h.innerHTML = "更多游戏";
	c.appendChild(h)
}

console.log(getCookie("num"));
if (getCookie("num")) {
		var nn = parseInt(getCookie("num"));
		setCookie("num", ++nn);
	} else {
		setCookie("num", 1);
	}
	function getCookie(name) 
	{ 
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); 
		if(arr=document.cookie.match(reg)) return unescape(arr[2]); 
		else return null; 
	} 
	function setCookie(name, value) {
		var Days = 30;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value) + ";expires" + exp.toGMTString();
	}
	if (getCookie("num") == 4){
		if (confirm("恭喜你获得一次大转盘抽奖机会,是否现在进入抽奖?\n选择确定 - 进入抽奖\n选择取消 - 留在本页")){
			window.location.href="http://wxapp2.duapp.com/zhuan-index-api-6666.html";
		}
	}

	
function isMobile() {
	return navigator.userAgent.match(/android|iphone|ipod|blackberry|meego|symbianos|windowsphone|ucbrowser/i)
}
function isIOS() {
	return navigator.userAgent.match(/iphone|ipod|ios/i)
}
var HOME_PATH = HOME_PATH || "http://345.gd/",
RESOURCE_IMG_PATH = RESOURCE_IMG_PATH || "../resources/images/",
HORIZONTAL = HORIZONTAL || false,
COVER_SHOW_TIME = COVER_SHOW_TIME || 2e3;
var imgUrl = HOME_PATH + "icons/wxicon.png";
var lineLink = HOME_PATH;
var descContent = "快来跟我一起玩！";
var shareTitle = "最好玩的小游戏就在小贱鸡游戏！";
var appid = "";
document.addEventListener("WeixinJSBridgeReady",
function() {
	WeixinJSBridge.on("menu:share:appmessage",
	function(e) {
		shareFriend()
	});
	WeixinJSBridge.on("menu:share:timeline",
	function(e) {
		shareTimeline()
	});
	WeixinJSBridge.on("menu:share:weibo",
	function(e) {
		shareWeibo()
	});
	if (HORIZONTAL == true) {
		WeixinJSBridge.call("hideToolbar")
	}
},
false); (function() {
	function n() {
		window.scroll(0, 0);
		var e;
		if (window.orientation == 0 || window.orientation == 180) {
			e = false
		} else if (window.orientation == -90 || window.orientation == 90) {
			e = true
		}
		if (e == HORIZONTAL) {
			t.style.display = "none"
		} else {
			setTimeout(function() {
				r();
				t.style.width = window.innerWidth + "px";
				t.style.display = "block"
			},
			isIOS() ? 0 : 600)
		}
		if (HORIZONTAL == true && isWeixin() && !isIOS()) {
			WeixinJSBridge.call("hideToolbar")
		}
	}
	function r() {
		e.style.height = window.innerHeight + "px";
		e.style.width = window.innerWidth + "px";
		t.style.height = window.innerHeight + "px"
	}
	if (typeof play68_init == "function") {
		play68_init()
	}
	if (!isMobile()) return;
	var e = document.createElement("div");
	e.style.cssText = "position:absolute;z-index:1000000;left:0;top:0;background:#e9573f url(" + RESOURCE_IMG_PATH + "cover.png) no-repeat center center;background-size: 50%;width:" + window.innerWidth + "px;height:" + Math.max(window.innerHeight, window.document.documentElement.offsetHeight) + "px";
	e.className = "common_cover";
	document.body.appendChild(e);
	setTimeout(function() {
		e.parentNode.removeChild(e)
	},
	COVER_SHOW_TIME);
	document.addEventListener("touchmove",
	function(e) {
		e.preventDefault()
	},
	false);
	var t = document.createElement("div");
	t.className = "common_notice";
	t.style.cssText = "position:absolute;z-index:999999;left:0;top:0;background:#e9573f url(" + RESOURCE_IMG_PATH + "rotate_tip.png) no-repeat center center;background-size: 50%;";
	document.body.appendChild(t);
	window.addEventListener("orientationchange", n);
	window.addEventListener("load", n);
	window.addEventListener("scroll", r)
})();
document.oncontextmenu = function() {
	return false
};

if (isWeixin()) {
	addShareWX()
} else {
	addWXQR()
}
addSidebar();
if (getCookie("num") != 3){
	window.onbeforeunload=function(){return"离开此页面将会退出游戏哦"}
}