

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8708caeb.js","_app/immutable/chunks/scheduler.3ef1b4ce.js","_app/immutable/chunks/index.051df08a.js","_app/immutable/chunks/singletons.2607f8de.js"];
export const stylesheets = [];
export const fonts = [];
