import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as ContactCta } from "../../../chunks/ContactCta.js";
const css = {
  code: ".center.svelte-1ma0mcl.svelte-1ma0mcl{text-align:center;margin-bottom:2rem}.center.svelte-1ma0mcl h3.svelte-1ma0mcl{font-size:2rem}.center.svelte-1ma0mcl img.svelte-1ma0mcl{margin-top:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1h0ljc4_START -->${$$result.title = `<title>Claire | Jet &amp; Ben | Durham Constabulary</title>`, ""}<!-- HEAD_svelte-1h0ljc4_END -->`, ""} <div class="container-full-width" data-svelte-h="svelte-azg52c"><div class="hero-wrapper"><div class="hero-text"><h1>Claire</h1> <p class="kicker">Learn more about Claire who is the handler for the Police Safety Dogs Jet &amp; Ben</p> <a class="button" href="/contact">Contact Us</a></div> <img src="/../clairejetben.jpg" alt="Jet & Ben with Claire"></div></div> <section><div class="container"><div class="grid-col-2" data-svelte-h="svelte-191asa4"><div><h2>Hello, my name is Claire</h2> <p>I am the Community Engagement dog Handler for Jet and Ben within Durham Constabulary.</p> <p>I have been in this role for over 13 years and have managed to be lucky enough to meet
					thousands of children in my time here and engage with many of the communities within
					Durham and Darlington.</p> <p>I love working with Jet and Ben as everyday is a new exciting experience for us;.</p> <p>We love visiting schools, nurseries and many other educational providers and helping to
					protect our local communities.</p></div> <img src="/../claire/claire-section-1.jpg" alt="claire with the Police Dogs"></div> <div class="grid-col-2" data-svelte-h="svelte-lo7w8j"><img src="/../claire/claire-section-2.jpg" alt="claire with the Police Dogs"> <div><p>Before joining the police I went to university and gained a degree in History and
					Sociology and then went on to work with the Youth Offending Team; helping to divert young
					people away from crime, that is where my passion for helping young people began and that
					was when I decided to apply for the role as the Jet and Ben handler.</p> <p>This meant that I could continue to educate and keep young people safe; it is also a
					massive bonus that my colleagues are cute and cuddly too.</p> <p>In order to ensure the role I fill is supporting schools in the best way possible, I have
					a level 3 in education and training, an accreditation for the National PSHE CPD Programme,
					I am a CEOP Ambassador and a Mental health First Aider.</p> <p>We will look forward to meeting you all when we next visit, take care and see you soon</p></div></div> <div class="center svelte-1ma0mcl" data-svelte-h="svelte-8rm4z0"><p>Bye for now.</p> <h3 class="svelte-1ma0mcl">Claire</h3> <img src="/../hand.svg" alt="Hand print" class="svelte-1ma0mcl"></div> ${validate_component(ContactCta, "ContactCta").$$render($$result, {}, {}, {})}</div> </section>`;
});
export {
  Page as default
};
