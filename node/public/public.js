function getHeader( app ) {
	app.vars.response.write( '<!DOCTYPE html>' );
	app.vars.response.write( '<html class="no-js">' );
	app.vars.response.write( '<head>' );
	app.vars.response.write( '</head>' );
	app.vars.response.write( '<body>' );
};

function getContent( app ) {
	app.vars.response.write( '<h1>Hello World</h1>' );
};

function getFooter( app ) {
	app.vars.response.write( '</body>' );
	app.vars.response.write( '</html>' );
};

function start( app ) {

	app.hooks.addAction( 'response', getHeader, 0, 1 );

	app.hooks.addAction( 'response', getContent, 0, 2 );

	app.hooks.addAction( 'response', getFooter, 0, 3 );

};

exports.start = start;