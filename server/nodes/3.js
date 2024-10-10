

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.aaIg4ogM.js","_app/immutable/chunks/scheduler.6XUfPiCK.js","_app/immutable/chunks/index.u7qvFAmV.js","_app/immutable/chunks/LoginImage.Zr8_5fYL.js"];
export const stylesheets = ["_app/immutable/assets/3.DNV5I4_0.css"];
export const fonts = [];
