const exec = require('cordova/exec');

/**
 * Constructor
 * @returns {LauncherProvider}
 */
function LauncherProvider() {}

LauncherProvider.prototype.getCurrentSessionAsJson = function(callback) {
    exec(callback, null, 'LauncherProviderPlugin', 'getCurrentSessionAsJson', []);
}

LauncherProvider.prototype.addConfigExtAttribute = function (key, value) {
    exec(null, null, 'LauncherProviderPlugin', 'addConfigExtAttribute', [key, value])
}

LauncherProvider.prototype.removeConfigExtAttribute = function (key, value) {
    exec(null, null, 'LauncherProviderPlugin', 'removeConfigExtAttribute', [key, value])
}

LauncherProvider.prototype.addSessionExtAttribute = function (key, value) {
    exec(null, null, 'LauncherProviderPlugin', 'addSessionExtAttribute', [key, value])
}

LauncherProvider.prototype.removeSessionExtAttribute = function (key, value) {
    exec(null, null, 'LauncherProviderPlugin', 'removeSessionExtAttribute', [key, value])
}

const LauncherProvider = new LauncherProvider();
module.exports = LauncherProvider;