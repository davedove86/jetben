import { c as create_ssr_component } from "./ssr.js";
const css$1 = {
  code: ".flex.svelte-5b0jf.svelte-5b0jf{display:flex;align-items:center;gap:1rem;margin-bottom:1rem}.flex.svelte-5b0jf a.svelte-5b0jf{margin:0}.flex.svelte-5b0jf img.svelte-5b0jf{width:50px}form.svelte-5b0jf.svelte-5b0jf{margin:1rem 0}form.svelte-5b0jf label.svelte-5b0jf{margin-bottom:0.5rem}form.svelte-5b0jf input.svelte-5b0jf,form.svelte-5b0jf textarea.svelte-5b0jf{padding:0.7rem;border:0.5px solid var(--black);border-radius:0.5rem;box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}form.svelte-5b0jf button.svelte-5b0jf{margin-top:2rem}",
  map: null
};
const Contact_section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="grey-background" data-svelte-h="svelte-1hx6ozg"><div class="container"><div class="grid-col-2"><div class="card"><h3>Get In Touch</h3> <p>If you would like to know more about what we can do please contact us using the methods
					below or visit our social media pages.</p> <div class="flex svelte-5b0jf"><img src="/../mail-icon.svg" alt="community award icon" class="svelte-5b0jf"> <a href="mailto:jet&ben@durham.police.uk" class="svelte-5b0jf">jet&amp;ben@durham.police.uk</a></div> <div class="flex svelte-5b0jf"><img src="/../facebook-icon.svg" alt="community award icon" class="svelte-5b0jf"> <a href="https://www.facebook.com/jetandben" class="svelte-5b0jf">Facebook</a></div> <div class="flex svelte-5b0jf"><img src="/../instagram-icon.svg" alt="community award icon" class="svelte-5b0jf"> <a href="https://www.instagram.com/jetandben/" class="svelte-5b0jf">Instagram</a></div> <div class="flex svelte-5b0jf"><img src="/../twitter-icon.svg" alt="community award icon" class="svelte-5b0jf"> <a href="https://twitter.com/jetandben" class="svelte-5b0jf">Twitter</a></div></div>  <div class="card"><h3>Send us a message</h3> <script context="module">export const prerender = true;<\/script> <form name="contact" method="POST" data-netlify="true" action="/success" class="svelte-5b0jf"><p><label class="svelte-5b0jf">Your Name: <input type="text" name="name" class="svelte-5b0jf"></label></p> <p><label class="svelte-5b0jf">Your Email: <input type="email" name="email" class="svelte-5b0jf"></label></p> <p><label class="svelte-5b0jf">Message: <textarea name="message" class="svelte-5b0jf"></textarea></label></p> <p><button type="submit" class="svelte-5b0jf">Send</button></p> <input type="hidden" name="contact" value="contact" class="svelte-5b0jf"></form></div></div></div> </section>`;
});
const css = {
  code: "#banner-container.svelte-hxpqen.svelte-hxpqen{width:100%;overflow:hidden}#banner-container.svelte-hxpqen .photobanner.svelte-hxpqen{height:233px;width:3350px;display:flex;gap:0.5rem}#banner-container.svelte-hxpqen .photobanner img.svelte-hxpqen{max-width:400px;max-height:320px}.first.svelte-hxpqen.svelte-hxpqen{-webkit-animation:svelte-hxpqen-bannermove 30s linear infinite;-moz-animation:svelte-hxpqen-bannermove 30s linear infinite;-ms-animation:svelte-hxpqen-bannermove 30s linear infinite;-o-animation:svelte-hxpqen-bannermove 30s linear infinite;animation:svelte-hxpqen-bannermove 30s linear infinite}@keyframes svelte-hxpqen-bannermove{0%{margin-left:0px}100%{margin-left:-2125px}}@-moz-keyframes svelte-hxpqen-bannermove{0%{margin-left:0px}100%{margin-left:-2125px}}@-webkit-keyframes svelte-hxpqen-bannermove{0%{margin-left:0px}100%{margin-left:-2125px}}@-ms-keyframes svelte-hxpqen-bannermove{0%{margin-left:0px}100%{margin-left:-2125px}}@-o-keyframes svelte-hxpqen-bannermove{0%{margin-left:0px}100%{margin-left:-2125px}}",
  map: null
};
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="banner-container" class="svelte-hxpqen" data-svelte-h="svelte-1elsbbl"><div class="photobanner svelte-hxpqen"><img class="first svelte-hxpqen" src="../banner/banner-2.jpg" alt="Jet as a puppy"> <img src="../banner/banner-3.jpg" alt="Jet as a puppy" class="svelte-hxpqen"> <img src="../banner/banner-4.jpg" alt="Jet as a puppy" class="svelte-hxpqen"> <img src="../banner/banner-5.jpg" alt="Jet as a puppy" class="svelte-hxpqen"> <img src="../banner/banner-6.jpg" alt="Jet as a puppy" class="svelte-hxpqen"> <img src="../banner/banner-7.jpg" alt="Jet as a puppy" class="svelte-hxpqen"> <img src="../banner/banner-8.jpg" alt="Jet as a puppy" class="svelte-hxpqen"> <img src="../banner/banner-9.jpg" alt="Jet as a puppy" class="svelte-hxpqen"> <img src="../banner/banner-10.jpg" alt="Jet as a puppy" class="svelte-hxpqen"> <img src="../banner/banner-2.jpg" alt="Jet as a puppy" class="svelte-hxpqen"> <img src="../banner/banner-3.jpg" alt="Jet as a puppy" class="svelte-hxpqen"> <img src="../banner/banner-4.jpg" alt="Jet as a puppy" class="svelte-hxpqen"> <img src="../banner/banner-5.jpg" alt="Jet as a puppy" class="svelte-hxpqen"> <img src="../banner/banner-6.jpg" alt="Jet as a puppy" class="svelte-hxpqen"> <img src="../banner/banner-7.jpg" alt="Jet as a puppy" class="svelte-hxpqen"> <img src="../banner/banner-8.jpg" alt="Jet as a puppy" class="svelte-hxpqen"> <img src="../banner/banner-9.jpg" alt="Jet as a puppy" class="svelte-hxpqen"> <img src="../banner/banner-10.jpg" alt="Jet as a puppy" class="svelte-hxpqen"></div> </section>`;
});
export {
  Banner as B,
  Contact_section as C
};