function header( app ) {

	app.vars.response.write( 'this is head' );

};

function start( app ) {

	// app.node.hooks.addAction( 'response', header, 0, 1 );

};

exports.start = start;