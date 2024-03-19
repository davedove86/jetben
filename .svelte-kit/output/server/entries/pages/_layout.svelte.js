import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: "footer.svelte-nlmqeo.svelte-nlmqeo{background-color:var(--black);color:var(--white);padding:2rem 0;margin-top:auto;font-size:0.875rem}.footer-grid.svelte-nlmqeo.svelte-nlmqeo{display:grid;grid-template-columns:repeat(4, 1fr);grid-gap:2rem;padding:2rem 0}footer.svelte-nlmqeo img.svelte-nlmqeo{width:100%;max-width:113px}.footer-heading.svelte-nlmqeo.svelte-nlmqeo{font-weight:bold;margin-bottom:1rem}ul.svelte-nlmqeo.svelte-nlmqeo{list-style:none;padding:0}ul.svelte-nlmqeo li.svelte-nlmqeo{margin-bottom:0.5rem}ul.svelte-nlmqeo li a.svelte-nlmqeo{color:#aaa}footer.svelte-nlmqeo p.svelte-nlmqeo{margin:0}.center.svelte-nlmqeo.svelte-nlmqeo{text-align:center;color:#aaa}.center.svelte-nlmqeo a.svelte-nlmqeo{color:#aaa}@media(max-width: 768px){.footer-grid.svelte-nlmqeo.svelte-nlmqeo{grid-template-columns:repeat(2, 1fr)}}@media(max-width: 530px){.footer-grid.svelte-nlmqeo.svelte-nlmqeo{grid-template-columns:1fr}.center.svelte-nlmqeo.svelte-nlmqeo{text-align:left}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-nlmqeo" data-svelte-h="svelte-lr567e"><div class="container"><div class="footer-grid svelte-nlmqeo"><img src="../logo-white.png" alt="Jet & Ben Logo" class="svelte-nlmqeo"> <div><p class="footer-heading svelte-nlmqeo">Navigation</p> <ul class="svelte-nlmqeo"><li class="svelte-nlmqeo"><a href="/" class="svelte-nlmqeo">Home</a></li> <li class="svelte-nlmqeo"><a href="/schools" class="svelte-nlmqeo">Schools</a></li> <li class="svelte-nlmqeo"><a href="/community" class="svelte-nlmqeo">Community</a></li> <li class="svelte-nlmqeo"><a href="/about" class="svelte-nlmqeo">About Us</a></li></ul></div> <div><p class="footer-heading svelte-nlmqeo">Contact Links</p> <ul class="svelte-nlmqeo"><li class="svelte-nlmqeo"><a href="/contact" class="svelte-nlmqeo">Contact Us</a></li> <li class="svelte-nlmqeo"><a href="mailto:jet&ben@durham.police.uk" class="svelte-nlmqeo">jet&amp;ben@durham.police.uk</a></li> <li class="svelte-nlmqeo"><a href="https://www.facebook.com/jetandben" class="svelte-nlmqeo">Facebook</a></li> <li class="svelte-nlmqeo"><a href="https://www.instagram.com/jetandben/" class="svelte-nlmqeo">Instagram</a></li> <li class="svelte-nlmqeo"><a href="https://twitter.com/jetandben" class="svelte-nlmqeo">Twitter</a></li></ul></div> <div><p class="footer-heading svelte-nlmqeo">Website Information</p> <ul class="svelte-nlmqeo"><li class="svelte-nlmqeo"><a href="https://www.cookiepolicygenerator.com/live.php?token=27syoaKiopWVeQuTaaJTfXKun1WV6dBK" target="_blank" class="svelte-nlmqeo">Privacy Policy</a></li> <li class="svelte-nlmqeo"><a href="https://www.cookiepolicygenerator.com/live.php?token=Zn1y49lXv0n165Yl2gSFaaDTg1D1vFLh" target="_blank" class="svelte-nlmqeo">Cookies Policy</a></li>  <li class="svelte-nlmqeo"><a href="/" class="svelte-nlmqeo">Sitemap</a></li></ul></div></div> <p class="center svelte-nlmqeo"><a class="center svelte-nlmqeo" href="https://www.dovedesign.io">Website by Dove Design</a></p></div> </footer>`;
});
const css = {
  code: "nav.svelte-1k03mw{display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0}img.svelte-1k03mw{width:81px}ul.svelte-1k03mw{display:flex;list-style:none}li.svelte-1k03mw{margin-left:0.5rem;padding:20px}a.svelte-1k03mw{text-decoration:none;color:var(--black)}",
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header data-svelte-h="svelte-1se0tse"><div class="container"><nav class="svelte-1k03mw"><a href="/" class="svelte-1k03mw"><img src="./logo.svg" alt="Jet & Ben logo" class="svelte-1k03mw"></a> <ul class="svelte-1k03mw"><li class="svelte-1k03mw"><a href="/" class="svelte-1k03mw">Home</a></li> <li class="svelte-1k03mw"><a href="/schools" class="svelte-1k03mw">Schools</a></li> <li class="svelte-1k03mw"><a href="/community" class="svelte-1k03mw">Community</a></li> <li class="svelte-1k03mw"><a href="/about" class="svelte-1k03mw">About</a></li> <li class="svelte-1k03mw"><a href="/contact" class="svelte-1k03mw">Contact</a></li></ul></nav></div> </header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
