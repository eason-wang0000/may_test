/**
 * 
 * @authors yirsion_wang (yirison000000@163.com)
 * @date    2018-04-11 15:24:15
 * @version $Id$
 */
 //设置为首页
function SetHome(obj, url) {
	try{
		obj.style.behavior = 'url(#default#homepage)';
		obj.SetHomePage(url);

	}catch(e){
		if (window.netscpace) {
			try{
				netscpace.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			}catch(e){
				alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器“about:config”并回车然后将[signed.applets.codebase_principal_surpport]设置为'true'");
			}
		}else{
			alert("抱歉，你所使用的浏览器无法完成此操作\n\n你需要手动将【"+url+"】设置为首页");
		}

	}
}
//设置为收藏
function AddFavorite(title, url) {
	try{
		window.external.addFavorite(url, title);
	}catch(e){
		try{
			window.sidebar.addPanel(title, url, "");
		}catch(e){
			alert("抱歉，你所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
		}
	}
}
//moblie-menu
$('.mobile-menu').click(function(event) {
	
    $('.mobile-box-bg').stop();
    $('.mobile-box-menu').addClass('mobile-box-menu-on');
    $('.mobile-box-nav').addClass('mobile-box-nav-on');
    $('.mobile-box-bg').addClass('mobile-box-bg-on');
    $('.mobile-box-bg').animate({'opacity':'1'}, 500);
});


$('.mobile-left-menu').click(function(event) {
	$('.mobile-box-bg').stop();
    $('.mobile-box-menu').addClass('mobile-box-menu-on');
    $('.mobile-box-nav2').addClass('mobile-box-nav-on');
    $('.mobile-box-bg').addClass('mobile-box-bg-on');
    $('.mobile-box-bg').animate({'opacity':'1'}, 500);
});

$(".mobile-box-menu-return").click(function(event){
	$('.mobile-box-bg').stop();
    $('.mobile-box-menu').removeClass('mobile-box-menu-on');
    $('.mobile-box-nav2').removeClass('mobile-box-nav-on');
    $('.mobile-box-bg').removeClass('mobile-box-bg-on');
    $('.mobile-box-bg').animate({'opacity':'1'}, 500);
});
$(".mobile-box-bg").click(function(event){
	$('.mobile-box-bg').stop();
    $('.mobile-box-menu').removeClass('mobile-box-menu-on');
    $('.mobile-box-nav2').removeClass('mobile-box-nav-on');
    $('.mobile-box-bg').removeClass('mobile-box-bg-on');
    $('.mobile-box-bg').animate({'opacity':'1'}, 500);
});



$(".mobile-box-menu-return").click(function(event){
	$('.mobile-box-bg').stop();
    $('.mobile-box-menu').removeClass('mobile-box-menu-on');
    $('.mobile-box-nav').removeClass('mobile-box-nav-on');
    $('.mobile-box-bg').removeClass('mobile-box-bg-on');
    $('.mobile-box-bg').animate({'opacity':'1'}, 500);
});
$(".mobile-box-bg").click(function(event){
	$('.mobile-box-bg').stop();
    $('.mobile-box-menu').removeClass('mobile-box-menu-on');
    $('.mobile-box-nav').removeClass('mobile-box-nav-on');
    $('.mobile-box-bg').removeClass('mobile-box-bg-on');
    $('.mobile-box-bg').animate({'opacity':'1'}, 500);
});

//移动端点击用户名事件
$(".mobile-login").click(function (event) {
	if ($(".login-return").hasClass("login-return-on")) {
		$(".login-return").removeClass("login-return-on");
	} else {
        $(".login-return").addClass("login-return-on");
	}
})



