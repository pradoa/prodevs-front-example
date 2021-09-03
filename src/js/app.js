/**
 * define os elementos a serem usados
 */
const root = document.getElementById('root');

const intro = document.getElementById('intro');
const video = intro.querySelector('video');
const title = intro.querySelector('h1');
const subtitle = intro.querySelector('p');

const about = document.getElementById('about');
const aboutTitle = about.querySelector('h1');

const contact = document.getElementById('contact');
const contactInfo = contact.querySelector('.bordered');


/**
 * inicia o controller
 */
const controller = new ScrollMagic.Controller();


/**
 * primeira cena:
 * avança o vídeo conforme scroll
 */
const scene1 = new ScrollMagic.Scene({
  triggerElement: intro,
  triggerHook: 0,
  duration: 7500, // tempo do vídeo e também o tamanho do scroll
})
  .setPin(intro) // vincula o scroll ao elemento e trava a seção
  .addTo(controller); // vincula ao controller

let videoScrollPosition = 0;

scene1.on("update", e => {
  videoScrollPosition = (e.scrollPos / 1000) -2;
  video.currentTime = videoScrollPosition;
});

/**
 * segunda cena:
 * mostra o video conforme scroll
 */
const introVideoAnimation = TweenMax.fromTo(video, 2, { opacity: 0 }, { opacity: 1 });
const scene2 = new ScrollMagic.Scene({
  triggerElement: intro,
  triggerHook: 0,
  offset: 2000,
  duration: 2000, // tempo de duração da animação
})
  .setTween(introVideoAnimation)
  .addTo(controller);

/**
 * terceira cena:
 * esconde o titulo conforme scroll
 */
const introTextAnimation = TweenMax.fromTo(title, 2, { opacity: 1 }, { opacity: 0 });
const scene3 = new ScrollMagic.Scene({
  triggerElement: intro,
  triggerHook: 0,
  duration: 2000, // tempo de duração da animação
})
  .setTween(introTextAnimation)
  .addTo(controller);

/**
 * quarta cena:
 * esconde o subtitulo conforme scroll
 */
const introTextAnimation2 = TweenMax.fromTo(subtitle, 2, { opacity: 1 }, { opacity: 0 });
const scene4 = new ScrollMagic.Scene({
  triggerElement: intro,
  triggerHook: 0,
  duration: 2000, // tempo de duração da animação
})
  .setTween(introTextAnimation2)
  .addTo(controller);

/**
 * quinta cena:
 * prepara o scroll da seção "about"
 */
const scene5 = new ScrollMagic.Scene({
  triggerElement: about,
  triggerHook: 0,
  duration: 4500, // tempo de duração da animação
})
  .setPin(about)
  .addTo(controller);

/**
 * sexta cena:
 * cresce o título "sobre mim"
 */
const aboutTextAnimation = TweenMax.fromTo(aboutTitle, 2.5, { transform: 'scale(1)' }, { transform: 'scale(160)' });
const scene6 = new ScrollMagic.Scene({
  triggerElement: about,
  triggerHook: 0,
  offset: 500,
  duration: 3000, // tempo de duração da animação
})
  .setTween(aboutTextAnimation)
  .addTo(controller);

/**
 * sétima cena:
 * prepara o scroll da seção "contact"
 */
const contactAnimation = TweenMax.fromTo(contact, 2, { transform: 'scale(0)' }, { transform: 'scale(1)' });
const scene7 = new ScrollMagic.Scene({
  triggerElement: about,
  triggerHook: 0,
  offset: 800,
  duration: 2500, // tempo de duração da animação
})
  .setTween(contactAnimation)
  .addTo(controller);

/**
 * oitava cena:
 * mostra as informações de contato
 */
const contactInfoAnimation = TweenMax.fromTo(contactInfo, 2, { opacity: 0 }, { opacity: 1 });
const scene8 = new ScrollMagic.Scene({
  triggerElement: about,
  triggerHook: 0,
  offset: 800,
  duration: 2000, // tempo de duração da animação
})
  .setTween(contactInfoAnimation)
  .addTo(controller);
