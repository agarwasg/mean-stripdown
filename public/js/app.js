window.app = angular.module('ngFantasyFootball', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ngRoute', 'ngff.controllers', 'ngff.directives', 'ngff.services']);

// bundling dependencies
window.angular.module('ngff.controllers', ['ngff.controllers.header','ngff.controllers.index','ngff.controllers.epl','ngff.controllers.leagues']);
window.angular.module('ngff.services', ['ngff.services.global','ngff.services.epl','ngff.services.leagues']);