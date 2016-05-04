var url = require( 'url' );


function getPath( app ) {

	pathname = url.parse( app.vars.request.url ).pathname;

	app.vars['path'] = pathname;

	return pathname;

}


function start( app ) {

	app.node.hooks.addAction( 'server/response', getPath, 5, 1 );

};


exports.getPath = getPath;

exports.start = start;