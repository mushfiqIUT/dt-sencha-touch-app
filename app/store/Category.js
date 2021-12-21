/**
 * Date: 11/20/12
 * Time: 2:47 PM
 */

Ext.define('DhakaTribune.store.Category', {
	extend: 'Ext.data.Store',
	requires: [
		'Ext.data.reader.Json',
		'Ext.data.proxy.JsonP'
	],
	config: {
		autoLoad: false,
		model: 'DhakaTribune.model.Category',
		proxy: {
			type: 'ajax',
			actionMethods: {
				read: 'POST'
			},
			url: 'http://imp-dv13/dt-drupal/rest/taxonomy_vocabulary/getTree.json',
			reader: {
				type: 'json'
			}
		}
	}


});