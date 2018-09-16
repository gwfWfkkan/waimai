/*
* @Author: gf880623
* @Date:   2018-09-15 14:59:23
* @Last Modified by:   gf880623
* @Last Modified time: 2018-09-16 15:38:53
*/
window.onload=function(){
	let jia=document.querySelector(".jia");
	let jie=document.querySelector(".jie");
	let shu=document.querySelector(".list .jiashu");
	let balance=document.querySelector(".balance");
	let zhifubox=document.querySelector(".zhifu-box");
	let i=0;
	console.log(jia,jie,shu,balance);
	jia.onclick=function(){
		jie.style.display="block";
		i++;
		shu.innerHTML=i;
		if(i>=2){
			balance.style.backgroundColor="#f95a64";
		}

	}
	jie.onclick=function(){
		i--;
		if(i==0){
			jie.style.display="none";
			shu.style.display="none"
		}
		shu.innerHTML=i;
	}
	balance.onclick=function(){
		zhifubox.style.display="block";
	}

}




