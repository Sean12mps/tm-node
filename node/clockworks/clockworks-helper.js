function get_app_mods_path( name ) {

	var app_mod_path = '../../app_modules/'+ name +'/'+ name +'.js';

	return app_mod_path;

};

function get_app_node_path( name ) {

	var app_node_path = '../'+ name +'/'+ name +'.js';

	return app_node_path;

};


exports.get_app_mods_path = get_app_mods_path;

exports.get_app_node_path = get_app_node_path;