/*
* @Author: gf880623
* @Date:   2018-09-15 18:09:48
* @Last Modified by:   gf880623
* @Last Modified time: 2018-09-16 15:04:32
*/
$(function(){
	let zhiwenan=$(".zhiwen .zhi");
	let ban=$(".ban");
	let zhi=$(".zhiwen");
	let zhifu=$(".zhifu");
	console.log(ban,zhiwenan)
	zhiwenan.click(function(){
		zhi.css("display","none");
		ban.slideDown("slow");
	})
	zhifu.click(function(){
		ban.slideUp("slow");
	})
})