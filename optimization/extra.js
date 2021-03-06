/**
 * wp工具包系列：额外功能加载
 * 功能1：右下角工具栏挂件，开发者：我自己，版本：2.1.1
 * 功能2：左下角Live2D动画，开发者：moedog.org，版本：1.7
 */
/**
 * 当前时间（小时）
 */
const hour = new Date().getHours();
/**
 * HTML/CSS资源加载
 */
var resLoaders = {
	/**
	 * 加载HTML
	 * @param {string} str
	 * @param {{}} attr
	 */
	addHtml(str, attr) {
		var h = document.createElement("div");
		h.innerHTML = str;
		Object.keys(attr).forEach(function (i) {
			h.setAttribute(i, attr[i]);
		});
		document.body.appendChild(h);
	},
	/**
	 * 加载内联CSS
	 * @param {string} str
	 */
	addCss(str) {
		var c = document.createElement("style");
		c.innerHTML = str;
		document.head.appendChild(c);
	},
};
/**
 * 工具栏挂件
 */
(function (op) {
	var tb_html =
			'<div class="customize-toolbar-pic"><div class="customize-toolbar-topline"></div><div class="customize-toolbar-topdot"></div><div class="customize-toolbar-core"></div></div><div class="customize-toolbar-menu"><div class="customize-toolbar-icon-set customize-toolbar-hide"><div class="customize-toolbar-icon" data-func="bing-wallpaper"><div class="customize-toolbar-icon-func" aria-label="change background image to today’s bing image"><i class="fa fa-paint-brush" aria-hidden="false"></i></div><div class="customize-toolbar-icon-tip">更换壁纸为Bing美图</div></div><div class="customize-toolbar-icon" data-func="bgm-controller"><div class="customize-toolbar-icon-func" aria-label="play or pause the BGM"><i class="fa fa-play" aria-hidden="false"></i></div><div class="customize-toolbar-icon-tip">播放背景音乐</div></div><div class="customize-toolbar-icon" data-func="shift-theme"><div class="customize-toolbar-icon-func" aria-label="use day or night theme"><i class="" aria-hidden="false"></i></div><div class="customize-toolbar-icon-tip"></div></div><div class="customize-toolbar-icon" data-func="back-to-top"><div class="customize-toolbar-icon-func" aria-label="go back to the top"><i class="fa fa-arrow-up" aria-hidden="false"></i></div><div class="customize-toolbar-icon-tip">返回顶部</div></div><div class="customize-toolbar-icon" data-func="hide-menu"><div class="customize-toolbar-icon-func" aria-label="close the menu"><i class="fa fa-angle-right" aria-hidden="false"></i></div><div class="customize-toolbar-icon-tip">隐藏菜单</div></div></div><div class="customize-toolbar-blank"><div class="customize-toolbar-blank-bg"><i class="" aria-hidden="true"></i></div><div class="customize-toolbar-blank-tip"><div class="customize-toolbar-hide-tip"><div>单击收起/展开菜单</div></div></div></div></div>',
		tb_css =
			"body.customize-wallpaper-bg-start{background-position-x:100vw}body.customize-wallpaper-bg-end{background-position-x:center}div[id^=customize-toolbar]{transition:all .5s linear;position:fixed;width:200px;height:200px;bottom:2px;right:-2px;opacity:1;--tb-bottom:162px}.customize-toolbar-icon-func.customize-toolbar-icon-clicking i{text-shadow:0 0 2px #666}.customize-toolbar-pic-move{animation:rotate-y 4s linear infinite normal;transform-origin:50% 50%}.customize-toolbar-hide{opacity:0;transform:translateX(10px)}.customize-toolbar-hide-all{right:-160px}.customize-toolbar-hide-tip{transform:translateY(205px);opacity:0}.customize-toolbar-pic-bg-move{animation:rotate-own 4s linear infinite normal;transform-origin:50% 50%}@keyframes rotate-y{0%{transform:rotateY(0)}25%{transform:rotateY(90deg)}50%{transform:rotateY(180deg)}75%{transform:rotateY(270deg)}100%{transform:rotateY(360deg)}}@keyframes rotate-own{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(180deg)}75%{transform:rotate(270deg)}100%{transform:rotate(360deg)}}.customize-toolbar-core{background-image:var(--tb-bg-img-css);background-repeat:no-repeat;background-position:center;background-size:cover;width:160px;height:160px;margin:20px}.customize-toolbar-topline{width:2px;height:calc(100vh - var(--tb-bottom));background:#000;position:absolute;bottom:var(--tb-bottom);left:100px}.customize-toolbar-topdot{position:absolute;left:96.5px;bottom:var(--tb-bottom);width:8px;height:8px;background-color:var(--tb-font-color);border:1px solid #000;border-radius:50%;z-index:2}.customize-toolbar-menu{position:absolute;width:250px;height:250px;top:-50px;left:-50px;display:flex;justify-content:flex-end;align-items:flex-end;border-radius:50%}.customize-toolbar-icon-set{position:inherit;left:0;width:150px;height:250px;display:flex;flex-direction:column;justify-content:space-between;align-items:center;transition:all .5s linear;bottom:0}.customize-toolbar-icon{position:relative;border-radius:50%}.customize-toolbar-icon i{text-shadow:1px 1px 1px #666;cursor:pointer!important}.customize-toolbar-icon:nth-child(1){right:-60px;top:5px}.customize-toolbar-icon:nth-child(2){right:30px}.customize-toolbar-icon:nth-child(3){right:55px}.customize-toolbar-icon:nth-child(4){right:55px}.customize-toolbar-icon:nth-child(5){right:30px}.customize-toolbar-icon:nth-child(5) i{font-weight:700}.customize-toolbar-icon-func,.customize-toolbar-icon-tip{color:var(--tb-font-color);border-color:var(--tb-border-shadow-color);background:var(--tb-bg-color);box-sizing:border-box;border-style:solid;transition:all .5s linear}.customize-toolbar-icon-func{width:30px;height:30px;border-width:2px;border-radius:50%;line-height:26px;text-align:center;box-shadow:0 0 5px var(--tb-border-shadow-color);cursor:pointer!important}.customize-toolbar-icon-func.customize-toolbar-icon-clicking,.customize-toolbar-icon-func:hover{background:var(--tb-bg-hover-color);color:var(--tb-bg-color)}.customize-toolbar-icon-func:hover+.customize-toolbar-icon-tip{opacity:1;right:40px}.customize-toolbar-icon-tip{right:100px;bottom:0;position:absolute;white-space:nowrap;font-size:.85rem;line-height:28px;padding:0 8px;font-family:Calibri,sans-serif;letter-spacing:.5px;border-radius:5px;border-width:1px;transform:none;box-shadow:0 0 6px #333;opacity:0}.customize-toolbar-icon:nth-child(1) .customize-toolbar-icon-tip{border-top-left-radius:15px}.customize-toolbar-icon:nth-child(5) .customize-toolbar-icon-tip{border-bottom-left-radius:15px}.customize-toolbar-blank{width:200px;height:200px;background:rgba(255,255,255,.2);border-radius:50%;box-shadow:0 0 10px #fff;position:relative}.customize-toolbar-blank>div{width:inherit;height:inherit;position:inherit}.customize-toolbar-blank-bg{font-size:170px;text-align:center;line-height:200px;color:#ffffe0;opacity:.5;z-index:-1}.customize-toolbar-blank-tip{top:-200px;text-align:center}.customize-toolbar-blank-tip>div{display:inline-block;padding:10px;background:#333;color:#eee;border-radius:10px;font-size:.85rem;box-shadow:0 0 5px gray;transition:all 1s linear;position:relative;z-index:2}.customize-toolbar-blank:hover i{animation:rotate-own 4s linear infinite normal}.customize-toolbar-window-mask{position:fixed;height:100%;width:100%;top:0;left:0;z-index:150;background:rgba(128,128,128,.9);color:#333}.customize-toolbar-window-mask>div{position:relative;top:calc(50% - 62px);left:calc(50% - 100px);background:#ccc;width:200px;height:124px;border-radius:10px;box-shadow:0 0 10px #444;display:flex;flex-direction:column;justify-content:center;text-align:center}.customize-toolbar-window-mask-hide{display:none}@media (max-width:800px){div[id^=customize-toolbar]{display:none}}";
	resLoaders.addCss(tb_css);
	var nonce = Math.random().toString().substring(2),
		t = {
			t: {
				o: [
					"播放背景音乐",
					"暂停背景音乐",
					"更换壁纸为Bing美图",
					"换回原来壁纸",
					"使用夜猫子外观",
					"使用日间外观",
				],
				e: ["图像加载失败", "获取图像地址失败"],
			},
			c: {
				v: {
					toolBarHide: "customize-toolbar-hide-all",
					menuHide: "customize-toolbar-hide",
					iconClick: "customize-toolbar-icon-clicking",
					maskHide: "customize-toolbar-window-mask-hide",
				},
				r: {
					picMove: "customize-toolbar-pic-move",
					bgMove: "customize-toolbar-pic-bg-move",
				},
				i: {
					dayIcon: "fa fa-tree",
					dayBg: "fa fa-sun-o",
					nightBgAndIcon: "fa fa-star",
					bgmPlay: "fa fa-play",
					bgmPause: "fa fa-pause",
				},
				w: {
					start: "customize-wallpaper-bg-start",
					end: "customize-wallpaper-bg-end",
				},
				t: { day: "body-bg-day", night: "body-bg-night" },
			},
			d: {
				t: "customize-toolbar-" + nonce,
				s: "customize-toolbar-bgm-" + nonce,
				b: {
					bingImageButton:
						'[data-func="bing-wallpaper"]>div:first-child',
					bgmControlButton:
						'[data-func="bgm-controller"]>div:first-child',
					backToTopButton:
						'[data-func="back-to-top"]>div:first-child',
					closeMenuButton: '[data-func="hide-menu"]>div:first-child',
					shiftThemeButton:
						'[data-func="shift-theme"]>div:first-child',
				},
				p: ".customize-toolbar-core",
				a: ".customize-toolbar-blank",
				m: ".customize-toolbar-icon-set",
				e: ".customize-toolbar-blank-tip>div",
			},
			getDom(s, id = false) {
				return id
					? document.getElementById(s)
					: document.querySelector(s);
			},
			toggleCssClass(d, c, r) {
				r ? d.classList.remove(c) : d.classList.add(c);
			},
			popErrorLog(t1, t2) {
				var l = this.getDom(".customize-toolbar-blank-tip>div");
				l.innerHTML = t1;
				l.classList.remove("customize-toolbar-hide-tip");
				this.switchPicAnimation(true);
				console.error(t2);
				setTimeout(function () {
					l.classList.add("customize-toolbar-hide-tip");
				}, 3e3);
			},
			switchPicAnimation(r) {
				this.toggleCssClass(this.getDom(this.d.p), this.c.r.picMove, r);
			},
			setSiteTheme(t, b) {
				if (t) {
					Object.keys(op.siteTheme.dayTheme.css).forEach(function (
						cssKey
					) {
						b.style.setProperty(
							cssKey,
							op.siteTheme.dayTheme.css[cssKey]
						);
					});
					b.classList.remove(this.c.t.night);
					b.classList.add(this.c.t.day);
				} else {
					Object.keys(op.siteTheme.nightTheme.css).forEach(function (
						cssKey
					) {
						b.style.setProperty(
							cssKey,
							op.siteTheme.nightTheme.css[cssKey]
						);
					});
					b.classList.remove(this.c.t.day);
					b.classList.add(this.c.t.night);
				}
			},
			setBingWallpaper(u) {
				var temp = document.createElement("img"),
					_this = this;
				temp.setAttribute("src", u);
				temp.addEventListener("load", function () {
					var b = document.body;
					if (!b.style.transition) {
						b.style.transition = "background-position-x 2s linear";
					}
					b.classList.add(_this.c.w.start);
					setTimeout(function () {
						b.classList.add(_this.c.w.end);
						b.style.backgroundImage = `url(${u})`;
						_this.getDom(
							_this.d.b.bingImageButton
						).nextElementSibling.innerHTML = _this.t.o[3];
						_this.switchPicAnimation(true);
					}, 2e3);
				});
				temp.addEventListener("error", function () {
					_this.popErrorLog(_this.t.e[0], "load image failed");
				});
			},
			getBingWallpaperFromCache() {
				var localCache = localStorage.getItem("today-bing-image");
				if (localCache) {
					var localObj = JSON.parse(localCache);
					if (
						new Date(localObj.time).getDate() !==
						new Date().getDate()
					) {
						this.getBingWallpaperFromServer();
					} else {
						this.switchPicAnimation(false);
						this.setBingWallpaper(localObj.url, true);
					}
				} else {
					this.getBingWallpaperFromServer();
				}
			},
			getBingWallpaperFromServer() {
				this.switchPicAnimation(false);
				var cusHeader = new Headers();
				cusHeader.append("x-token", op.bingImageApi.token);
				var cusInit = { headers: cusHeader },
					_this = this;
				fetch(op.bingImageApi.url, cusInit)
					.then(function (d) {
						if (d.status !== 200) {
							throw new Error("get image url failed");
						}
						return d.text();
					})
					.then(function (r) {
						_this.setBingWallpaper(r, true);
						return r;
					})
					.then(function (d) {
						var s = { url: d, time: new Date().getTime() };
						localStorage.setItem(
							"today-bing-image",
							JSON.stringify(s)
						);
					})
					.catch(function (e) {
						_this.popErrorLog(_this.t.e[1], e);
					});
			},
			backToOriginBackground() {
				var b = document.body,
					_this = this;
				b.classList.remove(_this.c.w.end);
				setTimeout(function () {
					b.style.removeProperty("background-image");
					b.classList.remove(_this.c.w.start);
					_this.getDom(
						_this.d.b.bingImageButton
					).nextElementSibling.innerHTML = _this.t.o[2];
				}, 2e3);
			},
		};
	resLoaders.addHtml(tb_html, { id: t.d.t });
	var au = t.getDom(t.d.b.bgmControlButton),
		tb = t.getDom(t.d.t, true),
		s = t.getDom(t.d.b.shiftThemeButton),
		a = document.createElement("audio");
	Object.keys(t.d.b).forEach(function (btn) {
		var b = t.getDom(t.d.b[btn]);
		b.addEventListener("mousedown", function () {
			b.classList.toggle(t.c.v.iconClick);
		});
		b.addEventListener("mouseup", function () {
			b.classList.toggle(t.c.v.iconClick);
		});
	});
	t.getDom(t.d.b.backToTopButton).addEventListener("click", function () {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});
	t.getDom(t.d.b.closeMenuButton).addEventListener("click", function () {
		t.getDom(t.d.m).classList.add(t.c.v.menuHide);
	});
	t.getDom(t.d.b.bingImageButton).addEventListener("click", function () {
		document.body.style.backgroundImage
			? t.backToOriginBackground()
			: t.getBingWallpaperFromCache();
	});
	t.getDom(t.d.a).addEventListener("click", function (e) {
		e.stopPropagation();
		t.getDom(t.d.m).classList.toggle(t.c.v.menuHide);
	});
	window.addEventListener("load", function () {
		t.getDom(t.d.m).classList.toggle(t.c.v.menuHide);
		var l = t.getDom(".customize-toolbar-blank-tip>div");
		l.classList.remove("customize-toolbar-hide-tip");
		setTimeout(function () {
			l.classList.add("customize-toolbar-hide-tip");
		}, 1e4);
	});
	s.addEventListener("click", function () {
		var b = document.body;
		if (b.classList.contains(t.c.t.day)) {
			t.setSiteTheme(0, b);
			s.getElementsByTagName("i")[0].setAttribute("class", t.c.i.dayIcon);
			s.nextElementSibling.innerHTML = t.t.o[5];
			localStorage.setItem("preferred-theme", "n");
		} else {
			t.setSiteTheme(1, b);
			s.getElementsByTagName("i")[0].setAttribute(
				"class",
				t.c.i.nightBgAndIcon
			);
			s.nextElementSibling.innerHTML = t.t.o[4];
			localStorage.setItem("preferred-theme", "d");
		}
	});
	au.addEventListener("click", function () {
		var d = document.querySelector("audio");
		if (!d.src) {
			d.src = d.getAttribute("data-url");
		}
		if (d.paused || d.played.length === 0) {
			d.play();
			au.getElementsByTagName("i")[0].setAttribute(
				"class",
				t.c.i.bgmPause
			);
			au.nextElementSibling.innerHTML = t.t.o[1];
		} else {
			d.pause();
			au.getElementsByTagName("i")[0].setAttribute(
				"class",
				t.c.i.bgmPlay
			);
			au.nextElementSibling.innerHTML = t.t.o[0];
		}
	});
	a.setAttribute("data-length", op.bgm.length);
	a.setAttribute("data-url", op.bgm.url);
	a.setAttribute("id", t.d.s);
	a.loop = true;
	document.body.appendChild(a);
	Object.keys(op.toolbarTheme).forEach(function (cssKey) {
		tb.style.setProperty("--tb-" + cssKey, op.toolbarTheme[cssKey]);
	});
	var pt = localStorage.getItem("preferred-theme");
	if (hour >= 6 && hour <= 18) {
		if (pt == "n") {
			t.setSiteTheme(0, document.body);
			s.getElementsByTagName("i")[0].setAttribute("class", t.c.i.dayIcon);
			s.nextElementSibling.innerHTML = t.t.o[5];
		} else {
			t.setSiteTheme(1, document.body);
			s.getElementsByTagName("i")[0].setAttribute(
				"class",
				t.c.i.nightBgAndIcon
			);
			s.nextElementSibling.innerHTML = t.t.o[4];
		}
		t.getDom("day-night-theme-image", true).setAttribute(
			"src",
			op.siteTheme.dayTheme.image
		);
		t.getDom(t.d.a)
			.getElementsByTagName("i")[0]
			.setAttribute("class", t.c.i.dayBg);
	} else {
		if (pt == "d") {
			t.setSiteTheme(1, document.body);
			s.getElementsByTagName("i")[0].setAttribute(
				"class",
				t.c.i.nightBgAndIcon
			);
			s.nextElementSibling.innerHTML = t.t.o[4];
		} else {
			t.setSiteTheme(0, document.body);
			s.getElementsByTagName("i")[0].setAttribute("class", t.c.i.dayIcon);
			s.nextElementSibling.innerHTML = t.t.o[5];
		}
		t.getDom("day-night-theme-image", true).setAttribute(
			"src",
			op.siteTheme.nightTheme.image
		);
		t.getDom(t.d.a)
			.getElementsByTagName("i")[0]
			.setAttribute("class", t.c.i.nightBgAndIcon);
	}
})(window.customizeThemeOpt);
/**
 * Live2D动画，与原版相比有删改
 */
(function ($) {
	var l2d = {
			xb:
				"https://www.littlemeteor.me/wp-content/plugins/poster-girl-l2d-2233",
			move: "",
			mobile: "1",
			r18: "",
		},
		l2d_html =
			'<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" width="220" height="250" class="live2d"></canvas><div class="waifu-tool"><span class="fa fa-home"></span><span class="fa fa-comments"></span><span class="fa fa-drivers-license-o"></span><span class="fa fa-street-view"></span><span class="fa fa-camera"></span><span class="fa fa-info-circle"></span><span class="fa fa-close"></span></div></div>',
		l2d_css =
			".waifu{position:fixed;left:0;top:0;width:230px;height:270px;z-index:500;user-select:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none}.waifu-tips{opacity:0;width:220px;height:70px;margin:-20px 5px;padding:5px 7px;border-radius:12px;background-color:#fff;font-size:10px;line-height:20px;color:#555;text-overflow:ellipsis;overflow:hidden;position:absolute;font-family:Raleway;text-shadow:0 0 3px #ccc;border:1px solid #ffb5a1;box-sizing:inherit}.waifu-tool{display:none;color:#aaa;top:50px;right:0;font-size:16px;position:absolute}.waifu:hover .waifu-tool{display:block}.waifu-tool span{display:block;cursor:pointer;color:#5b6c7d;line-height:22px;transition:.2s;-webkit-transition:.2s}.waifu-tool .fa-comments{font-size:19px}.waifu-tool .fa-home,.waifu-tool .fa-info-circle{font-size:20px}.waifu-tool .fa-close,.waifu-tool .fa-street-view{font-size:22px}.waifu-tool span:hover{color:#34495e}.waifu #live2d{position:absolute;cursor:move;left:3%;bottom:0}@media(max-width:800px){.l2d_xb.mh{display:none}.waifu-tips,.waifu-tool{display:none!important}.waifu #live2d{left:0}}";
	resLoaders.addHtml(l2d_html, { class: "l2d_xb mh" });
	resLoaders.addCss(l2d_css);
	$(document).on("copy", function () {
		showMessage("你都复制了些什么呀，转载要记得加上出处哦", 8e3);
	});
	$(".waifu-tool .fa-home").click(function () {
		window.location =
			window.location.protocol + "//" + window.location.hostname + "/";
	});
	var model_p = 22;
	$(".waifu-tool .fa-drivers-license-o").click(function () {
		loadlive2d(
			"live2d",
			l2d.xb +
				"/model/api.php?p=" +
				model_p +
				"&model=rand&r18=" +
				l2d.r18
		);
		if (model_p === 22) {
			model_p = 33;
			showMessage("33援交有点累了，现在该我上场了", 4e3);
		} else {
			model_p = 22;
			showMessage("我又回来了！", 4e3);
		}
	});
	$(".waifu-tool .fa-comments").click(function () {
		showHitokoto();
	});
	$(".waifu-tool .fa-street-view").click(function () {
		if (model_p === 22)
			loadlive2d(
				"live2d",
				l2d.xb + "/model/api.php?p=33&model=rand&r18=" + l2d.r18
			);
		else
			loadlive2d(
				"live2d",
				l2d.xb + "/model/api.php?p=22&model=rand&r18=" + l2d.r18
			);
		showMessage("我的新衣服好看嘛", 4e3);
	});
	$(".waifu-tool .fa-info-circle").click(function () {
		window.open("https://moedog.org/946.html");
	});
	$(".waifu-tool .fa-close").click(function () {
		sessionStorage.setItem("waifu-dsiplay", "none");
		showMessage("愿你有一天能与重要的人重逢", 2e3);
		window.setTimeout(function () {
			$(".waifu").hide();
		}, 1e3);
	});
	$(".waifu-tool .fa-camera").click(function () {
		showMessage("照好了嘛，是不是很可爱呢？", 8e3);
		window.Live2D.captureName = "pic.png";
		window.Live2D.captureFrame = true;
	});
	loadlive2d(
		"live2d",
		l2d.xb + "/model/api.php?p=33&model=rand&r18=" + l2d.r18
	);
	function showHitokoto() {
		$.post("https://api.fczbl.vip/hitokoto/", function (result) {
			showMessage(result);
		});
	}
	function showMessage(a, b) {
		if (b == null) b = 1e4;
		$(".waifu-tips").hide().stop();
		$(".waifu-tips").html(a);
		$(".waifu-tips").fadeTo("10", 1);
		$(".waifu-tips").fadeOut(b);
	}
	var text,
		SiteIndexUrl =
			window.location.protocol + "//" + window.location.hostname + "/";
	if (window.location.href == SiteIndexUrl) {
		if (hour > 23 || hour <= 5) {
			text = "你是夜猫子呀？这么晚还不睡觉，明天起的来嘛";
		} else if (hour > 5 && hour <= 7) {
			text = "早上好！一日之计在于晨，今天又是元气满满的一天";
		} else if (hour > 7 && hour <= 11) {
			text = "上午好！工作顺利嘛，不要久坐，多起来走动走动哦！";
		} else if (hour > 11 && hour <= 14) {
			text = "中午了，工作了一个上午，现在是午餐时间！";
		} else if (hour > 14 && hour <= 17) {
			text = "午后很容易犯困呢，今天的运动目标完成了吗？";
		} else if (hour > 17 && hour <= 19) {
			text = "傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~";
		} else if (hour > 19 && hour <= 21) {
			text = "晚上好，今天过得怎么样？";
		} else if (hour > 21 && hour <= 23) {
			text = "已经这么晚了呀，早点休息吧，晚安~";
		} else {
			text = "嗨~ 快来逗我玩吧！";
		}
	} else {
		if (document.referrer !== "") {
			var referrer = document.createElement("a");
			referrer.href = document.referrer;
			var domain = referrer.hostname.split(".")[1];
			if (window.location.hostname == referrer.hostname) {
				text =
					'欢迎阅读<span style="color:#0099cc;">『' +
					document.title.split(" | ")[0] +
					"』</span>";
			} else if (domain == "baidu") {
				text =
					'Hello! 来自 百度搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『' +
					document.title.split(" | ")[0] +
					"』</span>";
			} else if (domain == "bing") {
				text =
					'Hello! 来自 必应搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『' +
					document.title.split(" | ")[0] +
					"』</span>";
			} else if (domain == "google") {
				text =
					'Hello! 来自 谷歌搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『' +
					document.title.split(" | ")[0] +
					"』</span>";
			} else {
				text =
					'Hello! 来自 <span style="color:#0099cc;">' +
					referrer.hostname +
					"</span> 的朋友";
			}
		} else {
			text =
				'欢迎阅读<span style="color:#0099cc;">『' +
				document.title.split(" | ")[0] +
				"』</span>";
		}
	}
	if (l2d.mobile == 1) {
		$(".waifu").animate({ top: $(window).height() - 250 }, 800);
	} else {
		$(".waifu").animate({ top: $(window).height() - 150 }, 800);
	}
	showMessage(text, 8e3);
	if (l2d.mobile == 1) {
		$(window).resize(function () {
			$(".waifu").css("top", window.innerHeight - 250);
		});
		$("#live2d").mouseover(function () {
			msgs = [
				"你要干嘛呀？",
				"鼠…鼠标放错地方了！",
				"喵喵喵？",
				"萝莉控是什么呀？",
				"怕怕",
				"你看到我的小熊了吗",
			];
			var i = Math.floor(Math.random() * msgs.length);
			showMessage(msgs[i]);
		});
		$(document).ready(function ($) {
			$(".menu-main-search.menu-search-animated").mouseover(function () {
				showMessage("找不到想要的？试试搜索吧！");
			});
			$(
				'#access .menu-search-animated .searchform input[type="search"]'
			).focus(function () {
				showMessage("输入你想搜索的关键词再按Enter键就可以搜索啦!");
			});
			$("#branding,.icon-bread-home").mouseover(function () {
				showMessage("点它就可以回到首页啦！");
			});
			$(".waifu-tool .fa-comments").mouseover(function () {
				showMessage("猜猜我要说些什么？");
			});
			$(".waifu-tool .fa-drivers-license-o").mouseover(function () {
				if (model_p === 22) showMessage("要见见我的姐姐嘛");
				else showMessage("什么？我的服务不好，要33回来？");
			});
			$(".waifu-tool .fa-street-view").mouseover(function () {
				showMessage("喜欢换装play吗？");
			});
			$(".waifu-tool .fa-camera").mouseover(function () {
				showMessage("你要给我拍照呀？一二三～茄子～");
			});
			$(".waifu-tool .fa-info-circle").mouseover(function () {
				showMessage("想知道更多关于我的事么？");
			});
			$(".waifu-tool .fa-close").mouseover(function () {
				showMessage("到了要说再见的时候了吗");
			});
			$(document).on("click", "h2 a", function () {
				showMessage(
					'加载<span style="color:#0099cc;">' +
						$(this).text() +
						"</span>中...请稍候",
					600
				);
			});
			$(document).on("mouseover", "h2 a", function () {
				showMessage(
					'要看看<span style="color:#0099cc;">' +
						$(this).text() +
						"</span>么？"
				);
			});
			$(document).on("mouseover", ".prev", function () {
				showMessage("要翻到上一页吗?");
			});
			$(document).on("mouseover", ".next", function () {
				showMessage("要翻到下一页吗?");
			});
			$(document).on("mouseover", ".kratos-post-content a", function () {
				showMessage(
					'去 <span style="color:#0099cc;">' +
						$(this).text() +
						"</span> 逛逛吧"
				);
			});
			$(document).on("mouseover", "#submit", function () {
				showMessage("呐 首次评论需要审核，请耐心等待哦~");
			});
			$(document).on("mouseover", ".OwO-logo", function () {
				showMessage("要来一发表情吗？");
			});
			$(document).on("mouseover", ".nav-previous", function () {
				showMessage("点它可以后退哦！");
			});
			$(document).on("mouseover", ".nav-next", function () {
				showMessage("点它可以前进哦！");
			});
			$(document).on("mouseover", ".comment-reply-link", function () {
				showMessage("要说点什么吗");
			});
			$(document).on("mouseover", ".wpl-likebox", function () {
				showMessage("我是不是棒棒哒~快给我点赞吧！");
			});
			$(document).on("mouseover", ".must-log-in", function () {
				showMessage("登录才可以继续哦~");
			});
			$(document).on("mouseover", ".Share", function () {
				showMessage("好东西要让更多人知道才行哦");
			});
			$(document).on("click", "#author", function () {
				showMessage("留下你的尊姓大名！");
				$(".waifu").animate(
					{
						top:
							$("#author").offset().top -
							$(window).scrollTop() -
							130,
						left: $("#author").offset().left - 200,
					},
					{ queue: false, duration: 800 }
				);
			});
			$(document).on("click", "#email", function () {
				showMessage("留下你的邮箱，不然就是无头像人士了！");
				$(".waifu").animate(
					{
						top:
							$("#email").offset().top -
							$(window).scrollTop() -
							130,
						left: $("#email").offset().left - 200,
					},
					{ queue: false, duration: 800 }
				);
			});
			$(document).on("click", "#url", function () {
				showMessage("快快告诉我你的家在哪里，好让我去参观参观！");
				$(".waifu").animate(
					{
						top:
							$("#url").offset().top -
							$(window).scrollTop() -
							130,
						left: $("#url").offset().left - 200,
					},
					{ queue: false, duration: 800 }
				);
			});
			$(document).on("click", "#comment", function () {
				showMessage("一定要认真填写喵~");
				$(".waifu").animate(
					{
						top:
							$("#comment").offset().top -
							$(window).scrollTop() -
							90,
						left: $("#comment").offset().left - 170,
					},
					{ queue: false, duration: 800 }
				);
			});
		});
		$(document).ready(function ($) {
			if (l2d.move == 1) {
				window.setInterval(function () {
					var temp = Math.random();
					if (temp > 0.35) {
						showMessage(showHitokoto());
					} else {
						msgs = [
							"乾坤大挪移！",
							"我飘过来了！~",
							"我飘过去了",
							"我得意地飘！~飘！~",
						];
						var i = Math.floor(Math.random() * msgs.length);
						s = [
							0.1,
							0.2,
							0.3,
							0.4,
							0.5,
							0.6,
							0.7,
							0.75,
							-0.1,
							-0.2,
							-0.3,
							-0.4,
							-0.5,
							-0.6,
							-0.7,
							-0.75,
						];
						var i1 = Math.floor(Math.random() * s.length);
						var i2 = Math.floor(Math.random() * s.length);
						$(".waifu").animate(
							{
								left:
									((document.body.offsetWidth - 210) / 2) *
									(1 + s[i1]),
								top:
									window.innerHeight -
									240 -
									((window.innerHeight - 240) / 2) *
										(1 + s[i2]),
							},
							{ duration: 2e3, complete: showMessage(msgs[i]) }
						);
					}
				}, 4e4);
			} else {
				window.setInterval(function () {
					showMessage(showHitokoto());
				}, 45e3);
			}
			var stat_click = 0;
			$("#live2d").click(function () {
				if (!ismove) {
					stat_click++;
					if (stat_click > 6) {
						msgs = [
							"你有完没完呀？",
							"你已经摸我" + stat_click + "次了",
							"非礼呀！救命！",
							"OH，My ladygaga",
							"110吗，这里有个变态一直在摸我(ó﹏ò｡)",
						];
						var i = Math.floor(Math.random() * msgs.length);
					} else {
						msgs = [
							"是…是不小心碰到了吧",
							"我跑呀跑呀跑！~~",
							"再摸的话我可要报警了！⌇●﹏●⌇",
							"别摸我，有什么好摸的！",
							"惹不起你，我还躲不起你么？",
							"不要摸我了，我会告诉老婆来打你的！",
							"干嘛动我呀！小心我咬你！",
						];
						var i = Math.floor(Math.random() * msgs.length);
					}
					s = [
						0.1,
						0.2,
						0.3,
						0.4,
						0.5,
						0.6,
						0.7,
						0.75,
						-0.1,
						-0.2,
						-0.3,
						-0.4,
						-0.5,
						-0.6,
						-0.7,
						-0.75,
					];
					var i1 = Math.floor(Math.random() * s.length);
					var i2 = Math.floor(Math.random() * s.length);
					$(".waifu").animate(
						{
							left:
								((document.body.offsetWidth - 210) / 2) *
								(1 + s[i1]),
							top:
								window.innerHeight -
								240 -
								((window.innerHeight - 240) / 2) * (1 - s[i2]),
						},
						{ duration: 500, complete: showMessage(msgs[i]) }
					);
				} else {
					ismove = false;
				}
			});
		});
		var ismove = false;
		$(document).ready(function ($) {
			var box = $(".waifu")[0];
			var topCount = 20;
			box.onmousedown = function (e) {
				var Ox = e.offsetX;
				var Oy = e.offsetY;
				var Ch = document.documentElement.clientHeight;
				var Cw = document.documentElement.clientWidth;
				document.onmousemove = function (e) {
					var Cx = e.clientX;
					var Cy = e.clientY;
					box.style.left = Cx - Ox + "px";
					box.style.top = Cy - Oy + "px";
					if (box.offsetLeft < 0) {
						box.style.left = 0;
					} else if (box.offsetLeft + box.offsetWidth > Cw) {
						box.style.left = Cw - box.offsetWidth + "px";
					}
					if (box.offsetTop - topCount < 0) {
						box.style.top = topCount + "px";
					} else if (
						box.offsetTop + box.offsetHeight - topCount >
						Ch
					) {
						box.style.top =
							Ch - (box.offsetHeight - topCount) + "px";
					}
					ismove = true;
				};
				document.onmouseup = function (e) {
					document.onmousemove = null;
					document.onmouseup = null;
				};
			};
		});
	}
})(jQuery);
