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
    $('#contact_subject').val($(this).attr('id'));
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/*
 * COntact form.
 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
document.querySelector("#contact_form").addEventListener("submit", function(e){  
  /*
   * Validation.
   */
  let firstname = document.getElementById('contact_firstname').value;
  let lastname = document.getElementById('contact_lastname').value;
  let subject = document.getElementById('contact_subject').value;
  let email = document.getElementById('contact_email').value;
  let message = document.getElementById('contact_message').value;

  let invalid = [];

  if (firstname === '') {
    invalid.push('prénom');

  }
  if (lastname === '') {
    invalid.push('nom');
  }
  if (email === '') {
    invalid.push('e-mail');
  } else {
    if (!validateEmail(email)) {
      invalid.push('format e-mail');
    }
  }
  if (message === '') {
    invalid.push('message');
  }

  /*
   * Some fields are invalid, display
   * error.
   */
  if (invalid.length > 0) {
    document.getElementById('invalid_message').classList.remove("hidden");
    document.getElementById('invalid').innerHTML = invalid.join(', ');
    e.preventDefault()
    return;
  } else {
    document.getElementById('invalid_message').classList.add("hidden");
  }

  document.getElementById('contact_form').classList.add('sent');

  /*
   * Send e-mail.
   */
  // Email.send({
  //     SecureToken : "ca2ef19a-5b0a-49a7-8958-704206d03675",
  //     To : "contact.nathalie.desvilles@gmail.com",
  //     From : "contact.nathalie.desvilles@gmail.com",
  //     Subject : "Formulaire de contact : " + subject,
  //     Body : "<b>Nom</b> : <br /><b>Prénom</b> : <br /><b>E-mail</b> : <br /><br /><b>Message</b> : "
  // }).then(
  //   message => alert(message)
  // );
  /*
   * Prevent form from submitting.
   */
  e.preventDefault()
});

/*
 * Carousel.
 */
new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  autoplay: 20000,
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

console.log("Website made with ❤️ by Damien Chatry")
console.log("https://github.com/dchatry")


