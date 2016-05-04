/*var app = {

	// server requirements
	config 	: require( './node/config.js' ),
	server 	: require( './node/server.js' ),
	routes 	: require( './node/routes.js' ),
	public 	: require( './node/public.js' ),

	// app requirements
	hooks	: require( './app_modules/wp-hooks.js' ),
	start 	: require( './app_modules/clockworks.js' ),

};

app.start( app );*/

var clockworks 	= require( './node/clockworks/clockworks.js' ),
	config 		= require( './app-config' );

clockworks.start( config );