angular.module('mainCtrl', [])
	.controller('mainController', function() {
		$.material.init();
		var self = this;

		this.title = "Reddiato!";
	});
