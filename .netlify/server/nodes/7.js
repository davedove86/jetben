import * as server from '../entries/pages/contact/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/7.RxorRnsz.js","_app/immutable/chunks/scheduler.7VkZYFbt.js","_app/immutable/chunks/index.i7fBVTud.js","_app/immutable/chunks/Banner.Ti6bE3rD.js"];
export const stylesheets = ["_app/immutable/assets/Banner.BkDWfSF1.css"];
export const fonts = [];
