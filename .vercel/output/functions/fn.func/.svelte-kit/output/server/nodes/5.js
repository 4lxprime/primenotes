import * as universal from '../entries/pages/search/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/search/+page.ts";
export const imports = ["_app/immutable/nodes/5.1d8ad2ce.js","_app/immutable/chunks/scheduler.3ef1b4ce.js","_app/immutable/chunks/index.051df08a.js","_app/immutable/chunks/utils.ba2e85c2.js"];
export const stylesheets = [];
export const fonts = [];
