sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Z_HEREMAP.controller.ViewMain", {
		onInit: function() {
			var tController = this;
			jQuery.sap.includeScript("http://js.api.here.com/v3/3.0/mapsjs-core.js", "mapjs-core", function() {
				jQuery.sap.includeScript("http://js.api.here.com/v3/3.0/mapsjs-service.js", "mapjs-service", function() {
					tController.onMapLibLoaded();
				});
			});		
		},

		onMapLibLoaded: function() {
			var platform = new H.service.Platform({
				// 'app_id': '{YOUR_APP_ID}',
				// 'app_code': '{YOUR_APP_CODE}'
			});
			
			var maptypes = platform.createDefaultLayers();
			var tMapContainerId = this.getView().byId("mapContainer").getId();
			var map = new H.Map(
				document.getElementById(tMapContainerId),
				maptypes.normal.map,
				{
					zoom: 10,
					center: { lng: 13.4, lat: 52.51 }
				});
		}
	});
});