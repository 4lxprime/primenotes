import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.3acb82a5.js","_app/immutable/chunks/scheduler.3ef1b4ce.js","_app/immutable/chunks/index.051df08a.js","_app/immutable/chunks/utils.ba2e85c2.js"];
export const stylesheets = ["_app/immutable/assets/0.f8c1db29.css"];
export const fonts = ["_app/immutable/assets/rubik-arabic-wght-normal.bc857679.woff2","_app/immutable/assets/rubik-cyrillic-ext-wght-normal.452feb2a.woff2","_app/immutable/assets/rubik-cyrillic-wght-normal.a7ad9db1.woff2","_app/immutable/assets/rubik-hebrew-wght-normal.95d333fe.woff2","_app/immutable/assets/rubik-latin-ext-wght-normal.f4bbc2bf.woff2","_app/immutable/assets/rubik-latin-wght-normal.47374cb7.woff2"];
