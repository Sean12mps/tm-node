var reload = require( 'require-reload' );


function writeHead( app ) {

	/*	@applyFilters : 'server/response_code' : app.config.system.response_code, app
	*/
	var responseCode = app.node.hooks.applyFilters( 'server/response_code', app.config.system.response_code, app );
	
	/*	@applyFilters : 'server/content_type' : app.config.system.content_type, app
	*/
	var content_type = app.node.hooks.applyFilters( 'server/content_type', app.config.system.content_type, app );

	app.vars.response.writeHead( responseCode, {
		'Content-Type' : content_type
	} );

};


function writeBody( app ) {

	/*	@doAction : response : app
	*/
	app.node.hooks.doAction( 'response', app );

};


function writeEnd( app ) {

	app.vars.response.end();
	
	app.node.hooks.reload();

};


function start( app ) {

	app.node.hooks.addAction( 'server/response', writeHead, 10, 1 );

	app.node.hooks.addAction( 'server/response', writeBody, 15, 1 );
	
	app.node.hooks.addAction( 'server/response', writeEnd, 999, 1 );

};


exports.start = start;