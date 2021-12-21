/**
 * Date: 12/14/12
 * Time: 4:43 PM
 */

Ext.define('DhakaTribune.store.ArticleImages', {
	extend: 'Ext.data.Store',
	requires: [
		'Ext.data.reader.Json',
		'Ext.data.proxy.Ajax'
	],

	config: {
		autoLoad: false,
		model: 'DhakaTribune.model.ArticleImages',
		proxy: {
			type: 'ajax',
			actionMethods: {
				read: 'POST'
			},
			url: 'http://imp-dv13/dt-drupal/rest/taxonomy_term/selectNodes.json',
			reader: {
				type: 'json',
				rootProperty: 'field_group_main_image'
			}
		}
	}
});