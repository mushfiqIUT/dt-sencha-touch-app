/**
 * Date: 11/20/12
 * Time: 3:16 PM
 */
Ext.define('DhakaTribune.controller.Category', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			category: 'category'
		}
	},

	init: function() {
		this.callParent(arguments);

		Ext.Ajax.request({
			url: 'http://imp-dv13/dt-drupal/rest/taxonomy_vocabulary?parameters[name]=Section',
			method: 'GET',

			success: function (response, opts) {
				var resData = response.responseXML;
				var element = resData.getElementsByTagName('vid')[0];
				var vidValue = parseInt(element.textContent, 10);

				var categoryStore = Ext.getStore('Category');
				var proxy = categoryStore.getProxy();
				proxy.setExtraParam('vid', vidValue);
				categoryStore.load();

				categoryStore = Ext.getStore('CategoryFilter');
				proxy = categoryStore.getProxy();
				proxy.setExtraParam('vid', vidValue);
				categoryStore.load();
			},

			failure: function () {
				console.log('vid retrieval failed due to some errors.');
			}
		});
	},

	launch: function () {
		this.callParent(arguments);

		Ext.getStore('CategoryFilter')
			.on('load', this.onCategoryLoad, this.getCategory());
	},

	onCategoryLoad: function () {
		this.select(0);
	}
});