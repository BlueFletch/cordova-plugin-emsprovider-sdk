const exec = require('cordova/exec');

/**
 * Constructor
 * @returns {LauncherProvider}
 */
function LauncherProviderPlugin() {}

/**
 * Get the entire session in a JSON object.
 * @param {} callback 
 */
LauncherProviderPlugin.prototype.getCurrentSessionAsJson = function(callback) {
    exec(callback, null, 'LauncherProviderPlugin', 'getCurrentSessionAsJson', []);
}

/**
 * Configuration extended attributes.
 * @param {} key 
 * @param {*} value 
 */
LauncherProviderPlugin.prototype.addConfigExtAttribute = function (key, value) {
    exec(null, null, 'LauncherProviderPlugin', 'addConfigExtAttribute', [key, value])
}

LauncherProviderPlugin.prototype.getConfigExtAttribute = function(key, callback) {
    exec(callback, null, 'LauncherProviderPlugin', 'getConfigExtAttribute', [key]);
}

LauncherProviderPlugin.prototype.removeConfigExtAttribute = function (key) {
    exec(null, null, 'LauncherProviderPlugin', 'removeConfigExtAttribute', [key])
}

/**
 * Session extended attributes
 * @param {} key 
 * @param {*} value 
 */
LauncherProviderPlugin.prototype.addSessionExtAttribute = function (key, value) {
    exec(null, null, 'LauncherProviderPlugin', 'addSessionExtAttribute', [key, value])
}

LauncherProviderPlugin.prototype.getSessionExtAttribute = function (key, callback) {
    exec(callback, null, 'LauncherProviderPlugin', 'getSessionExtAttribute', [key]);
}

LauncherProviderPlugin.prototype.removeSessionExtAttribute = function (key) {
    exec(null, null, 'LauncherProviderPlugin', 'removeSessionExtAttribute', [key])
}

const LauncherProvider = new LauncherProviderPlugin();
module.exports = LauncherProvider;