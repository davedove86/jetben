import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { B as Banner, C as Contact_section } from "../../chunks/Banner.js";
const css = {
  code: ".no-margin.svelte-taxzka.svelte-taxzka{padding:0}.bone-bg.svelte-taxzka.svelte-taxzka{background-image:url('/../team-bg.jpg');background-repeat:no-repeat;background-position:center;background-size:cover}.center.svelte-taxzka.svelte-taxzka{text-align:center}.card-wrapper.svelte-taxzka.svelte-taxzka{margin-top:2rem}.card.svelte-taxzka h3.svelte-taxzka{margin-top:1rem}.flex.svelte-taxzka.svelte-taxzka{display:flex;padding:1rem 0;gap:1rem}.profile.svelte-taxzka.svelte-taxzka{width:100px;height:100px;border-radius:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ziponf_START -->${$$result.title = `<title>Home | Jet &amp; Ben | Durham Constabulary</title>`, ""}<!-- HEAD_svelte-ziponf_END -->`, ""} <section class="no-margin svelte-taxzka" data-svelte-h="svelte-1j5av2b"><div class="container"><div class="hero-wrapper"><div class="hero-text"><h1>Jet &amp; Ben Are The Durham Police Community Dogs</h1> <p class="kicker">Durham Police’s Safety Dogs, we visit educational settings and other community engagement
					events.</p> <a class="button" href="/contact">Contact Us</a></div> <img src="/../clairejetben.jpg" alt="Jet & Ben with Claire"></div></div></section> <section class="grey-background" data-svelte-h="svelte-fkweko"><div class="container"><div class="card-wrapper svelte-taxzka"><div class="card"><div class="icon-wrap"><img src="/../schools-icon.svg" alt="teachers hat"></div> <h2>Schools</h2> <p>Jet &amp; Ben would like to help all schools and early years providers to keep children safe.</p> <div class="learn-more-wrapper"><a href="/schools" class="learn-more">Learn More</a> <img src="/../arrow.svg" alt="arrow icon"></div></div> <div class="card"><div class="icon-wrap"><img src="/../community-icon.svg" alt="teachers hat"></div> <h2>Community</h2> <p>We attend a range of organised events, visiting day centres, care homes or out of school
					groups.</p> <div class="learn-more-wrapper"><a href="/community" class="learn-more">Learn More</a> <img src="/../arrow.svg" alt="arrow icon"></div></div> <div class="card"><div class="icon-wrap"><img src="/../paw-icon.svg" alt="teachers hat"></div> <h2>About Us</h2> <p>If you would like to know more about us; who we are and what we do, then this section has
					it all for you.</p> <div class="learn-more-wrapper"><a href="/about" class="learn-more">Learn More</a> <img src="/../arrow.svg" alt="arrow icon"></div></div></div></div></section> ${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})}  <section data-svelte-h="svelte-19t3dnr"><div class="container"><div class="grid-col-2"><div><h2>What We Do</h2> <p>We have various roles within Durham Constabulary and if you would like to know more please
					contact us.</p> <div><div class="flex svelte-taxzka"><img src="/../school-visit-icon.svg" alt="school award icon"> <div><h3>School Visits</h3> <p>Are you a Primary School teacher or Early years provider, then we can visit you &amp;
								deliver topics including Personal Safety, internet safety and people who help us.</p></div></div> <div class="flex svelte-taxzka"><img src="/../events-icon.svg" alt="community award icon"> <div><h3>Community Events</h3> <p>Organising a local event, then consider Jet &amp; Ben as a fun &amp; informative addition to
								your event. Scouts, Brownies, Cubs or out of school groups, we’ll attend them all.</p></div></div> <div class="flex svelte-taxzka"><img src="/../officer-support-icon.svg" alt="teachers hat"> <div><h3>Officer Support</h3> <p>Police officers &amp; staff do a demanding and sometimes dangerous job, and are
								frequently exposed to trauma, we come in to support and listen to the officers.</p></div></div></div></div> <img src="/../clairejetben-2.jpg" alt="Jet & Ben"></div></div></section> <section class="bone-bg svelte-taxzka" data-svelte-h="svelte-1bq9h04"><div class="container"><h2 class="center svelte-taxzka">Meet The Team</h2> <p class="center svelte-taxzka">Click below to learn more about our team and read their bios.</p> <div class="card-wrapper svelte-taxzka"><div class="card svelte-taxzka"><img class="profile svelte-taxzka" src="/../jet/jet-profile.jpg" alt="Ben the Police Dog"> <h3 class="svelte-taxzka">Jet</h3> <p>Hello my name is Jet I am fun and friendly Black Labrador.</p> <div class="learn-more-wrapper"><a href="/jet" class="learn-more">Learn More</a> <img src="/../arrow.svg" alt="arrow icon"></div></div> <div class="card svelte-taxzka"><img class="profile svelte-taxzka" src="/../clairejetben-2.jpg" alt="Claire with Jet & Ben"> <h3 class="svelte-taxzka">Claire</h3> <p>Hello my name is Claire and I am Jet &amp; Ben’s favourite two legged human.</p> <div class="learn-more-wrapper"><a href="/claire" class="learn-more">Learn More</a> <img src="/../arrow.svg" alt="arrow icon"></div></div> <div class="card svelte-taxzka"><img class="profile svelte-taxzka" src="/../ben-profile.jpg" alt="Ben the Police Dog"> <h3 class="svelte-taxzka">Ben</h3> <p>Hello my name is Ben I am cute and cuddly Golden Labrador.</p> <div class="learn-more-wrapper"><a href="/ben" class="learn-more">Learn More</a> <img src="/../arrow.svg" alt="arrow icon"></div></div></div></div></section> ${validate_component(Contact_section, "ContactSection").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
