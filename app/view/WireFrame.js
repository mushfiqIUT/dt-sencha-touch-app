/**
 * Date: 11/18/12
 * Time: 7:09 PM
 */
Ext.define('DhakaTribune.view.WireFrame', {
	extend: 'Ext.Container',
	alias: 'widget.wireframe',
	requires: ['Ext.navigation.View'],

	config: {
		layout: 'hbox'
	},

	initialize: function () {
		this.callParent(arguments);

		var topToolbar = {
			xtype: 'titlebar',
			docked: 'top',
			ui: 'light'
		};

		var leftNavBar = {
			xtype: 'category',
			docked: 'left',
			flex: 1,
			width: '30%'
		};

		var newsContainer = {
			xtype: 'articlecontainer',
			docked: 'right',
			flex: 2,
			width: '70%'
		};

		this.add([topToolbar, leftNavBar, newsContainer]);
	}
});