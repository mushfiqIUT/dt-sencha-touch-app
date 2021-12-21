/**
 * Date: 12/6/12
 * Time: 4:38 PM
 */
Ext.define('DhakaTribune.controller.WireFrame', {
	extend: 'Ext.app.Controller',
	requires: [
		'Ext.Ajax'
	],

	config: {
		refs: {
			category: 'category',
			articleContainer: 'articlecontainer'
		},
		control: {
			category: {
				categoryTapped: 'onCategoryTapped',
				categorySelected: 'onCategorySelected'
			}
		}
	},

	onCategoryTapped: function (category) {
		this.getArticleContainer()
			.reset();
	},

	onCategorySelected: function (category) {
		var pCatId = category.get('tid');
		var catId = pCatId.toString();

		for (i=0; i<Ext.getStore('Category').getData().length; i++){
			var data = Ext.getStore('Category').getData().items[i].data;
			if(data.parents[0] == pCatId){
				catId = catId + ',' + data.tid;
			}
		};
		var articleStore = Ext.getStore('Article');
		var proxy = articleStore.getProxy();
		proxy.setExtraParam('tids', catId);

		articleStore.load();

		/*articleStore.each(function(record){
			console.log(record.get('field_group_main_image.object[0]'));
		});*/



	/*	var imageStore = Ext.getStore('ArticleImages');
		var imageProxy = imageStore.getProxy();
		imageProxy.setExtraParam('tids', 14);
		//imageProxy.setExtraParam('nid', 43);

		imageStore.load();*/

	}
});
