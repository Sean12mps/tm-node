var http = require( 'http' ),
	routes = require( './routes' ),
	handler = require( './handler' ),
	public = require( '../public/public.js' );


function start( app, callback ) {

	var port = app.config.system.port;

	http
	.createServer( function( request, response ) {


		app.vars['request'] = request;

		app.vars['response'] = response;

		path = routes.getPath( app );

		if ( path == '/favicon.ico' ) return;

		console.log( 'server started @port: ' + port );

		callback();

		routes.start( app );

		handler.start( app );
		
		public.start( app );
		
		/*	@doAction : sever/response : app
			- routes.js - getPath, 5, 1
			- handler.js - writeHead, 10, 1
			- handler.js - writeBody, 15, 1
			- handler.js - writeEnd, 20, 1
		*/
		app.node.hooks.doAction( 'server/response', app );


	} )
	.listen( port );

};


exports.start = start;