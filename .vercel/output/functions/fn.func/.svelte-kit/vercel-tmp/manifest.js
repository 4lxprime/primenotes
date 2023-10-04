export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","github_white.png","googlef192b8e69eb995e6.html"]),
	mimeTypes: {".png":"image/png",".html":"text/html"},
	_: {
		client: {"start":"_app/immutable/entry/start.518b4b9d.js","app":"_app/immutable/entry/app.ae23a5da.js","imports":["_app/immutable/entry/start.518b4b9d.js","_app/immutable/chunks/scheduler.3ef1b4ce.js","_app/immutable/chunks/singletons.2607f8de.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.ae23a5da.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.3ef1b4ce.js","_app/immutable/chunks/index.051df08a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/api/[tags]",
				pattern: /^\/api\/([^/]+?)\/?$/,
				params: [{"name":"tags","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/_tags_/_server.ts.js'))
			},
			{
				id: "/author/[user_name]",
				pattern: /^\/author\/([^/]+?)\/?$/,
				params: [{"name":"user_name","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/post/[slug]",
				pattern: /^\/post\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
