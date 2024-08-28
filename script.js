const bar = document.querySelector('.bar');
const close = document.querySelector('.close');
const sideNav = document.querySelector('.sideNav');

bar.addEventListener('click',()=>{
	sideNav.classList.add('open');
	close.style.display='block';
	bar.style.display='none'
	close.addEventListener('click',()=>{
		sideNav.classList.remove('open')
		bar.style.display='block'
		close.style.display="none"
	})
});

const block = document.querySelector('#block');
const clear = document.querySelector('.clear');
block.addEventListener('click',()=>{
	clear.classList.toggle('hide');
})