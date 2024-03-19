

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.n_Tx2nbZ.js","_app/immutable/chunks/scheduler.7VkZYFbt.js","_app/immutable/chunks/index.i7fBVTud.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/ContactCta.MTmroOmW.js"];
export const stylesheets = ["_app/immutable/assets/3.smd0efI_.css","_app/immutable/assets/ContactCta.qQNe-TmX.css"];
export const fonts = [];
