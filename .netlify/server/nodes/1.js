

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.YeAv4LYo.js","_app/immutable/chunks/scheduler.7VkZYFbt.js","_app/immutable/chunks/index.i7fBVTud.js","_app/immutable/chunks/entry.iOE06gsd.js"];
export const stylesheets = [];
export const fonts = [];
