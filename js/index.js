window.onload = function(){
	// 侧导航
	let cebian = document.getElementsByClassName('banner-left1')[0];
	let lis2 = cebian.getElementsByTagName('li');
	let item = cebian.getElementsByClassName('item');
	for(let i=0;i<lis2.length;i++){
		lis2[i].onmouseover = function(){
			item[i].style.display = 'block';
		}
		lis2[i].onmouseout = function(){
			item[i].style.display = 'none';
		}
	}
	// btn
	let section = $('section')[0];
	let banner = document.getElementsByClassName('banner')[0];
	let lis1 = banner.getElementsByTagName('li'); 
	let btns = document.getElementsByClassName('btn-list')[0];
	let lis = btns.getElementsByTagName('li');
	let lefts = $('.banner-left',section)[0];
	let rights = $('.banner-right',section)[0];
	console.log(rights);
	// let now = 0;
	// for(let i=0;i<lis.length;i++){
	// 	lis[i].onclick = function(){
	// 		console.log(i);
	// 		lis1[now].style.display = 'none';
 //            lis1[i].style.display = 'block';
	// 		now = i;
	// 	}
	// }

		for(let i=0;i<lis.length;i++){
			lis[i].onclick = function(){
				for(let j=0;j<lis1.length;j++){
					lis1[j].style.display = 'none';
					lis[j].style.background = '#98979B';
				}
				lis1[i].style.display = 'block';
				lis[i].style.background = '#fff';
				num = i;
			}
		}

		lefts.onclick = function(){
			moveL();
		}
		rights.onclick = function(){
			move();
		}

		let num = 0;
        let t;
        t = setInterval(move,1000);
        section.onmouseover = function(){
        	clearInterval(t);
        }
        section.onmouseout = function(){
        	t = setInterval(move,1000);
        }

        function move(){
        	num++;
        	if(num == lis1.length){
        		num = 0;
        	}
        	for(let i=0;i<lis1.length;i++){
        		lis1[i].style.display = 'none';
				lis[i].style.background = '#98979B';
			}
			lis1[num].style.display = 'block';
			lis[num].style.background = '#fff';

        	}

        function moveL(){
        	num--;
        	if(num < 0){
        		num = lis1.length-1;
        	}
        	for(let i=0;i<lis1.length;i++){
        		lis1[i].style.display = 'none';
				lis[i].style.background = '#98979B';
			}
			lis1[num].style.display = 'block';
			lis[num].style.background = '#fff';

        	}
}