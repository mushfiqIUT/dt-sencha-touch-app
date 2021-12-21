/**
 * Date: 12/6/12
 * Time: 5:25 PM
 */
Ext.define('DhakaTribune.store.Article', {
	extend: 'Ext.data.Store',
	requires: [
		'Ext.data.reader.Json',
		'Ext.data.proxy.Ajax'
	],

	config: {
		autoLoad: false,
		model: 'DhakaTribune.model.Article',
		proxy: {
			type: 'ajax',
			actionMethods: {
				read: 'POST'
			},
			url: 'http://imp-dv13/dt-drupal/rest/taxonomy_term/selectNodes.json',
			reader: {
				type: 'json'
			}
		}
	}
});
