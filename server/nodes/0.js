import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BnmDPGnM.js","_app/immutable/chunks/scheduler.6XUfPiCK.js","_app/immutable/chunks/index.u7qvFAmV.js","_app/immutable/chunks/entry.D3KVHID3.js","_app/immutable/chunks/index.Bq6t4Xuo.js"];
export const stylesheets = ["_app/immutable/assets/0.nPjX7TMz.css"];
export const fonts = [];
