var app = angular.module('gaiaApp', ['gettext']);

app.run(function(gettextCatalog){
	gettextCatalog.currentLanguage = "en";
	gettextCatalog.debug = true;
});

app.controller("MainCtrl", function($scope){
});