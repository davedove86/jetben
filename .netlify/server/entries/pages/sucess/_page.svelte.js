import { c as create_ssr_component } from "../../../chunks/ssr.js";
/* empty css                                                       */
const css = {
  code: ".margin-b.svelte-lqpam3{margin-bottom:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ozgv3j_START -->${$$result.title = `<title>Form Submitted | Jet &amp; Ben | Durham Constabulary</title>`, ""}<!-- HEAD_svelte-ozgv3j_END -->`, ""} <section data-svelte-h="svelte-1cvxvv8"><div class="container"><div class="grid-col-2"><div><h1>Form Submitted Successfully</h1> <p class="margin-b svelte-lqpam3">Please the button below to return to the home page or use the navigation to find out more.</p> <a class="button" href="/">Go Home</a></div> <img src="/../ben/ben-section-1.jpg" alt="Ben the Police Dog"></div></div> </section>`;
});
export {
  Page as default
};
