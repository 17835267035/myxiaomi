// function getClass(classname){
// 	if(document.getElementsByClassName){  //换成flase
// 		return document.getElementsByClassName(classname);
// 	}else{
// 		var newarr = [];
// 		var all = document.getElementsByTagName('*');
// 		for(var i=0;i<all.length;i++){
// 			if(all[i].className == classname){
// 				newarr.push(all[i]);
// 			}
// 		}
// 		return newarr;
// 	}
// }

function getClass(classname,ranger){  //ranger是对象
	ranger = ranger ? ranger : document;
	if(document.getElementsByClassName){  //判断兼容性
		return ranger.getElementsByClassName(classname);
	}else{
		var newarr = [];
		var all = ranger.getElementsByTagName('*');
		for(var i=0;i<all.length;i++){
			if(checkClass(arr[i].className,classname)){ //当前元素的类名  要找的类名
				newarr.push(all[i]);
			}
		}
		return newarr;
	}
}
function checkClass(className,classname){
	var arr = className.split(' ');  //转换成数组
	for(var i=0;i<arr.length;i++){
		if(arr[i] == classname){
			return true;
		}
	}
	return false;
}


//$方便获取指定的元素
//$(select)   //字符串
//$('.one')  $('#one')  $('div')   //字符串
//参数说明
//select  字符串  类似于选择器
//1.  首字符是.      className  集合  
//2.          #      id         元素
//3.         标签名  tagName   正则(/^[a-z][a-z1-6]{0,7}$/.test(select))
//                              开头 首字符 第二个字符    出现次数 最少0次  最多7次
//规则：以字符开头[a-z]
//charAt

function $(select,ranger){
	ranger = ranger || document;
	var first = select.charAt(0);
	if(first == '.'){
		// class
		return getClass(select.substring(1),ranger);
	}else if(first == '#'){
		// id
		return document.getElementById(select.substring(1));
	}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
		// tag
		return ranger.getElementsByTagName(select);
	}
}
