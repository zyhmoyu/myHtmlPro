var navs = document.getElementsByClassName("nav");
for(var i= 0;i<navs.length;i++) {
	function navcc(nav) {
		var oul = nav.children[0];
		var li = oul.children;
		var navwidth = nav.offsetWidth;
		
		for(var i = 0; i < li.length; i++) {
			li[i].style.left = navwidth * i + "px";
		}

		var aleft = oul.style.left;
		aleft = aleft.split("");
		aleft.pop();
		aleft.pop();
		aleft = aleft.join("");
		aleft = Number(aleft) + -navwidth;
		if(aleft == -navwidth * li.length) {
			aleft = 0;
		}
		oul.style.left = aleft + "px";
	}
	setInterval('navcc(navs['+i+'])', 3000);
}
