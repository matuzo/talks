
document.querySelector('.page-count_total').textContent = document.querySelectorAll('.slide').length;

if(location.hash === '') {
	document.querySelector('.slide:first-child').classList.add('is-visible');
	history.pushState(null, null, "#"+document.querySelector('.is-visible').getAttribute('id').toLowerCase());
} else {
	document.querySelector(location.hash).classList.add('is-visible');
}

setCurrentSlide(document.querySelector('.slide.is-visible'));


document.addEventListener("keydown", function(e) {
	console.log(e.keyCode)

	var currentSlide = document.querySelector('.slide.is-visible');

	if(e.keyCode === 37) {
		console.log("links")

		changeSlide(currentSlide, currentSlide.previousElementSibling);


	}

	if(e.keyCode === 39) {
		console.log("rechts")

		changeSlide(currentSlide, currentSlide.nextElementSibling);
	}
});

function changeSlide(current,next) {
	if(next !== null) {
		current.classList.remove('is-visible');
		next.classList.add('is-visible');
		setCurrentSlide(next);

		updateURL(location.href.split('#')[0].split(location.host+'/')[1]+'#'+next.getAttribute('id'), next.getAttribute('data-title'))
	}
}



function setCurrentSlide(elem) {
	document.querySelector('.page-count_current').textContent = indexInParent(elem) + 1;

}

function updateURL(e, t) {
    history.pushState({
        state: 1,
        path: e
    }, "Front-End Performance - " + t, "/" + e)
}

function indexInParent(node) {
    var children = node.parentNode.childNodes;
    var num = 0;
    for (var i=0; i<children.length; i++) {
         if (children[i]==node) return num;
         if (children[i].nodeType==1) num++;
    }
    return -1;
}


  WebFontConfig = {
    google: { families: [ 'Shadows+Into+Light::latin', 'Hind:400,600:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 