import { c as create_ssr_component, v as validate_component, d as each, e as escape } from "../../../chunks/ssr.js";
import { C as ContactCta } from "../../../chunks/ContactCta.js";
const css$2 = {
  code: ".accordion.svelte-15iorz7.svelte-15iorz7{margin-top:3rem}.header.svelte-15iorz7.svelte-15iorz7{background-color:var(--white);border:none;display:flex;text-align:left;align-items:center;width:100%;max-width:833px;margin:0 auto;cursor:pointer}.header.svelte-15iorz7 .text.svelte-15iorz7{flex:1;width:100%;max-width:833px;margin:0 auto}.details.svelte-15iorz7.svelte-15iorz7{width:100%;max-width:833px;margin:0 auto}.open-button.svelte-15iorz7.svelte-15iorz7{background-color:var(--white);border:none;font-size:1.5rem;margin-left:1.5rem}",
  map: null
};
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$2);
  return `<div class="accordion svelte-15iorz7"><button class="header svelte-15iorz7"><div class="text svelte-15iorz7">${slots.head ? slots.head({}) : ``}</div> <span class="open-button svelte-15iorz7" data-svelte-h="svelte-1bk58id">+</span></button> ${open ? `<div class="details svelte-15iorz7">${slots.details ? slots.details({}) : ``}</div>` : ``} </div>`;
});
const faqs = [
  {
    "id": 1,
    "question": "Is there a charge for any of our visits?",
    "answer": "No, the Jet and Ben project is fully funded and supported by Durham Constabulary and local charge meaning there is no charge to schools or the local community."
  },
  {
    "id": 2,
    "question": "Do you hold risk assessments for attending schools and community events?",
    "answer": "Yes, the Jet and Ben project is thoroughly risk assessed on a regular basis, both dogs are trained and assessed to ensure that they can fulfil the role safely.It is important though that each school and community group ensure that they have informed parents or people attending of the presence of the dogs to check for any allergies or adverse fears that we need to be made aware of before attending or during our visit."
  },
  {
    "id": 3,
    "question": "Do you have the correct clearances to visit schools and community groups?",
    "answer": "Since we are Durham Constabulary staff members, we are given the same clearances and checks as a Police Officer or teacher would have and these are repeated and checked on a regular basis."
  },
  {
    "id": 4,
    "question": "How do we go about booking Jet and Ben for a visit?",
    "answer": "There are many different avenues you can now use to make contact with us to book a visit; there are many contact links on this website which will send the message directly to us, if you would prefer we also have a Facebook messenger, Twitter and an Instagram account."
  },
  {
    "id": 5,
    "question": "How long can you stay at our school or community group?",
    "answer": "To make it as fair as we can for everybody to book in, we try to commit a morning or an afternoon to each individual school or group."
  },
  {
    "id": 6,
    "question": "How long has the Jet and Ben programme been running for?",
    "answer": "Durham Constabulary has been coordinating the Jet and Ben programme with support from charities such as Durham Agency Against Crime for over 30 years."
  },
  {
    "id": 7,
    "question": "Will the children be able to approach the dogs and touch them during their visit?",
    "answer": "This is an individual school or group choice, if the school or group would like this to take place then yes the children can approach the dogs at the end of the session for strokes and photo opportunities, this will be done in a safe and organised fashion with the correct hygiene instructions in place also."
  }
];
const css$1 = {
  code: "#banner-container.svelte-62mip9.svelte-62mip9{width:100%;overflow:hidden}#banner-container.svelte-62mip9 .photobanner.svelte-62mip9{height:150px;width:3350px;display:flex;align-items:center;justify-content:center;gap:8rem;background-color:var(--accent);border-top:5px solid var(--black);border-bottom:5px solid var(--black);margin-top:3rem}#banner-container.svelte-62mip9 .photobanner img.svelte-62mip9{max-width:100px;max-height:100px}.first.svelte-62mip9.svelte-62mip9{-webkit-animation:svelte-62mip9-bannermove 30s linear infinite;-moz-animation:svelte-62mip9-bannermove 30s linear infinite;-ms-animation:svelte-62mip9-bannermove 30s linear infinite;-o-animation:svelte-62mip9-bannermove 30s linear infinite;animation:svelte-62mip9-bannermove 30s linear infinite}@keyframes svelte-62mip9-bannermove{0%{margin-left:0px}100%{margin-left:-2125px}}@-moz-keyframes svelte-62mip9-bannermove{0%{margin-left:0px}100%{margin-left:-2125px}}@-webkit-keyframes svelte-62mip9-bannermove{0%{margin-left:0px}100%{margin-left:-2125px}}@-ms-keyframes svelte-62mip9-bannermove{0%{margin-left:0px}100%{margin-left:-2125px}}@-o-keyframes svelte-62mip9-bannermove{0%{margin-left:0px}100%{margin-left:-2125px}}",
  map: null
};
const Client_banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section id="banner-container" class="svelte-62mip9" data-svelte-h="svelte-olrugp"><h2 class="center">Our Partners</h2> <p class="center">We work alongside a number of organisations and charities</p> <div class="photobanner svelte-62mip9"><img class="first svelte-62mip9" src="../client-banner/pcc.svg" alt="Durham PCC Logo"> <img src="../client-banner/daac.svg" alt="Durham Agency Agaist Crime Logo" class="svelte-62mip9"> <img src="../client-banner/ceop.svg" alt="CEOP logo" class="svelte-62mip9"> <img src="../client-banner/dbc.svg" alt="Darlington Borough Council" class="svelte-62mip9"> <img src="../client-banner/dcc.svg" alt="Durham County Council Logo" class="svelte-62mip9"> <img src="../client-banner/dc.svg" alt="Durham Constabulary logo" class="svelte-62mip9"> <img src="../client-banner/ok9.svg" alt="OK9 Logo" class="svelte-62mip9"> <img src="../client-banner/pcc.svg" alt="Durham PCC Logo" class="svelte-62mip9"> <img src="../client-banner/daac.svg" alt="Durham Agency Agaist Crime Logo" class="svelte-62mip9"> <img src="../client-banner/ceop.svg" alt="CEOP logo" class="svelte-62mip9"> <img src="../client-banner/dbc.svg" alt="Darlington Borough Council" class="svelte-62mip9"> <img src="../client-banner/dcc.svg" alt="Durham County Council Logo" class="svelte-62mip9"> <img src="../client-banner/dc.svg" alt="Durham Constabulary logo" class="svelte-62mip9"> <img src="../client-banner/ok9.svg" alt="OK9 Logo" class="svelte-62mip9"> <img src="../client-banner/pcc.svg" alt="Durham PCC Logo" class="svelte-62mip9"> <img src="../client-banner/daac.svg" alt="Durham Agency Agaist Crime Logo" class="svelte-62mip9"> <img src="../client-banner/ceop.svg" alt="CEOP logo" class="svelte-62mip9"> <img src="../client-banner/dbc.svg" alt="Darlington Borough Council" class="svelte-62mip9"> <img src="../client-banner/dcc.svg" alt="Durham County Council Logo" class="svelte-62mip9"> <img src="../client-banner/dc.svg" alt="Durham Constabulary logo" class="svelte-62mip9"> <img src="../client-banner/ok9.svg" alt="OK9 Logo" class="svelte-62mip9"></div> </section>`;
});
const css = {
  code: ".profile.svelte-13t7p0d.svelte-13t7p0d{width:100px;height:100px;border-radius:100%;object-fit:cover}.card.svelte-13t7p0d h3.svelte-13t7p0d{margin-top:1rem}.faq.svelte-13t7p0d.svelte-13t7p0d{width:100%}.faq.svelte-13t7p0d h2.svelte-13t7p0d{text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-97hhqn_START -->${$$result.title = `<title>About Us | Jet &amp; Ben | Durham Constabulary</title>`, ""}<!-- HEAD_svelte-97hhqn_END -->`, ""} <div class="container-full-width" data-svelte-h="svelte-1rpraxm"><div class="hero-wrapper"><div class="hero-text"><h1>About Us</h1> <p class="kicker">Learn more about Ben who is a cute and cuddly Golden Labrador Police Safety Dog.</p> <a class="button" href="/contact">Contact Us</a></div> <img src="/../clairejetben.jpg" alt="Jet & Ben with Claire"></div></div> <section data-svelte-h="svelte-rck7un"><div class="container"><h2 class="center">Meet The Team</h2> <p class="center">Click below to learn more about our team and read their bios.</p> <div class="card-wrapper"><div class="card svelte-13t7p0d"><img class="profile svelte-13t7p0d" src="/../jet/jet-profile.jpg" alt="Ben the Police Dog"> <h3 class="svelte-13t7p0d">Jet</h3> <p>Hello my name is Jet I am fun and friendly Black Labrador.</p> <div class="learn-more-wrapper"><a href="/jet" class="learn-more">Learn More</a> <img src="/../arrow.svg" alt="arrow icon"></div></div> <div class="card svelte-13t7p0d"><img class="profile svelte-13t7p0d" src="/../clairejetben-2.jpg" alt="Claire with Jet & Ben"> <h3 class="svelte-13t7p0d">Claire</h3> <p>Hello my name is Claire and I am Jet &amp; Ben’s favourite two legged human.</p> <div class="learn-more-wrapper"><a href="/claire" class="learn-more">Learn More</a> <img src="/../arrow.svg" alt="arrow icon"></div></div> <div class="card svelte-13t7p0d"><img class="profile svelte-13t7p0d" src="/../ben-profile.jpg" alt="Ben the Police Dog"> <h3 class="svelte-13t7p0d">Ben</h3> <p>Hello my name is Ben I am cute and cuddly Golden Labrador.</p> <div class="learn-more-wrapper"><a href="/ben" class="learn-more">Learn More</a> <img src="/../arrow.svg" alt="arrow icon"></div></div></div></div></section>   ${validate_component(Client_banner, "ClientBanner").$$render($$result, {}, {}, {})} <section data-svelte-h="svelte-1b7irav"><div class="container"><h2 class="center">Gallery</h2> <div class="grid-col-3-images"><img src="/../about/about-1.jpg" alt="Ben"> <img src="/../about/about-2.jpg" alt="Jet"> <img src="/../about/about-3.jpg" alt="Bens"> <img src="/../about/about-4.jpg" alt="Kids stroking Ben"> <img src="/../about/about-5.jpg" alt="Claire teaching a class"> <img src="/../about/about-6.jpg" alt="Kids stroking Ben"></div></div></section> <section><div class="container"><div class="faq svelte-13t7p0d"><h2 class="svelte-13t7p0d" data-svelte-h="svelte-1bq868">FAQ&#39;s</h2> <p class="center" data-svelte-h="svelte-axyv5s">Below we answer some of the most frequently asked questions</p> ${each(faqs, (faq) => {
    return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
      details: () => {
        return `<div slot="details"><p>${escape(faq.answer)}</p> </div>`;
      },
      head: () => {
        return `<h3 slot="head">${escape(faq.question)}</h3>`;
      }
    })}`;
  })}</div></div></section> ${validate_component(ContactCta, "ContactCta").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
