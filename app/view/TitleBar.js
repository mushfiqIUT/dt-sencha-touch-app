/**
 * Date: 11/20/12
 * Time: 12:53 PM
 */
Ext.define('DhakaTribune.view.TitleBar', {
	extend: 'Ext.Toolbar',
	alias: 'widget.titlebar',
	requires: ['Ext.Label'],

	config: {
		title: {
			xtype: 'label',
			docked: 'bottom',
			html: 'Dhaka Tribune - Need to add style here',
			ui: 'light'
		},
		items: [
			{
				xtype: 'button',
				iconCls: 'refresh',
				iconMask: true,
				id: 'refreshButton',
				docked: 'right',
				ui: 'light'
			}
		]
	}
});