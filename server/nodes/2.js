import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.n1YtJ6Dr.js","_app/immutable/chunks/scheduler.6XUfPiCK.js","_app/immutable/chunks/index.u7qvFAmV.js"];
export const stylesheets = ["_app/immutable/assets/2.C3TnBFuK.css"];
export const fonts = [];
