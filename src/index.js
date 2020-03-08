import $ from "jquery";
import Glide from '@glidejs/glide'
import TypeIt from 'typeit';
import { shuffle } from 'underscore'

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 100
    }, 1000);
});


$(document).on('click', '.course', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('#contact').offset().top + 350
    }, 1000);
    $('#subject').val($(this).attr('id'));
});

/*
 * Carousel.
 */
new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  autoplay: 7000,
  focusAt: 'center',
  perView: 1,
})
.mount();

/*
 * Greetings.
 */
var greetings = [
  "Hi!",
  "Hello!",
  "Bonjour !",
  "¡Hola!",
  "¡Buenos días!",
];

var typeIt = new TypeIt('.text-hello', {
  lifeLike: true,
  loop: true,
  speed: 140,
  loopDelay: 1000,
  cursor: false,
})


var sentences = shuffle(greetings);

for (var s in sentences) {
  typeIt.type(sentences[s])
    .pause(3000)
    .delete();
}

typeIt.go();

/*
 * Animations.
 */
var element = document.getElementById('flag-animate');
var elementHeight = element.clientHeight;

document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  var scrollPosition = scrollY + windowHeight;
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

  if (scrollPosition - 200 > elementPosition) {
    return true;
  }
  
  return false;
}

function animate() {
  if (inView()) {
    var flags = document.getElementsByClassName('flag-animate');
    for (var i = 0; i < flags.length; i++) {
       flags.item(i).classList.add('animate');
    }
  }
}


