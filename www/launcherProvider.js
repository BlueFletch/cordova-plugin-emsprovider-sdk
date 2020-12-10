const exec = require('cordova/exec');

/**
 * Constructor
 * @returns {LauncherProvider}
 */
function LauncherProviderPlugin() {}

LauncherProviderPlugin.prototype.getCurrentSessionAsJson = function(callback) {
    exec(callback, null, 'LauncherProviderPlugin', 'getCurrentSessionAsJson', []);
}

LauncherProviderPlugin.prototype.addConfigExtAttribute = function (key, value) {
    exec(null, null, 'LauncherProviderPlugin', 'addConfigExtAttribute', [key, value])
}

LauncherProviderPlugin.prototype.removeConfigExtAttribute = function (key, value) {
    exec(null, null, 'LauncherProviderPlugin', 'removeConfigExtAttribute', [key, value])
}

LauncherProviderPlugin.prototype.addSessionExtAttribute = function (key, value) {
    exec(null, null, 'LauncherProviderPlugin', 'addSessionExtAttribute', [key, value])
}

LauncherProviderPlugin.prototype.removeSessionExtAttribute = function (key, value) {
    exec(null, null, 'LauncherProviderPlugin', 'removeSessionExtAttribute', [key, value])
}

const LauncherProvider = new LauncherProviderPlugin();
module.exports = LauncherProvider;