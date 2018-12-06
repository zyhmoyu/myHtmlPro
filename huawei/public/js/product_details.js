window.onload=function(){
	//小图片移动
	var $leftBtn=$("div.left_img>div.redt>a.left"),
		$rightBtn=$leftBtn.next().next(),
		$ul=$leftBtn.next().children()
	var move=0
	var length=$ul.children().length
	
	$ul.width(`${74*length}`)
	if(length>5){
		var move=0
		$leftBtn.click(function(e){
			e.preventDefault()
			var $left=$(this)
			if(!$left.is(".disabled")){
				move--
				if(5-length <= move){
					$ul.css("margin-left",74*move)
					$rightBtn.removeClass("disabled")
					if(move<=5-length)
						$leftBtn.addClass("disabled")
				}else{
					move++
				}
			}
		})
		$rightBtn.click(function(e){
			e.preventDefault()
			var $right=$(this)
			if(!$right.is(".disabled")){
				move++
				if(move <= length-5 ){
					$ul.css("margin-left",74*move)
					$leftBtn.removeClass("disabled")
					if(0<=move)
						$rightBtn.addClass("disabled")
				}else{
					move--
				}
			}
		})
	}else{
		$rightBtn.addClass("disabled")
		$leftBtn.addClass("disabled")
	}
	//放大镜效果
	var $mask=$("#mask"),
		$smask=$("#super-mask"),
		$lgdiv=$("#div-lg")
	var msize=227,max=450-msize
	$smask.hover(function(){
		$mask.toggleClass("d-none")
		$lgdiv.toggleClass("d-none")
	})
	.mousemove(function(e){
		var top=e.offsetY-msize/2,
			left=e.offsetX-msize/2
		if(top<0) top=0
		else if(top>max) top=max
		if(left<0) left=0
		else if(left>max) left=max
		$mask.css({left,top})+
		$lgdiv.css("background-position",`-${80/45*left}px -${80/45*top}px`)
	})
	//购物车
	var $btnj=$("#pro-skus>div:last-child>div.left>b:first")
	var $btnj2=$btnj.next()
	$btnj.click(function(){
		var $btnj=$(this)
		var num=parseInt($btnj.prev().html())
		num++
		$btnj.prev().html(num)
	})
	$btnj2.click(function(){
		var $btnj=$(this)
		var num=parseInt($btnj.prev().prev().html())
		num--
		if(num>0)
			$btnj.prev().prev().html(num)
	})
//	选择商品
	var $divs=$("#pro-skus>div:lt(3)")
	var $Achosen=$("#pro-skus>div.choose-old>div.right")
	 $divs.on("click","span",function(){
	 	var $span=$(this)
	 	$span.siblings().removeClass("active")
	 	$span.addClass("active")
	 	var $color=$divs.find("span.active>p").html()
	 	var $a=$($divs[1]).find("span.active").html()
	 	var $b=$($divs[2]).find("span.active").html()
	 	$Achosen.html(`${$color}/${$a}/${$b}`)
	})
}