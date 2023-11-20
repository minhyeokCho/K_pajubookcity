$(document).ready(function(){
	$('.btn_site').length && gnbMenu(); //GNB
	$('.family_btn').length && siteBtn(); //Family site버튼
	$('.go_top').length && goTop(); //페이지상단이동
	$('.main_slide').length && mainSlide(); //MAIN 슬라이드
	$('.build_slide').length && buildSlide(); //건축게시판 슬라이드
	$('.sub_tab').length && subTab(); //서브탭
});

function gnbMenu() { //GNB
	var siteButton = $('.btn_site'),
		firstMenu = $('.depth_01:nth-child(1) .btn_menu_01:nth-child(1)')
	siteButton.on('click', function(){
		if(siteButton.hasClass('on')){
			siteButton.removeClass('on')
			$('nav').removeClass('all_menu_active')
		}else {
			siteButton.addClass('on')
			$('.menu_02').removeClass('on')
			$('nav').addClass('all_menu_active')
			firstMenu.focus()
		}
		return false;
	})

	$(document).mouseup(function (e){ /* 닫기 */
		var gnbArea = $('nav');
		if(gnbArea.has(e.target).length === 0 && $('header').has(e.target).length === 0){
			$('nav').removeClass('all_menu_active')
			siteButton.removeClass('on')
		}
	});

	$('.btn_menu_01').on('click', function(){
		var dept_02 = $(this).siblings()
		if(!$('nav').hasClass('all_menu_active')){
			if(dept_02.hasClass('on')){
				dept_02.removeClass('on')
			}else{
				$('.menu_02').removeClass('on')
				dept_02.addClass('on')
			}
		}
		return false;
	})

	$(document).mouseup(function (e){ /* 닫기 */
		var subMenu = $('.menu_02');
		if($('nav').has(e.target).length === 0){
			$('.menu_02').removeClass('on')
		}
	});
}

function siteBtn() { //Family site버튼
	$('.family_btn').on('click', function(e){
		e.preventDefault();
		$(this).siblings().toggleClass('on')
	})

	$(document).mouseup(function (e){ /* 닫기 */
		var siteArea = $('.site_li');
		if(siteArea.has(e.target).length === 0){
			$('.site_li ul').removeClass('on')
		}
	});
}

function goTop(){ //페이지상단이동
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 0){
			$('.go_top').addClass('active')
		}else{
			$('.go_top').removeClass('active')
		}
	});

	$('.go_top').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
}

function mainSlide() { //MAIN 슬라이드
	var mainSlide = new Swiper('.main_slide', {
		effect : 'fade',
		fadeEffect: {
		crossFade: true
		},
		slidesPerView : '1',
		loop:true,
		loopAdditionalSlides : 1,
		touchRatio: 0,
		speed:2500,
		ally: false,
		autoplay:{
			delay:7000,
			disableOnInteraction:false
		},
		pagination: {
			el: ".swiper_bullet",
			type : 'bullets',
			clickable: true,
		},
		on: {
			slideChangeTransitionStart : function() {
				$('.main_visual .item').removeClass('effect')
				$('.main_visual .swiper-slide-active.item').addClass('effect')
			},
		},
	});
}

function buildSlide() { //건축게시판 슬라이드
	var buildSlide = new Swiper('.build_slide', {
		effect : 'fade',
		fadeEffect: {
			crossFade: true
		},
		slidesPerView : '1',
		loop:true,
		loopAdditionalSlides : 1,
		ally: false,
		speed:1000,
		autoplay:{
			delay:3000,
			disableOnInteraction:false
		},

	});

	$('.pause').on('click',function(){ //정지&재생 버튼
		buildSlide.autoplay.stop();
		return false;
	});
	$('.play').on('click',function(){ //정지&재생 버튼
		buildSlide.autoplay.start();
		return false;
	});
}

function subTab() { //서브탭
	var subTab = new Swiper('.sub_tab', {
		slidesPerView : 'auto',
	});
}