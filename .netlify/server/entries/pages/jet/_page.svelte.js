import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as ContactCta } from "../../../chunks/ContactCta.js";
const css = {
  code: ".center.svelte-1ma0mcl.svelte-1ma0mcl{text-align:center;margin-bottom:2rem}.center.svelte-1ma0mcl h3.svelte-1ma0mcl{font-size:2rem}.center.svelte-1ma0mcl img.svelte-1ma0mcl{margin-top:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1vuwj05_START -->${$$result.title = `<title>Jet | Jet &amp; Ben | Durham Constabulary</title>`, ""}<!-- HEAD_svelte-1vuwj05_END -->`, ""} <div class="container-full-width" data-svelte-h="svelte-18bpj7a"><div class="hero-wrapper"><div class="hero-text"><h1>Jet</h1> <p class="kicker">Learn more about Jet who is a fun and friendly Black Labrador Police Safety Dog</p> <a class="button" href="/contact">Contact Us</a></div> <img src="/../clairejetben.jpg" alt="Jet & Ben with Claire"></div></div> <section><div class="container"><div class="grid-col-2" data-svelte-h="svelte-13l5bs4"><div><h2>Hello, my name is Jet</h2> <p>I am a Black Labrador, I started out my life with Durham Police as a tiny puppy, I
					originally started out my time in the police training to be a search dog, but because I
					had such good skills working with people I was transferred to work with my handler Claire.</p> <p>So, I am now a Community Engagement dog for Durham Constabulary.</p> <p>I love my job now; as every day is such fun; I get to visit lots of new places and meet
					lots of interesting new people; but I also help to keep people safe and that is extremely
					important.</p> <p>I guess you would like to know more about me, well I work as part of a team with my
					colleague Ben and Claire.</p></div> <img src="/../jet/jet-1.jpg" alt="Jet the Police Dog"></div> <div class="grid-col-2" data-svelte-h="svelte-1uro062"><img src="/../jet/jet-2.jpg" alt="Jet the Police Dog"> <div><p>I am the wild one though, I love to run all the time and when I go to any new places I get
					so excited that there are times I cannot help but scream.</p> <p>My favourite thing in the whole wide world is a tennis ball, I love; love; love tennis
					balls, I ask for a new one every birthday.</p> <p>I also love going for long walks as exercise is good for me and keeps me fit and healthy.</p> <p>I live at home with my handler Claire, the family and my teammate Ben, since I am the
					youngest, I do like to annoy Ben sometimes; but isn’t that what all younger siblings do.</p> <p>I love working with Claire as since I have been here she is helping me to learn new skills
					like how to be a wellbeing dog; so not only will I be helping members of the public.</p> <p>I will also be helping the police officers and staff I work with to think about their own
					wellbeing when dealing with traumatic incidents and sometimes my colleagues do have deal
					with some very difficult things and it is brilliant that I can help them.</p></div></div> <div class="center svelte-1ma0mcl" data-svelte-h="svelte-10b1fxt"><p>Well I think that is everything you need to know about me.</p> <p>Bye for now.</p> <h3 class="svelte-1ma0mcl">Jet</h3> <img src="/../black-paw-icon.svg" alt="Black paw print" class="svelte-1ma0mcl"></div> <h2 class="center svelte-1ma0mcl" data-svelte-h="svelte-lbghgz">Some pictures of Jet</h2> <div class="grid-col-3 center svelte-1ma0mcl" data-svelte-h="svelte-wdht3i"><img class="profile-image svelte-1ma0mcl" src="/../jet/jet-1.jpg" alt="Jet the Police Dog"> <img class="profile-image svelte-1ma0mcl" src="/../jet/jet-2.jpg" alt="Jet the Police Dog"> <img class="profile-image svelte-1ma0mcl" src="/../jet/jet-3.jpg" alt="Jet the Police Dog"> <img class="profile-image svelte-1ma0mcl" src="/../jet/jet-4.jpg" alt="Jet the Police Dog"> <img class="profile-image svelte-1ma0mcl" src="/../jet/jet-5.jpg" alt="Jet the Police Dog"> <img class="profile-image svelte-1ma0mcl" src="/../jet/jet-6.jpg" alt="Jet the Police Dog"></div> ${validate_component(ContactCta, "ContactCta").$$render($$result, {}, {}, {})}</div> </section>`;
});
export {
  Page as default
};
