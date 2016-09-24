(function () {
	'use strict';
	angular.module('lacbus').constant("routesUrls",
		{ 
			"tenant":{
				"list": "/yuberapi/rest/tenant/list",
				"create": "/yuberapi/rest/tenant/create",
				"activate": "/yuberapi/rest/tenant/activate",
				"deactivate": "/yuberapi/rest/tenant/deactivate",
				"delete": "/yuberapi/rest/tenant/delete"
			},
		    "user":{
		        "create": "/yuberapi/rest/usuarios/altausuario",
		        "edit": "/yuberapi/rest/usuarios/editarusuario",
		        "get": "/yuberapi/rest/usuarios/getusuario",
		        "login": "/yuberapi/rest/usuarios/loginusuario"
		    }
  });
	 
})();