

public class LauncherProviderPlugin extends CordovaPlugin {

    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {

        Context context = cordova.getActivity().getApplicationContext();

        if (action.equals("getCurrentSessionAsJson")) {

            String currentSession = LauncherProviderHelper.getCurrentSessionAsJson(context);
            JSONObject sessionObject = new JSONObject(currentSession);
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, sessionObject);
            pluginResult.setKeepCallback(true);
            callbackContext.sendPluginResult(pluginResult);       
        }
        else if (action.equals("addConfigExtAttribute")) {
            LauncherProviderHelper.addConfigExtAttribute(args.)
            callbackContext.success();
        }
        
    }


}