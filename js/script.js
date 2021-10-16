//Mudar cor de barra superior
$(window).scroll(function(){
	
	//guardar numa variável o valor atual do scroll
	var scroll_atual = $(window).scrollTop();
	
	if(scroll_atual > 20 ){
		$('.top-bar').addClass('hidden-bar');
	}else{
		$('.top-bar').removeClass('hidden-bar');
    }
	if(scroll_atual > 20 ){
		$('.logo').addClass('hidden-logo');
	}else{
		$('.logo').removeClass('hidden-logo');
    }
	if(scroll_atual > 20 ){
		$('.section').addClass('hidden-section');
	}else{
		$('.section').removeClass('hidden-section');
    }
	
if(scroll_atual > 360)  { 
		$('.spinner').addClass('spinnerblack');
	}else{
		$('.spinner').removeClass('spinnerblack');
    }
	if(navwrapper.classlist.contains('active')) {
		$('.spinner').removeClass('spinnerblack');
    }
});



		let navwrapper = document.querySelector('.navwrapper'),
			navToogler =  document.querySelector('.nav-toogler')

		navToogler.addEventListener('click', function (event) {
			navwrapper.classList.toggle('active')
		})
