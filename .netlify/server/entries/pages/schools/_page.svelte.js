import { c as create_ssr_component, d as each, v as validate_component, e as escape, f as add_attribute } from "../../../chunks/ssr.js";
import { C as ContactCta } from "../../../chunks/ContactCta.js";
const schools = [
  {
    "id": 1,
    "name": "Personal Safety",
    "description": "This is a 1 hour lesson designed more for Year 5/6 to allow them to think about who is responsible for their safety and what the consequences can be if they do not consider their own personal safety; this lesson also enables them to think about how important it is that we do not stereotype people."
    // 'img': 'https://www.ourwatch.org.uk/sites/default/files/styles/hero/public/2019-01/Personal%20Safety%20-%20Schools%20-%20Our%20Watch.jpg?itok=8QZ3Z3Zq',
  },
  {
    "id": 2,
    "name": "Stranger Awareness",
    "description": "When you are outside; anywhere; you need to always take care and be aware of strangers, strangers are people you do not know; not every stranger is a bad person; many people are good people."
    // 'img': 'https://www.ourwatch.org.uk/sites/default/files/styles/hero/public/2019-01/Personal%20Safety%20-%20Schools%20-%20Our%20Watch.jpg?itok=8QZ3Z3Zq',
  },
  {
    "id": 3,
    "name": "Internet safety KS2",
    "description": "Since the internet is such a vast subject matter, lessons can be tailored around the individual school concerns or needs, please make contact to discuss your concerns or requirements."
    // 'img': 'https://www.ourwatch.org.uk/sites/default/files/styles/hero/public/2019-01/Personal%20Safety%20-%20Schools%20-%20Our%20Watch.jpg?itok=8QZ3Z3Zq',
  },
  {
    "id": 4,
    "name": "People Who Help Us",
    "description": "This 30- 40 minute lesson covers all aspects of how the Police can help you and what it is like being a Police Officer."
    // 'img': 'https://www.ourwatch.org.uk/sites/default/files/styles/hero/public/2019-01/Personal%20Safety%20-%20Schools%20-%20Our%20Watch.jpg?itok=8QZ3Z3Zq',
  },
  {
    "id": 5,
    "name": "Being a Police Dog Handler",
    "description": "This 1 Hour lesson helps the young people to consider career goals and aspirations of a Police Dog Handler."
    // 'img': 'https://www.ourwatch.org.uk/sites/default/files/styles/hero/public/2019-01/Personal%20Safety%20-%20Schools%20-%20Our%20Watch.jpg?itok=8QZ3Z3Zq',
  },
  {
    "id": 6,
    "name": "Celebrating Diversity",
    "description": "This hour long Lesson is designed for Year 6 pupils to consider the world that we live in and how it is filled with diversity."
    // 'img': 'https://www.ourwatch.org.uk/sites/default/files/styles/hero/public/2019-01/Personal%20Safety%20-%20Schools%20-%20Our%20Watch.jpg?itok=8QZ3Z3Zq',
  }
];
const Competitions = [
  {
    "id": 1,
    "name": "Durham Police Christmas Card Competition 2021",
    "description": "Calling all young budding artists, it's that time again for the Durham Constabulary Christmas card competition",
    "img": "../xmas-card-2021.jpeg"
  },
  {
    "id": 2,
    "name": "Durham Police Christmas Card Competition 2022",
    "description": "Police and Crime Commissioner Joy Allen is asking for the help from local primary children to help her to design a festive card.",
    "img": "../xmas-card-2022.jpeg"
  }
];
const css = {
  code: ".card.svelte-1a6bnzw img.svelte-1a6bnzw{width:100px;height:100px}.card-col-2.svelte-1a6bnzw.svelte-1a6bnzw{display:grid;grid-template-columns:1fr 1fr;grid-gap:1rem}.yellow-card.svelte-1a6bnzw.svelte-1a6bnzw{display:flex;flex-direction:column;align-items:flex-start;background-color:var(--accent);padding:1.5rem;border:5px solid var(--black);border-radius:3px}.yellow-card.svelte-1a6bnzw a.svelte-1a6bnzw{margin-top:auto}.card-xmas.svelte-1a6bnzw.svelte-1a6bnzw{display:flex;flex-direction:column}.card-text.svelte-1a6bnzw.svelte-1a6bnzw{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;width:100%;height:100%;object-fit:cover;padding:30px;border-radius:var(--border-radius);box-shadow:0 0 10px rgba(0, 0, 0, 0.2)}@media(max-width: 768px){.card-col-2.svelte-1a6bnzw.svelte-1a6bnzw{grid-template-columns:1fr}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1lgcljz_START -->${$$result.title = `<title>Schools | Jet &amp; Ben | Durham Constabulary</title>`, ""}<!-- HEAD_svelte-1lgcljz_END -->`, ""} <section class="no-margin" data-svelte-h="svelte-1dm0e6p"><div class="container"><div class="hero-wrapper"><div class="hero-text"><h1>Schools</h1> <p class="kicker">Jet &amp; Ben would like to help all schools and early years providers within County Durham
					and Darlington to educate children especially when it comes to their safety. Find out more
					below about the lessons we can provide to you.</p> <a class="button" href="/contact">Contact Us</a></div> <img src="/../clairejetben.jpg" alt="Jet & Ben with Claire"></div></div></section> <section data-svelte-h="svelte-1bqoxd7"><div class="container"><div class="center"><h2>School Services We Offer</h2> <p>We offer a range of services and resources for schools, please contact us for further
				information.</p></div> <div class="grid-col-3"><div class="card svelte-1a6bnzw"><img src="/../presentations-icon.svg" alt="teachers hat" class="svelte-1a6bnzw"> <h3>Presentations</h3> <p>We deliver a range of presentations for different ages and abilities including, Personal
					Safety, Internet Safety and People Who Help Us.</p></div> <div class="card svelte-1a6bnzw"><img src="/../meet-greet-icon.svg" alt="teachers hat" class="svelte-1a6bnzw"> <h3>Meet &amp; Greet</h3> <p>Are you having a summer fair, charity event or anything within school where a cuddly cute
					dog would make a nice addition then why not invite us along.</p></div> <div class="card svelte-1a6bnzw"><img src="/../compititions-icon.svg" alt="teachers hat" class="svelte-1a6bnzw"> <h3>Compititions</h3> <p>Teachers watch this space for regular competitions that your school can get involved with
					and hopefully win some great prizes.</p></div></div></div></section>  <section><div class="container"><div class="card-col-2 svelte-1a6bnzw">${each(schools, (school) => {
    return `<div class="yellow-card svelte-1a6bnzw"><h3>${escape(school.name)}</h3> <p>${escape(school.description)}</p> <a class="button svelte-1a6bnzw" href="/" data-svelte-h="svelte-r69ys7">Learn More</a> </div>`;
  })}</div></div></section>  <section><div class="container"><div class="card-col-2 svelte-1a6bnzw">${each(Competitions, (competition) => {
    return `<div class="card-xmas svelte-1a6bnzw"><img class="xmas-card"${add_attribute("src", competition.img, 0)}${add_attribute("alt", competition.name, 0)}> <div class="card-text svelte-1a6bnzw"><h3>${escape(competition.name)}</h3> <p>${escape(competition.description)}</p> <a class="button" href="/" data-svelte-h="svelte-r69ys7">Learn More</a></div> </div>`;
  })}</div></div></section> <section data-svelte-h="svelte-oiqwzc"><div class="container"><h2 class="center">Gallery</h2> <div class="grid-col-3-images"><img src="/../school/school-1.jpg" alt="Claire & Ben"> <img src="/../school/school-2.jpg" alt="Claire teaching a class"> <img src="/../school/school-3.jpg" alt="Claire teaching a class"> <img src="/../school/school-4.jpg" alt="Kids stroking Ben"> <img src="/../school/school-5.jpg" alt="Claire teaching a class"> <img src="/../school/school-6.jpg" alt="Kids stroking Ben"></div></div></section> <section><div class="container">${validate_component(ContactCta, "ContactCta").$$render($$result, {}, {}, {})}</div> </section>`;
});
export {
  Page as default
};
