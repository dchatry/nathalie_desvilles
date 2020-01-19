import Glide from '@glidejs/glide'
import TypeIt from 'typeit';
import { shuffle } from 'underscore'

new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  autoplay: 7000,
  focusAt: 'center',
  perView: 2,
  gap: 20,
  peek: 220
})
.mount();

var greetings = [
  "Hi!",
  "Hello!",
  "Bonjour",
  "¡Holà!",
  "Buenos dias",
];

var typeIt = new TypeIt('.text-hero', {
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
