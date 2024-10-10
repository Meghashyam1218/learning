import * as server from '../entries/pages/register/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.js";
export const imports = ["_app/immutable/nodes/5.DZC9x_N6.js","_app/immutable/chunks/scheduler.6XUfPiCK.js","_app/immutable/chunks/index.u7qvFAmV.js","_app/immutable/chunks/LoginImage.Zr8_5fYL.js"];
export const stylesheets = ["_app/immutable/assets/5.YK3ljf-A.css"];
export const fonts = [];
