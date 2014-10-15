'use strict';

module.exports = {
	app: {
		title: 'drunken-octo-bear',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'jade',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/foundation/css/normalize.css',
        // bower:css
        'public/lib/foundation/css/foundation.css',
        'public/lib/highlightjs/styles/default.css',
        // endbower
			],
			js: [
        'public/lib/showdown/src/showdown.js',
        'public/lib/showdown/src/extensions/github.js',
        // bower:js
        'public/lib/modernizr/modernizr.js',
        'public/lib/jquery/dist/jquery.js',
        'public/lib/fastclick/lib/fastclick.js',
        'public/lib/jquery.cookie/jquery.cookie.js',
        'public/lib/jquery-placeholder/jquery.placeholder.js',
        'public/lib/foundation/js/foundation.js',
        'public/lib/angular/angular.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-mocks/angular-mocks.js',
        'public/lib/angular-cookies/angular-cookies.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-touch/angular-touch.js',
        'public/lib/angular-sanitize/angular-sanitize.js',
        'public/lib/angular-ui-utils/ui-utils.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-foundation/mm-foundation-tpls.js',
        'public/lib/angular-markdown/angular.markdown.js',
        'public/lib/highlightjs/highlight.pack.js',
        'public/lib/angular-marked/angular-marked.js',
        // endbower
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};