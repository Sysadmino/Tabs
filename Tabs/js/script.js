//JavaScript
var jsTriggers = document.body.querySelectorAll('.js-tab-trigger');

jsTriggers.forEach(function (item, i){
	item.addEventListener('click', function (){
		var tabName = this.getAttribute('data-tab'), 
			tabContent = document.body.querySelector('.js-tab-content[data-tab="'+tabName+'"]');
		console.log(tabName);
		
		
		document.body.querySelectorAll('.js-tab-content.active').forEach(function(item, i){
			item.classList.remove('active');
		})
		
		document.body.querySelectorAll('.js-tab-trigger.active').forEach(function(item, i){
			item.classList.remove('active');
		})
		
		tabContent.classList.add('active');
		this.classList.add('active');
	})
});

