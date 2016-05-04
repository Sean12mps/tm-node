var func 	= require( './clockworks-helper' );


function load_mods( app ) {

	for ( var i in app.config.mods ) {

		var mod_name = app.config.mods[i];

		try {

			app.mods[mod_name] = require( func.get_app_mods_path( mod_name ) );

		} catch(e) {
			
			console.log( ''+ e +'' );

		}

	}

	for ( var mod_name in app.mods ) {


		if ( typeof( app.mods[mod_name].start ) == 'undefined' ) {

			var err = app.config.labels.error.mod_start( mod_name );
			
			console.log( err );

		} else {
			
			app.mods[mod_name].start( app );
			
		}

	}

};

function start( config ) {

	var app = {
		'mods' 	: {},
		'node' 	: {
			'server'	: require( func.get_app_node_path( 'server' ) ),
			'hooks'		: require( func.get_app_node_path( 'wp-hooks' ) ),
		},
		'config': config,
		'vars'	: {}
	};

	app['hooks'] = ( function() {
		return app.node.hooks;
	} )();

	app.node.server.start( app, function() {

		load_mods( app );

	} );

};


exports.start = start;