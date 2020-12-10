package com.bluefletch.ems;

import android.content.Context;

import com.bluefletch.launcherprovider.LauncherProviderHelper;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

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
            LauncherProviderHelper.addConfigExtAttribute(context, args.getString(0), args.getString(1));
            callbackContext.success();
        }
        else if (action.equals("getConfigExtAttribute")) {
            String value = LauncherProviderHelper.getConfigExtAttribute(context, args.getString(0));
            callbackContext.success(value);
        }
        else if (action.equals("removeConfigExtAttribute")) {
            LauncherProviderHelper.removeConfigExtAttribute(context, args.getString(0));
            callbackContext.success();
        }
        else if (action.equals("addSessionExtAttribute")) {
            LauncherProviderHelper.addSessionExtAttribute(context, args.getString(0), args.getString(1));
            callbackContext.success();
        }
        else if (action.equals("getSessionExtAttribute")) {
            String value = LauncherProviderHelper.getSessionExtAttribute(context, args.getString(0));
            callbackContext.success(value);
        }        
        else if (action.equals("removeSessionExtAttribute")) {
            LauncherProviderHelper.removeSessionExtAttribute(context, args.getString(0));
            callbackContext.success();
        }

        return true;

    }


}
