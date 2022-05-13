
define(
	'ESP.ESPSCMAFooterLinks.FooterLinks'
,   [
		'ESP.ESPSCMAFooterLinks.FooterLinks.View',
		'ESP.ESPSCMALoginLinks.View'
	]
,   function (
		FooterLinksView,
		LoginLinksView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			
			if(layout)
			{
				layout.addChildView('Footer.Links', function() { 
					return new FooterLinksView({ container: container });
				});
				layout.addChildView('Login.Links',function(){
					return new LoginLinksView({container:container});
				});
			}

		}
	};
});
