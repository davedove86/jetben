import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as ContactCta } from "../../../chunks/ContactCta.js";
const css = {
  code: ".center.svelte-1ma0mcl.svelte-1ma0mcl{text-align:center;margin-bottom:2rem}.center.svelte-1ma0mcl h3.svelte-1ma0mcl{font-size:2rem}.center.svelte-1ma0mcl img.svelte-1ma0mcl{margin-top:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-kcagc3_START -->${$$result.title = `<title>Ben | Jet &amp; Ben | Durham Constabulary</title>`, ""}<!-- HEAD_svelte-kcagc3_END -->`, ""} <div class="container-full-width" data-svelte-h="svelte-jo6tce"><div class="hero-wrapper"><div class="hero-text"><h1>Ben</h1> <p class="kicker">Learn more about Ben who is a cute and cuddly Golden Labrador Police Safety Dog.</p> <a class="button" href="/contact">Contact Us</a></div> <img src="/../clairejetben.jpg" alt="Jet & Ben with Claire"></div></div> <section><div class="container"><div class="grid-col-2" data-svelte-h="svelte-1t0q4qa"><div><h2>Hello, my name is Ben</h2> <p>I am a Golden Labrador, I started out my life with Durham Police as a tiny puppy, this is
					me with my litter brothers and sisters and just before I began my life with my police
					handler Claire.</p> <p>I am a Community Engagement dog for Durham Constabulary.</p> <p>What does this mean I hear you ask? Well it means I am cute and cuddly and get to meet
					lots of new people every day, I go into schools to educate children, visit elderly people
					in care homes and visit many other community venues and events and I love my role.</p> <p>I suppose you would like to know more about me, well I work very hard; but outside of work
					I am also very active. I live at home with my handler Claire and have two small two legged
					siblings who I love to play with.</p></div> <img src="/../ben/ben-section-1.jpg" alt="Ben the Police Dog"></div> <div class="grid-col-2" data-svelte-h="svelte-1tgexuo"><img src="/../ben/ben-section-2.jpg" alt="Ben the Police Dog"> <div><p>I also like to spend my spare time playing football, going for long walks, searching for
					tennis balls and even swimming in the river (even though my Mam does tell me off sometimes
					as I get messy when I am not supposed to…oops).</p> <p>I love to eat MMMMMMMMM; food is absolutely one of my most favourite things, I love all
					food of any type, but my human Mam won’t let me eat some things as she says they are not
					good for me ( but if I can sneak some I will, don’t tell her).</p> <p>My handler Claire is my favourite two legged human as she is my Mam and takes good care of
					me (even though she won’t let me eat certain treats), she has worked for Durham Police for
					over 13 years and has trained and encouraged me to do the job that I do. I love keeping
					all of you safe as your safety is very important to me.</p></div></div> <div class="center svelte-1ma0mcl" data-svelte-h="svelte-1taozzb"><p>Well I think that is everything you need to know about me.</p> <p>Bye for now.</p> <h3 class="svelte-1ma0mcl">Ben</h3> <img src="/../golden-paw-icon.svg" alt="Golden paw print" class="svelte-1ma0mcl"></div> <h2 class="center svelte-1ma0mcl" data-svelte-h="svelte-3x51d">Some pictures of Ben</h2> <div class="grid-col-3 center svelte-1ma0mcl" data-svelte-h="svelte-1xwem22"><img class="profile-image svelte-1ma0mcl" src="/../ben/ben-1.jpg" alt="Ben the Police Dog"> <img class="profile-image svelte-1ma0mcl" src="/../ben/ben-2.jpg" alt="Ben the Police Dog"> <img class="profile-image svelte-1ma0mcl" src="/../ben/ben-3.jpg" alt="Ben the Police Dog"> <img class="profile-image svelte-1ma0mcl" src="/../ben/ben-4.jpg" alt="Ben the Police Dog"> <img class="profile-image svelte-1ma0mcl" src="/../ben/ben-5.jpg" alt="Ben the Police Dog"> <img class="profile-image svelte-1ma0mcl" src="/../ben/ben-6.jpg" alt="Ben the Police Dog"></div> ${validate_component(ContactCta, "ContactCta").$$render($$result, {}, {}, {})}</div></section> <section data-svelte-h="svelte-k1qplk"><div class="container"></div> </section>`;
});
export {
  Page as default
};
