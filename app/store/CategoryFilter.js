/**
 * Date: 12/13/12
 * Time: 8:44 PM
 */


Ext.define('DhakaTribune.store.CategoryFilter', {
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
		},
		 filters: [
			 {
			 property: 'parents',
			 value   : 0
			 }
		 ]
	}


});