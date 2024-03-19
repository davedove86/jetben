import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Contact_section, B as Banner } from "../../../chunks/Banner.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1jdakl8_START -->${$$result.title = `<title>Contact Us | Jet &amp; Ben | Durham Constabulary</title>`, ""}<!-- HEAD_svelte-1jdakl8_END -->`, ""} <section class="no-margin" data-svelte-h="svelte-jmzsju"><div class="container"><div class="hero-wrapper"><div class="hero-text"><h1>Contact Us</h1> <p class="kicker">If you would like us to come and visit your school or community event please use our
					contact options to get in touch and let&#39;s have some fun.</p></div> <img src="/../clairejetben.jpg" alt="Jet & Ben with Claire"></div></div></section> ${validate_component(Contact_section, "ContactSection").$$render($$result, {}, {}, {})} ${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})} `;
});
export {
  Page as default
};
