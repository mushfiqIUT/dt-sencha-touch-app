/**
 * Date: 12/11/12
 * Time: 3:10 PM
 */
Ext.define('DhakaTribune.controller.ArticleContainer', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			articleContainer: 'articlecontainer'
		},
		control: {
			articleContainer: {
				articleSelected: 'onArticleSelected'
			}
		}
	},

	onArticleSelected: function (article) {
		var newArticle = Ext.create('DhakaTribune.view.Article');
		newArticle.getComponent('articleTitle')
			.setHtml(article.get('title'));
		newArticle.getComponent('articleTeaser')
			.setHtml(article.get('teaser'));
		newArticle.getComponent('articleBody')
			.setHtml(article.get('body'));

		var carousel = newArticle.getComponent('articleCarousel');
		//carousel.removeAll(true, false);

		var imgs = article.get('field_group_main_image');
		var imgItems = [];
		for(var i = 0; i < imgs.length; i++) {
			var imgSrc = 'http://imp-dv13/dt-drupal/' + imgs[i].filepath;
			console.log(imgSrc);

			imgItems.push({
				html: '<img width="266px" height="200px" src="' + imgSrc + '" />'
			});
		}

		carousel.add(imgItems);

		var articleContainer = this.getArticleContainer();
		articleContainer.push(newArticle);

		return true;
	}
});