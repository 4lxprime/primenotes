import * as universal from '../entries/pages/post/_slug_/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/post/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/post/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/4.710d7ae9.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.8651a791.js","_app/immutable/chunks/scheduler.3ef1b4ce.js","_app/immutable/chunks/index.051df08a.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/utils.ba2e85c2.js"];
export const stylesheets = [];
export const fonts = [];
