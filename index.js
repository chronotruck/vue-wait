(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["VueWait"] = factory(require("vue"));
	else
		root["VueWait"] = factory(root["vue"]);
})(typeof self !== 'undefined' ? self : this, function(vue) {
  return require('./dist/vue-wait');
})
