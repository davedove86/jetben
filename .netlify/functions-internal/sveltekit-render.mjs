import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","about/about-1.jpg","about/about-2.jpg","about/about-3.jpg","about/about-4.jpg","about/about-5.jpg","about/about-6.jpg","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","arrow.svg","banner/banner-1.jpg","banner/banner-10.jpg","banner/banner-2.jpg","banner/banner-3.jpg","banner/banner-4.jpg","banner/banner-5.jpg","banner/banner-6.jpg","banner/banner-7.jpg","banner/banner-8.jpg","banner/banner-9.jpg","banner/ben-2.jpg","banner/ben-4.jpg","banner/ben-gallery-2.jpg","banner/ben-gallery-4.jpg","banner/jet-gallery-3 2.jpg","banner/jet-gallery-6 2.jpg","banner/ok9-video-image.jpg","ben/ben-1.jpg","ben/ben-2.jpg","ben/ben-3.jpg","ben/ben-4.jpg","ben/ben-5.jpg","ben/ben-6.jpg","ben/ben-section-1.jpg","ben/ben-section-2.jpg","ben-profile.jpg","black-paw-icon.svg","browserconfig.xml","care-home-icon.svg","claire/claire-section-1.jpg","claire/claire-section-2.jpg","clairejetben-2.jpg","clairejetben.jpg","client-banner/ceop.svg","client-banner/daac.svg","client-banner/dbc.svg","client-banner/dc.svg","client-banner/dcc.svg","client-banner/ok9.svg","client-banner/pawsup.svg","client-banner/pcc.svg","community/community-1.jpg","community/community-2.jpg","community/community-3.jpg","community/community-4.jpg","community/community-5.jpg","community/community-6.jpg","community-events-icon.svg","community-icon.svg","compititions-icon.svg","events-icon.svg","facebook-icon.svg","favicon-16x16.png","favicon-32x32.png","favicon.ico","golden-paw-icon.svg","hand.svg","instagram-icon.svg","jet/jet-1.jpg","jet/jet-2.jpg","jet/jet-3.jpg","jet/jet-4.jpg","jet/jet-5.jpg","jet/jet-6.jpg","jet/jet-profile.jpg","logo-white.png","logo.svg","mail-icon.svg","meet-greet-icon.svg","mstile-150x150.png","officer-support-icon.svg","paw-icon.svg","presentations-icon.svg","safari-pinned-tab.svg","school/school-1.jpg","school/school-2.jpg","school/school-3.jpg","school/school-4.jpg","school/school-5.jpg","school/school-6.jpg","school-icon.svg","school-visit-icon.svg","schools-icon.svg","site.webmanifest","team-bg.jpg","twitter-icon.svg","xmas-card-2021.jpeg","xmas-card-2022.jpeg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".xml":"text/xml",".webmanifest":"application/manifest+json",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.PU4dKnh8.js","app":"_app/immutable/entry/app.eHdD9dgx.js","imports":["_app/immutable/entry/start.PU4dKnh8.js","_app/immutable/chunks/entry.U1CGytk3.js","_app/immutable/chunks/scheduler.7VkZYFbt.js","_app/immutable/entry/app.eHdD9dgx.js","_app/immutable/chunks/scheduler.7VkZYFbt.js","_app/immutable/chunks/index.i7fBVTud.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js'))
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
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/ben",
				pattern: /^\/ben\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/claire",
				pattern: /^\/claire\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/community",
				pattern: /^\/community\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/jet",
				pattern: /^\/jet\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/schools",
				pattern: /^\/schools\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/sucess",
				pattern: /^\/sucess\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
