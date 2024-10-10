export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","404.html","favicon.png","login-wall.jpg","search.svg"]),
	mimeTypes: {".html":"text/html",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.CF1vwRJ7.js","app":"_app/immutable/entry/app.kRe4vTMW.js","imports":["_app/immutable/entry/start.CF1vwRJ7.js","_app/immutable/chunks/entry.C5LlPNOW.js","_app/immutable/chunks/scheduler.6XUfPiCK.js","_app/immutable/chunks/index.Bq6t4Xuo.js","_app/immutable/entry/app.kRe4vTMW.js","_app/immutable/chunks/scheduler.6XUfPiCK.js","_app/immutable/chunks/index.u7qvFAmV.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/onBoarding",
				pattern: /^\/onBoarding\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
