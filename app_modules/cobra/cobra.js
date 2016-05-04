function helloWorld( app ) {

	console.log(app.vars.path);

	app.vars.response.write( 'hello world' );

};


function start( app ) {

	// app.node.hooks.addAction( 'response', helloWorld, 0, 1 );

}

exports.start = start;
exports.helloWorld = helloWorld;