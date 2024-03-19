import { c as create_ssr_component } from "./ssr.js";
/* empty css                                         */
const css = {
  code: ".center.svelte-1aked2d.svelte-1aked2d{text-align:center}.center.svelte-1aked2d h2.svelte-1aked2d{margin-bottom:2rem}.center.svelte-1aked2d img.svelte-1aked2d{margin-top:2rem}.logo-cta.svelte-1aked2d.svelte-1aked2d{width:100%;max-width:243px;margin-bottom:2rem}",
  map: null
};
const ContactCta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section data-svelte-h="svelte-5hclqt"><div class="center svelte-1aked2d"><img class="logo-cta svelte-1aked2d" src="/../logo.svg" alt="Jet & Ben Logo"> <h2 class="center svelte-1aked2d">Want to know more? Get In touch</h2> <a class="button" href="/contact">Contact Us</a></div> </section>`;
});
export {
  ContactCta as C
};
