

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/onBoarding/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BPxiJbN9.js","_app/immutable/chunks/scheduler.6XUfPiCK.js","_app/immutable/chunks/index.u7qvFAmV.js","_app/immutable/chunks/LoginImage.Zr8_5fYL.js","_app/immutable/chunks/index.Bq6t4Xuo.js"];
export const stylesheets = ["_app/immutable/assets/4.CpZkThGD.css"];
export const fonts = [];
