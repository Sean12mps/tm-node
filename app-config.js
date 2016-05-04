exports.label = {
	'site_title' 		: 'Twellve Miracle',
	'site_description'	: 'Just another junk.',
};

exports.system = {
	'port'				: 8000,
	'response_code'		: 200,
	'contentType'		: 'text/html',
};

exports.mods = [
	'cobra',
	'hell'
];

exports.labels = {
	'error' 			: {
		'mod_start'			: function( mod_name ) {
			if ( typeof( mod_name ) == 'undefined' ) { mod_name = 'mod'; }
			return 'Error: Module \''+ mod_name +'\' have no start function';
		}
	}
};