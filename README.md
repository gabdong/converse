# CONVERSE - Responsive WEB

## [ViewSite](http://gabdong.dothome.co.kr/converse)

***
CONVERSE의 홈페이지를 반응형으로 제작하였습니다.

미디어쿼리를 사용하여 반응형으로 제작하였으며, jQeury플러그인을 이용하여 gnb토글과 슬라이더를 만들었습니다.

***

## index.js

```javascript
$('.mob_ham_btn').click(function(){
	$('.gnb').stop().slideToggle();
});
$('.slider_images').bxSlider({
	mode: 'horizontal',
	auto: true,
	pause: 3000
});
```
