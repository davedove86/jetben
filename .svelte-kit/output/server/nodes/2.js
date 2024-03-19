

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DbybS2GZ.js","_app/immutable/chunks/scheduler.7VkZYFbt.js","_app/immutable/chunks/index.i7fBVTud.js","_app/immutable/chunks/Banner.Ti6bE3rD.js"];
export const stylesheets = ["_app/immutable/assets/2.DREzgruT.css","_app/immutable/assets/Banner.BkDWfSF1.css"];
export const fonts = [];
